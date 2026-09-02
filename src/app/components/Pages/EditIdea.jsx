'use client'
import React from 'react';
import { Upload } from 'lucide-react';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Button, Select, FieldError, Form, Input, Label, ListBox, TextField, TextArea } from "@heroui/react";
import { redirect } from 'next/navigation';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});


const EditIdea = ({ idea }) => {

    const {_id} = idea

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const idea = Object.fromEntries(formData.entries())

        const res = await fetch(`http://localhost:8000/ideas/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(idea)
        })
        const data = await res.json()
        
        if (data) {
            redirect('/my-ideas')
        }
    }


    return (
        <div>
            <div data-aos="fade-up" className='w-11/12 mx-auto py-16 lg:px-12'>


                <div className='shadow-[0_20px_100px_rgba(79,70,229,0.12)] border border-[#C7C4D8] rounded-2xl p-6 md:p-8'>

                    <form onSubmit={onSubmit} className="flex flex-col gap-4">

                        <TextField defaultValue={idea?.title} isRequired name='title' type="text">
                            <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Idea Title</Label>

                            <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="E.g., Quantum Encrypted Cloud Storage" />

                            <FieldError />
                        </TextField>

                        <div className='grid md:grid-cols-2 gap-4'>
                            <div>
                                <Select defaultValue={idea?.category} name='category' isRequired placeholder="Select category">
                                    <Label className='text-black text-[16px] font-semibold border-none'>Category</Label>

                                    <Select.Trigger className="rounded-2xl py-3.5 px-4 shadow-none border border-slate-300">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>

                                            <ListBox.Item id="AI Tools" textValue="AI Tools">AI Tools<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="Real Estate Tech" textValue="Real Estate Tech">Real Estate Tech<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="Developer Tools" textValue="Developer Tools">Developer Tools<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="Productivity" textValue="Productivity">Productivity<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="Hardware & Health" textValue="Hardware & Health">Hardware & Health<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="Fintech & SaaS" textValue="Fintech & SaaS">Fintech & SaaS<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="No-Code" textValue="No-Code">No-Code<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="CleanTech" textValue="CleanTech">CleanTech<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="Design Tools" textValue="Design Tools">Design Tools<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="HR Tech" textValue="HR Tech">HR Tech<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="Connectivity" textValue="Connectivity">Connectivity<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="HealthTech" textValue="HealthTech">HealthTech<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="Cybersecurity" textValue="Cybersecurity">Cybersecurity<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="E-commerce" textValue="E-commerce">E-commerce<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="EventTech" textValue="EventTech">EventTech<ListBox.ItemIndicator /></ListBox.Item>

                                            <ListBox.Item id="AI Media" textValue="AI Media">AI Media<ListBox.ItemIndicator /></ListBox.Item>

                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <div>
                                <TextField defaultValue={idea?.budget} isRequired name='budget' type="number">
                                    <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Estimated Budget</Label>

                                    <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="$0.00" />

                                    <FieldError />
                                </TextField>
                            </div>
                        </div>

                        <TextField defaultValue={idea?.image} isRequired name='image' type="url">
                            <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Image Url</Label>

                            <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="https://www.image.com" />

                            <FieldError />
                        </TextField>

                        <div className='grid md:grid-cols-2 gap-4'>
                            <div>
                                <TextField defaultValue={idea?.targetaudience} isRequired name='targetaudience' type="text">
                                    <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Target Audience</Label>

                                    <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="E.g., Enterprise B2B, Students" />

                                    <FieldError />
                                </TextField>
                            </div>

                            <div>
                                <TextField defaultValue={idea?.tags} name='tags' type="text">
                                    <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Tags</Label>

                                    <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="Comma separated (e.g., saas, cloud, security)" />

                                    <FieldError />
                                </TextField>
                            </div>
                        </div>

                        <TextField defaultValue={idea?.shortdescription} isRequired name='shortdes' maxLength={150} type="text">
                            <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Short Description</Label>

                            <p className='text-sm text-[#464555] mb-2'>A brief elevator pitch (max 150 characters).</p>

                            <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="Summarize your idea in a few sentences..." />

                            <FieldError />
                        </TextField>

                        <div className='grid md:grid-cols-2 gap-6'>
                            <div>
                                <TextField defaultValue={idea?.problemstatement} name='problemstatement' isRequired>
                                    <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Problem Statement</Label>

                                    <TextArea rows={7} placeholder="What pain point does this solve?" className="rounded-2xl px-4 pt-3 shadow-none border border-slate-300" />

                                    <FieldError />
                                </TextField>
                            </div>

                            <div>
                                <TextField defaultValue={idea?.solution} name='solution' isRequired>
                                    <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Proposed Solution</Label>

                                    <TextArea rows={7} placeholder="How does your idea address the problem?" className="rounded-2xl px-4 pt-3 shadow-none border border-slate-300" />

                                    <FieldError />
                                </TextField>
                            </div>
                        </div>

                        <TextField defaultValue={idea?.description} name='description' isRequired>
                            <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Detailed Description</Label>

                            <TextArea rows={9} placeholder="Provide full context, technical details, and background here..." className="rounded-2xl px-4 pt-3 shadow-none border border-slate-300" />

                            <FieldError />
                        </TextField>

                        <div className="text-right mt-4">

                            <Button className="rounded-2xl px-4 font-semibold bg-[#3525CD] py-6 text-white" type="submit"> <Upload /> Edit Idea </Button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditIdea;