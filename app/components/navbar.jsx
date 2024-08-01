"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "@/public/logo.png"
import MenuOpen from "@/public/menu-open.png"
import MenuClose from "@/public/menu-closed.png"

function navbar() {
   // État pour gérer la visibilité du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    
    <nav className='flex relative nav text-[20px] text-neutral-950  border-b-[2px] mb-[30px] border-b-neutral-300 font-extrabold justify-between items-center h-auto bg-white shadow-lg px-[5%] py-10'>

      <a href="#">
      <Image src={Logo}
      />
      </a>

      <ul className={`flex gap-5 font-bold menu ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
        <li className='hover:border-b-2 border-b-neutral-900'>
          <a href="#">Home</a>
        </li>

        <li className='hover:border-b-2 border-b-neutral-900'>

          <a href="#">Top Sales</a>
        </li>

        <li className='hover:border-b-2 border-b-neutral-900' >

          <a href="#">Collections</a>
        </li>

        <li className='hover:border-b-2 border-b-neutral-900'>

          <a href="#">Our blog</a>
        </li>

        <li className='hover:border-b-2 border-b-neutral-900'>
          <a href="#">About Us</a>
        </li>

        <button className='gap-2 sign hidden justify-between items-center'>
          <a href="#">Sign in </a>
          <h1>|</h1>
          <a href="#" className='bg-neutral-900  hover:bg-neutral-700 text-neutral-50 p-3 rounded-full'>Connect Wallet</a>
       </button>

      </ul>

      <button className='flex gap-2 sign-in justify-between items-center'>
        <a href="#">Sign in |</a>
        <a href="#" className='bg-neutral-900  hover:bg-neutral-700 text-neutral-50 p-3 rounded-full'>Connect Wallet</a>
      </button>

      <Image src={isMenuOpen ? MenuClose : MenuOpen} onClick={toggleMenu} className=' max-w-[200px] hidden hamburger cursor-pointer'
      />
    </nav>
  )
}

export default navbar
