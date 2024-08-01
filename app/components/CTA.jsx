import React from 'react'

function CTA() {
  return (
    <div>
      <div   className='flex flex-col rounded-xl border min-h-[400px] CTA mt-[30px] w-full gap-[50px] items-center justify-center'>
            <h1 className='text-4xl title1 text-white'>Build your NFT profile</h1>

            <h2 className="text-2xl title2 text-white">Join almost 10k NFT profile on Digit !</h2>

            <a href="#">
                <button className='bg-neutral-50 hover:bg-neutral-200 p-5 px-10 rounded-3xl  text-neutral-950'>
                    Sign in now
                </button>
            </a>
      </div>
    </div>
  )
}

export default CTA
