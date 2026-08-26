'use client'
import React from 'react';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Avatar, Button, FieldError, Label, TextArea, TextField } from '@heroui/react';
import { Upload } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Comment from './Comment';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const CommentPage = ({ comments, id }) => {

    const { data: session, isPending, error } = authClient.useSession()
    const user = session?.user

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const commentInfo = Object.fromEntries(formData.entries())
        const commentInfoWithUser = {
            userId: user?.id,
            email: user?.email,
            name: user?.name,
            ideaId: id,
            userImage: user?.image,
            comment: commentInfo.comment,
            createdAt: new Date().toISOString()
        }
        const res = await fetch('http://localhost:8000/comment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(commentInfoWithUser)
        })
        const data = await res.json()
        if (data) {
            window.location.reload()
        }
    }


    return (
        <div>
            <h2 className={`${hankenGrotesk.className} text-2xl border-b border-[#C7C4D8] font-semibold pb-5 mb-10.25`}>Discussion ({comments.length})</h2>

            <div className='p-4 border rounded-2xl border-[#C7C4D8]'>
                <form onSubmit={onSubmit}>
                    <TextField
                        name='comment' isRequired>
                        <TextArea
                            rows={4}
                            placeholder="Add a constructive comment..."
                            className="rounded-2xl placeholder:text-[#6B7280] shadow-none border border-[#C7C4D8] bg-[#E9EDFF]"
                        />
                        <FieldError />
                    </TextField>

                    <div className="text-right mt-4">
                        <Button className={`${jetBrainsMono.className} rounded-2xl px-4 font-semibold bg-[#3525CD] py-6`} type="submit"> <Upload /> Post Comment </Button>
                    </div>
                </form>
            </div>

            <div>
                <Comment comments={comments} />
            </div>
        </div>
    );
};

export default CommentPage;