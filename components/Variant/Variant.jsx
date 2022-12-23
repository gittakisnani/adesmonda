import Image from 'next/image'
import React from 'react'

const VariantItem = ({ src, text, setVariant  }) => {
  return (
    <div onClick={() => setVariant(text)} className=' cursor-pointer flex flex-col text-center gap-1'>
    <div className='w-full h-[100px] overflow-hidden'>
        <Image width={100} height={100} className='w-full h-full' src={src} alt={text} />
    </div>
    <p style={{ fontFamily: 'Marcellus'}} className='text-sm leading-4 tracking-[0.4px] capitalize'>{text}</p>
    </div>
  )
}

export default VariantItem