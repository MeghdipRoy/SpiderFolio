'use client';
import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      
      <div className='w-48 h-auto flex items-center justify-center relative'>
    <CircularText className={" animate-spin-slow"}/>
    <Link href="mailto:meghdiproy23234@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    bg-red-300 text-red-900 text-lg shadow-md  border-solid border-blue-400 w-20 h-20 rounded-full
    '>Hire Me</Link>
      </div>
    </div>
  );
};

export default HireMe;