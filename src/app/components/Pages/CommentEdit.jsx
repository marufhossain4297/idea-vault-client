'use client'
import { Button, FieldError, TextArea, TextField } from '@heroui/react';
import { Upload } from 'lucide-react';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import React from 'react';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const CommentEdit = ({ comment }) => {

    const {_id} = comment

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const comment = Object.fromEntries(formData.entries())

        const res = await fetch(`https://idea-vault-server-opal.vercel.app/comment/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        const data = await res.json()
        if(data){
            window.location.reload()
        }
    }

    return (
        <div>
            <div className='p-4 border rounded-2xl border-[#C7C4D8]'>
                <form onSubmit={onSubmit} className='flex flex-wrap items-center gap-3'>
                    <TextField
                        name='comment' defaultValue={comment?.comment} className="flex-1" isRequired>
                        <TextArea
                            rows={2}
                            placeholder="Add a constructive comment..."
                            className="rounded-2xl placeholder:text-[#6B7280] shadow-none border border-[#C7C4D8] bg-[#E9EDFF]"
                        />
                        <FieldError />
                    </TextField>

                    <div className="text-right flex gap-2">
                        <Button className={`${jetBrainsMono.className} rounded-2xl px-4 font-semibold bg-[#3525CD] py-6`} type="submit"> <Upload /> Edit comment</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommentEdit;