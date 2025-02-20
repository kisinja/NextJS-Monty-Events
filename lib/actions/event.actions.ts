"use server";

import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";
import Event from "../database/models/event.model";
import User from "../database/models/user.model";
import { handleError } from "../utils";

type CreateEventsParams = {
    event: {
        title: string;
        description: string;
        location: string;
        date: Date;
        category: string;
    };
    userId: string;
    path: string;
};

const populateEvent = async (query: any) => {
    return query
        .populate({
            path: 'organizer',
            model: User,
            select: '_id firstName lastName'
        })
        .populate({
            path: 'category',
            model: Category,
            select: '_id name'
        });
};


export const createEvent = async ({ event, userId, path }: CreateEventsParams) => {
    try {
        await connectToDatabase();

        const organizer = await User.findById(userId);

        if (!organizer) {
            throw new Error("Organizer not found");
        }

        /* console.log({
            categoryId: event.category._id,
            organizerId: userId,
        }) */

        const newEvent = await Event.create({
            ...event,
            category: event.category,
            organizer: userId,
        });

        return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
        handleError(error);
    }
};

export const getEventById = async (eventId: string) => {
    try {
        const event = await populateEvent(Event.findById(eventId));
        if (!event) {
            throw new Error("Event not found");
        }

        return JSON.parse(JSON.stringify(event));
    } catch (error) {
        handleError(error);
    }
};