'use client'
import React, { useState } from 'react';
import { MinusCircle, Plus, Upload } from 'lucide-react';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Button, Select, FieldError, Form, Input, Label, ListBox, TextField, TextArea } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const AddIdeaPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;


    const [collaborations, setCollaborations] = useState([]);


    const handleAddCollaboration = () => {
        setCollaborations((prev) => [...prev, { name: '', role: '', logo: '' }]);
    };

    const handleRemoveCollaboration = (indexToRemove) => {
        setCollaborations((prev) => prev.filter((_, index) => index !== indexToRemove));
    };


    const handleCollaborationChange = (index, field, value) => {
        setCollaborations((prev) => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const ideaInfo = Object.fromEntries(formData.entries());
        const { title, category, budget, image, targetaudience, tags, shortdes, problemstatement, solution, description } = ideaInfo;

        const ideaInfoWithUser = {
            userId: user?.id,
            email: user?.email,
            name: user?.name,
            userImage: user?.image,
            title,
            category,
            budget,
            tags: [tags],
            image,
            targetaudience,
            shortdescription: shortdes,
            problemstatement,
            solution,
            description,
            createdAt: new Date().toISOString(),
            collaborations: collaborations
        };

        const { data: tokenData } = await authClient.token()

        const res = await fetch('https://idea-vault-server-opal.vercel.app/ideas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': `${tokenData.token}`
            },
            body: JSON.stringify(ideaInfoWithUser)
        });
        const data = await res.json();
        if (data) {
            toast.success('Idea added success')
            redirect('/ideas')
        }
        else {
            toast.error(error.massage)
        }
    };

    return (
        <div data-aos="fade-up" className='w-11/12 mx-auto py-16 lg:px-12'>

            <div>
                <h2 className={`md:text-5xl text-4xl font-bold ${hankenGrotesk.className}`}>Publish your Idea</h2>

                <p className='text-[18px] mb-8 text-[#464555] mt-2'>Formalize your concept and secure it in the vault.</p>
            </div>

            <div className='shadow-[0_20px_100px_rgba(79,70,229,0.12)] border border-[#C7C4D8] rounded-2xl p-6 md:p-8'>

                <Form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <TextField isRequired name='title' type="text">
                        <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Idea Title</Label>

                        <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="E.g., Quantum Encrypted Cloud Storage" />

                        <FieldError />
                    </TextField>

                    <div className='grid md:grid-cols-2 gap-4'>
                        <div>
                            <Select name='category' isRequired placeholder="Select category">
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
                            <TextField isRequired name='budget' type="number">
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Estimated Budget</Label>

                                <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="$0.00" />

                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <TextField isRequired name='image' type="url">
                        <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Image Url</Label>

                        <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="https://www.image.com" />

                        <FieldError />
                    </TextField>

                    <div className='grid md:grid-cols-2 gap-4'>
                        <div>
                            <TextField isRequired name='targetaudience' type="text">
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Target Audience</Label>

                                <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="E.g., Enterprise B2B, Students" />

                                <FieldError />
                            </TextField>
                        </div>

                        <div>
                            <TextField name='tags' type="text">
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Tags</Label>

                                <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="Comma separated (e.g., saas, cloud, security)" />

                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <TextField isRequired name='shortdes' maxLength={150} type="text">
                        <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Short Description</Label>

                        <p className='text-sm text-[#464555] mb-2'>A brief elevator pitch (max 150 characters).</p>

                        <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="Summarize your idea in a few sentences..." />

                        <FieldError />
                    </TextField>

                    <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <TextField name='problemstatement' isRequired>
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Problem Statement</Label>

                                <TextArea rows={7} placeholder="What pain point does this solve?" className="rounded-2xl px-4 pt-3 shadow-none border border-slate-300" />

                                <FieldError />
                            </TextField>
                        </div>

                        <div>
                            <TextField name='solution' isRequired>
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Proposed Solution</Label>

                                <TextArea rows={7} placeholder="How does your idea address the problem?" className="rounded-2xl px-4 pt-3 shadow-none border border-slate-300" />

                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <TextField name='description' isRequired>
                        <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Detailed Description</Label>

                        <TextArea rows={9} placeholder="Provide full context, technical details, and background here..." className="rounded-2xl px-4 pt-3 shadow-none border border-slate-300" />

                        <FieldError />
                    </TextField>


                    <div className='flex justify-end mt-2'>

                        <Button type="button" onClick={handleAddCollaboration} className={`px-4 py-2 w-fit text-right border-[#3525CD] font-medium text-[#3525CD] rounded-xl flex gap-1 items-center shadow-none border btn ${jetBrainsMono.className}`} > <Plus /> Add collaboration </Button>

                    </div>


                    <div className="flex flex-col gap-4">

                        {collaborations.map((collab, index) => (
                            <div key={index} className='md:flex items-center gap-3'>

                                <div className="flex-1 border border-[#C7C4D8] p-6 rounded-2xl">

                                    <div className="grid md:grid-cols-2 gap-2.5">

                                        <TextField isRequired type="text">
                                            <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Name</Label>

                                            <Input value={collab.name} onChange={(e) => handleCollaborationChange(index, 'name', e.target.value)} className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4"
                                                placeholder="Enter your collaboration name." />

                                            <FieldError />
                                        </TextField>

                                        <TextField isRequired type="text">
                                            <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Role</Label>

                                            <Input value={collab.role} onChange={(e) => handleCollaborationChange(index, 'role', e.target.value)} className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4"
                                                placeholder="Enter your collaboration role."
                                            />

                                            <FieldError />
                                        </TextField>
                                    </div>

                                    <div>
                                        <TextField isRequired type="url">
                                            <Label className={`text-[18px] mt-4 ${hankenGrotesk.className} font-semibold text-black`}>Collaboration Image Url</Label>

                                            <Input value={collab.logo} onChange={(e) => handleCollaborationChange(index, 'logo', e.target.value)} className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4"
                                                placeholder="https://www.image.com"
                                            />

                                            <FieldError />
                                        </TextField>
                                    </div>
                                </div>


                                <div className='lg:flex hidden mt-5 justify-end'>
                                    <button type="button" onClick={() => handleRemoveCollaboration(index)} className='text-[#FF383C] cursor-pointer hover:opacity-80 transition-opacity p-1'>
                                        <MinusCircle />
                                    </button>
                                </div>

                                <div className='flex lg:hidden mt-5 justify-end'>
                                    <button type="button" onClick={() => handleRemoveCollaboration(index)} className='bg-[#FF383C] text-white font-medium flex gap-1 items-center p-2.5 cursor-pointer hover:opacity-80 transition-opacity rounded-2xl'>
                                        <MinusCircle /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-right mt-4">

                        <Button className="rounded-2xl px-4 font-semibold bg-[#3525CD] py-6 text-white" type="submit"> <Upload /> Publish Idea </Button>

                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddIdeaPage;