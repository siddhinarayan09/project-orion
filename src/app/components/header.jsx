import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from "motion/react"

const TypingText = ({ text, className = ""}) => {
  const [displayText, setDisplayText] = useState('');
  const speed = 100; // ms

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text]);
return <span className={className}>{displayText}</span>;
};



const header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </motion.div>
        <motion.h3 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        className = 'flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo' >
        Hi! I'm William Mark <Image src={assets.hand_icon} alt=''
        className = 'w-6'/></motion.h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-black">
        <TypingText key={window.location.pathname} text='Frontend Developer based in London.' className="text-black font-Ovo" />
        <span className="animate-pulse text-black ml-1">|</span>
      </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I am a frontend developer from California, USA with 4 years of experience 
            in multiple companies like Microsoft, Tesla and Apple.
        </p>
        <div className = 'flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial= {{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            href='#contact'
            className='px-10 py-3 border border-white rounded-full bg-black 
            text-white flex items-center gap-2'>
            Contact me <Image src = {assets.right_arrow_white} alt='' className='w-4'/></motion.a>
        
            <motion.a
            initial= {{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href='/sample-resume.pdf' download 
            className = 'px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> 
            My resume <Image src = {assets.download_icon} alt='' className='w-4'/></motion.a>

        
        </div>
    </div>
  )
}

export default header