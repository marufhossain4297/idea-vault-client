import { Avatar } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Collaboratioin = ({ collaboration }) => {
    
    return (
        <div className='mb-2.5 mt-4 flex gap-3 items-center'>
            <Avatar>
                <Avatar.Image alt={collaboration?.name} src={collaboration?.logo} />
                <Avatar.Fallback className='text-xl'>{collaboration?.name[0]}</Avatar.Fallback>
            </Avatar>
            <div className="flex gap-2 text-[#464555] items-center">
                <p className='font-semibold'>{collaboration?.name}</p>
                <p>({collaboration?.role})</p>
            </div>
        </div>
    );
};

export default Collaboratioin;