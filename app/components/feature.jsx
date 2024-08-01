import React from 'react'
import Image from 'next/image'
import Feature1 from '@/public/setup.png'
import Feature2 from '@/public/download.png'
import Feature3 from '@/public/promote.png'
import Feature4 from '@/public/bitcoin.png'


function feature() {
  return (
    <div className='mt-[50px]'>

        <h1 className='text-3xl font-bold text-neutral-950'>
            Create and Sell Now
        </h1>

        <div className="flex feature p-3 gap-10">
            <div className='w-1/4 p-3 feature-items  bg-neutral-300 mt-[20px] rounded-xl'>
                <Image src={Feature1} className='mt-4' />
                
                <h2 className="text-2xl mt-2 font-bol">
                    Set up your wallet
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ipsa culpa consequatur nihil cumque eaque perspiciatis doloremque nisi qui aspernatur?
                </p>
                
            </div>

            <div className='w-1/4 p-5 feature-items bg-neutral-300 mt-[20px] rounded-xl'>
                <Image src={Feature2} className='mt-4' />
                
                <h2 className="text-2xl mt-2 font-bol">
                    Add your NFT's
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ipsa culpa consequatur nihil cumque eaque perspiciatis doloremque nisi qui aspernatur?
                </p>
                
            </div>

            <div className='w-1/4 p-5 feature-items bg-neutral-300 mt-[20px] rounded-xl'>
                <Image src={Feature3} className='mt-4' />
                
                <h2 className="text-2xl mt-2 font-bol">
                    Promote your NFT's
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ipsa culpa consequatur nihil cumque eaque perspiciatis doloremque nisi qui aspernatur?
                </p>
                
            </div>

            <div className='w-1/4 p-5 feature-items bg-neutral-300 mt-[20px] rounded-xl'>
                <Image src={Feature4} className='mt-4' />
                
                <h2 className="text-2xl mt-2 font-bol">
                    Sell your NFT's
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ipsa culpa consequatur nihil cumque eaque perspiciatis doloremque nisi qui aspernatur?
                </p>
                
            </div>
        </div>
       
    </div>
  )
}

export default feature
