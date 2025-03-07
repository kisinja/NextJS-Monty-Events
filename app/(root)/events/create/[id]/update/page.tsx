'use client'

import EventForm from '@/components/shared/EventForm';
import { useUser } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const UpdateEvent = () => {

    /* const { sessionClaims } = auth();
    console.log(sessionClaims); */
    const { user } = useUser();
    const userId = user?.id as string;
    console.log(user);

    return (
        <>
            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <h3 className='wrapper h3-bold text-center sm:text-left'>Update Event</h3>
            </section>
            <div className="wrapper my-8">
                <EventForm userId="67bb2b3376b42fe93b0e7d00" type="Update" />
            </div>
        </>
    )
}

export default UpdateEvent;