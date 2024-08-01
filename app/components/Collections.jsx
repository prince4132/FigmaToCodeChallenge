import React from 'react'
import Image from 'next/image'
import Categorie1 from '@/public/robot-petit2.png'
import Categorie2 from '@/public/robot-petit.png'
import Categorie3 from '@/public/snoop-dog.png'

function Collections() {
  return (
    <div className='Collections'>

      <h1 className='text-3xl font-bold text-neutral-950'>
        Our Collections
      </h1>

      <div className="flex justify-between categories items-center ">

        <div className='flex justify-between shrink-0 gap-2 mt-5'>

            <div className='text-neutral-50 cursor-pointer text-1xl font-bold bg-neutral-900 p-5 rounded-lg'>
                All Categories
            </div>

             <div className='text-neutral-900 cursor-pointer text-1xl font-bold bg-neutral-300 hover:text-neutral-50 hover:bg-neutral-500 p-5 rounded-lg'>
                Art
            </div>

            <div className='text-neutral-90 hover:text-neutral-50 hover:bg-neutral-500 cursor-pointer text-1xl font-bold bg-neutral-300 p-5 rounded-lg'>
                Celebrities
            </div>

            <div className='text-neutral-900 hover:text-neutral-50 hover:bg-neutral-500 delete cursor-pointer text-1xl font-bold bg-neutral-300 p-5 rounded-lg'>
                Gaming
            </div>

            <div className='text-neutral-900 cursor-pointer hover:text-neutral-50 hover:bg-neutral-500 delete text-1xl font-bold bg-neutral-300 p-5 rounded-lg'>
                Sport
            </div>
        </div>

        <div>
            <a href="#" className='text-neutral-950 font-bold text-1xl'>View more</a>
        </div>

      </div>

      {/* la liste des categories avec leur vignette */}

      <div className="flex gap-10 categories-items mt-[50px]">

        <div className='w-1/4 categories-item border rounded-2xl border-neutral-300 p-3'>

          <Image src={Categorie3} className='cursor-pointer object-cover w-[100%] rounded-2xl '
          />

          <div className="flex justify-between mt-5 items-center">
            <h1 className="font-bold text-xl text-neutral-950">
              CyberPunk
            </h1>
            <h1 className="font-bold text-xl  text-neutral-950">68</h1>
          </div>

          <button className="p-3 bg-white border rounded-xl mt-5 hover:bg-neutral-200 border-neutral-900 w-full font-bold text-xl text-neutral-950">
            Place a Bid
          </button>

        </div>

         <div className='w-1/4 categories-item border rounded-2xl border-neutral-300 p-3'>

          <Image src={Categorie2} className='cursor-pointer object-cover w-[100%] rounded-2xl '
          />

          <div className="flex justify-between mt-5 items-center">
            <h1 className="font-bold text-xl text-neutral-950">
              Dorolost Boll-Upper
            </h1>
            <h1 className="font-bold text-xl  text-neutral-950">68</h1>
          </div>

          <button className="p-3 bg-white border rounded-xl mt-5 hover:bg-neutral-200 border-neutral-900 w-full font-bold text-xl text-neutral-950">
            Place a Bid
          </button>

        </div>

         <div className='w-1/4 categories-item border rounded-2xl border-neutral-300 p-3'>

          <Image src={Categorie2} className='cursor-pointer object-cover w-[100%] rounded-2xl '
          />

          <div className="flex justify-between mt-5 items-center">
            <h1 className="font-bold text-xl text-neutral-950">
              Space X Wipper
            </h1>
            <h1 className="font-bold text-xl  text-neutral-950">68</h1>
          </div>

          <button className="p-3 bg-white border rounded-xl mt-5 hover:bg-neutral-200 border-neutral-900 w-full font-bold text-xl text-neutral-950">
            Place a Bid
          </button>

        </div>
        
         <div className='w-1/4 categories-item border rounded-2xl border-neutral-300 p-3'>

          <Image src={Categorie3} className='cursor-pointer object-cover w-[100%] rounded-2xl '
          />

          <div className="flex justify-between mt-5 items-center">
            <h1 className="font-bold text-xl text-neutral-950">
              Snoop Dog
            </h1>
            <h1 className="font-bold text-xl  text-neutral-950">68</h1>
          </div>

          <button className="p-3 bg-white border rounded-xl mt-5 hover:bg-neutral-200 border-neutral-900 w-full font-bold text-xl text-neutral-950">
            Place a Bid
          </button>

        </div>

      </div>

    </div>
  )
}

export default Collections
