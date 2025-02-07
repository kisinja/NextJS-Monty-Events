"use server";

import { CreateCategoryParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";

export const createCategory = async (categoryName: string) => {
    try {
        await connectToDatabase();

        // Create category
        const newCategory = await Category.create({ name: categoryName });

        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
        handleError(error);
    }
};

export const getAllCategories = async () => {
    try {
        await connectToDatabase();

        // Create category
        const categories = await Category.find();

        return JSON.parse(JSON.stringify(categories));
    } catch (error) {
        handleError(error);
    }
};