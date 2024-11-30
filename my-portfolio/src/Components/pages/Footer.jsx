import React from 'react'

const Footer = () => {
  return (
    <>
        <div class="px-12 lg:px-8 py-3 flex flex-col  sm:flex-row bg-gradient-to-b from-gray-800 to-black w-full justify-center sm:justify-center items-center gap-4 sm:gap-32" >
            <div class="flex flex-col items-center sm:items-center">
                {/* <img src={ky} className='h-20 w-25 pl-6 sm:pl-12' alt='khushi'/> */}
                <p class="mt-4 text-white text-xs sm:text-sm font-semibold ">&copy; 2024 Ankita Mishra all right reserved</p>
            </div>
            <div>
                {/* <LikeButton /> */}
            </div>
        </div>
        </>
  )
}

export default Footer