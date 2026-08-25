'use client'
import React from 'react';
import { Upload } from 'lucide-react';
import { Hanken_Grotesk } from 'next/font/google';
import { Button, Select, FieldError, Form, Input, Label, ListBox, TextField, TextArea } from "@heroui/react";
import { authClient } from '@/lib/auth-client';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const AddIdeaPage = () => {

    const { data: session, isPending, error } = authClient.useSession()
    const user = session?.user
    console.log(user);

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const ideaInfo = Object.fromEntries(formData.entries())
        const { title, category, budget, image, targetaudience, tags, shortdes, problemstatement, solution, description } = ideaInfo
        const ideaInfoWithUser = {
            userId: user?.id,
            email: user?.email,
            name: user?.name,
            userImage: user?.image,
            title: title,
            category: category,
            budget: budget,
            tags: tags,
            image: image,
            targetaudience: targetaudience,
            shortdescription: shortdes,
            problemstatement: problemstatement,
            solution: solution,
            description: description,
            createdAt: new Date().toISOString()
        }
        const res = await fetch('http://localhost:8000/ideas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(ideaInfoWithUser)
        })
        const data = await res.json()
    }

    return (
        <div data-aos="fade-up" className='w-7/12 mx-auto py-16 px-12'>
            <div className=''>
                <h2 className={`text-5xl font-bold ${hankenGrotesk.className}`}>Publish your Idea</h2>
                <p className='text-[18px] mb-8 text-[#464555] mt-2'>Formalize your concept and secure it in the vault.</p>
            </div>
            <div className='shadow-[0_20px_100px_rgba(79,70,229,0.12)] border border-[#C7C4D8] rounded-2xl p-8'>
                <Form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField
                        isRequired
                        name='title'
                        type="text"
                    >
                        <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Idea Title</Label>

                        <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="E.g., Quantum Encrypted Cloud Storage" />

                        <FieldError />
                    </TextField>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Select
                                name='category'
                                isRequired

                                placeholder="Select category"
                            >
                                <Label className='text-black border-none'>Category</Label>

                                <Select.Trigger className="rounded-2xl py-3.5 px-4 shadow-none border border-slate-300">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="teach" textValue="Tech">
                                            Tech
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Health" textValue="Health">
                                            Health
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="AI" textValue="AI">
                                            AI
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Education" textValue="Education">
                                            Education
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Fintech" textValue="Fintech">
                                            Fintech
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Sustainability" textValue="Sustainability">
                                            Sustainability
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        <div>
                            <TextField
                                isRequired
                                name='budget'
                                type="number"
                            >
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Estimated Budget</Label>

                                <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="$0.00" />

                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <TextField
                        isRequired
                        name='image'
                        type="url"
                    >
                        <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Image Url</Label>

                        <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="https://www.image.com" />

                        <FieldError />
                    </TextField>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <TextField
                                isRequired
                                name='targetaudience'
                                type="text"
                            >
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Target Audience</Label>

                                <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="E.g., Enterprise B2B, Students" />

                                <FieldError />
                            </TextField>
                        </div>

                        <div>
                            <TextField
                                name='tags'
                                type="text"
                            >
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Tags</Label>

                                <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="Comma separated (e.g., saas, cloud, security)" />

                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <TextField
                        isRequired
                        name='shortdes'
                        maxLength={150}
                        type="text"
                    >
                        <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Short Description</Label>
                        <p className='text-sm text-[#464555] mb-2'>A brief elevator pitch (max 150 characters).</p>

                        <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="Summarize your idea in a few sentences..." />

                        <FieldError />
                    </TextField>



                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <TextField
                                name='problemstatement' isRequired>
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Problem Statement</Label>
                                <TextArea
                                    rows={7}
                                    placeholder="What pain point does this solve?"
                                    className="rounded-2xl px-4 pt-3 shadow-none border border-slate-300"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        <div>
                            <TextField name='solution' isRequired>
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Proposed Solution</Label>
                                <TextArea
                                    rows={7}
                                    placeholder="How does your idea address the problem?"
                                    className="rounded-2xl px-4 pt-3 shadow-none border border-slate-300"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <TextField name='description' isRequired>
                        <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Detailed Description</Label>
                        <TextArea
                            rows={9}
                            placeholder="Provide full context, technical details, and background here..."
                            className="rounded-2xl px-4 pt-3 shadow-none border border-slate-300"
                        />
                        <FieldError />
                    </TextField>

                    <div className="text-right">
                        <Button className="rounded-2xl px-4 font-semibold bg-[#3525CD] py-6" type="submit"> <Upload /> Publish Idea </Button>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default AddIdeaPage;