import React from 'react'
import Image from 'next/image';
import Logo from "@/public/logo.png"

function footer() {
  return (
    <div className='text-[20px] text-neutral-900  font-extrabold h-auto bg-white shadow-sm mt-[30px] px-[5%]'>
        <a href="#">
            <Image src={Logo}/> 
         </a>

         <div className='flex justify-between footer mt-10 border-t py-5 border-t-neutral-300 border-10'>

            <h1 className='text-2xl font-bold coll text-neutral-900'>
                Create Explore & Collect Digital NFTs
            </h1>

            <ul className='flex footer2  gap-10 text-[18px]'>
                <li>
                    <a href="">Privacy</a>
                </li>

                <li>
                    <a href="">Terms &  Conditions</a>
                </li>

                <li>
                    <a href="">About Us</a>
                </li>

            </ul>
         </div>
    </div>
  )
}

export default footer
