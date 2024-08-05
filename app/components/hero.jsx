import React from 'react'
import HeroImage1 from "@/public/machine-ia.png"
import HeroImage2 from "@/public/hong-kong.png"
import HeroImage3 from "@/public/elipse.png"
import Image from 'next/image'

function hero() {
  return (
    <div className='flex relative hero my-[60px]'>

      <div className='w-1/2 hero1'>
        <h1 className='text-8xl title text-neutral-900'>
            See the NFT  new world
        </h1>
        <p className='text-neutral-900 mt-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus ipsum quisquam illum.
        </p>
        <a href="">
            <h3 className='mt-[20px] text-neutral-950 font-bold text-2xl'>Discover Now <span className='p-2 border ml-2 border-neutral-950 rounded-full'>→</span></h3>
        </a>
      </div>

        <div className='hero2 w-1/2 pl-20 mt-[30px] relative flex shrink-0 gap-[20px] mb-[50px]'>

            <Image className='h-[260px] elipse absolute top-[-60px]  rounded-b-[80px] ' src={HeroImage3}
             />
            <Image className='h-[260px] AI rounded-t-[100px] rounded-b-[100px] w-[150px] mt-[180px]' src={HeroImage1}
           />

            <Image className='h-[260px] w-[150px] kong  rounded-t-[100px] rounded-b-[100px] ' src={HeroImage2}
             />
        
        </div>

    </div>
  )
}

export default hero
