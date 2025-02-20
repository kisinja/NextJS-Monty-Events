import EventForm from '@/components/shared/EventForm';
import { useUser } from '@clerk/nextjs';
import { auth, clerkClient } from '@clerk/nextjs/server';
import React from 'react'

const CreateEvent = async () => {

    /* const { userId } = await auth();
    console.log(userId);



    const user = await clerkClient.users?.getUser(userId);
    console.log(user); */

    return (
        <>
            <section className='bg-red-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 sm:py-8'>
                <h3 className='wrapper h3-bold text-center sm:text-left'>Create Event</h3>
            </section>
            <div className="wrapper my-8">
                <EventForm userId="67b07d49f8af8e4520d52594" type="Create" />
            </div>
        </>
    );
};

export default CreateEvent;