import React from 'react'


function VideoPlayer() {

    // const handleVideoError = () => {
    //     console.error('Error loading video')
    //   }

  return (
    <div>
        <h3 className='bg-green-300 mt-5 py-2 w-[98%] md:w-[95%] lg:w-[70%] mx-auto'>Video of Our Latest Projects</h3>
        <div className='bg-[#3d5168] w-[98%] md:w-[95%] lg:w-[70%] h-96 mx-auto relative'>
        <video controls preload='metadata' autoPlay playsInline loop className='mx-auto w-full h-96'>
            <source src='/videos/ComfortHaven.mp4' type='video/mp4' />
        </video>
        <button className="bg-[#3d5168] text-white px-5 py-2 rounded-sm my-1 absolute right-0">Next Project Video</button>
    </div>
    </div>
  )
}

export default VideoPlayer