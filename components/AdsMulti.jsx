import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdsMulti = ({src}) => {
  return (
    <>
      <Link href="https://affordspoonsgray.com/j75ssn35?key=55f12044e7cbff305d4db14598c53a3a" className='border-2 border-yellow-500 '>
        <Image 
        src={src}
        width={350} 
        height={350} 
        alt=""  
        className='object-cover w-full h-full'
        />
      </Link>
    </>
  )
}

export default AdsMulti