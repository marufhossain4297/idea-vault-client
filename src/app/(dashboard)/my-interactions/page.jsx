'use client'
import React, { useEffect, useState } from 'react';
import '../../globals.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Hanken_Grotesk } from 'next/font/google';
import { authClient } from '@/lib/auth-client';
import CommentByUser from '@/app/components/Pages/CommentByUser';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const MyInteractions = () => {

    const { data: session } = authClient.useSession();
    const userId = session?.user?.id;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (!userId) return;

        fetch(`http://localhost:8000/comments/${userId}`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => console.error(err));
    }, [userId]);

    return (
        <div className='w-11/12 lg:w-full mx-auto lg:mt-0 mt-8'>
            <h2 className={`${hankenGrotesk.className} text-3xl font-bold`}>My Interactions</h2>
            <p className='text-[#6A7282] text-[17px] mt-1'>View ideas you&apos;ve liked and comments you&apos;ve made.</p>
            <div className='mt-9'>
                <Tabs>
                    <TabList>
                        <Tab>Comments ({comments.length})</Tab>
                        <Tab>Liked Ideas ()</Tab>
                    </TabList>

                    <TabPanel>
                        <CommentByUser comments={comments} />
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MyInteractions;