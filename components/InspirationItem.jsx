import Image from 'next/image'
import React from 'react'
import Inspiration2 from '../public/assets/images/Inspiration2.svg'
import { BsArrowRight } from 'react-icons/bs'
const InspirationItem = ({ title = 'Bazaar Jakarta Fest ', text = 'Lanjutkan Membaca', bigPicture = false, smallDiv = false, src=Inspiration2}) => {
  return (
    <div style={{ marginTop: smallDiv && !bigPicture ? '100px' : 0}} className={`flex flex-col items-end ${bigPicture ? 'row-span-2' : ''}`}>
        <div style={bigPicture ? undefined : { height: 150}}  className='w-full overflow-hidden'>
            <Image src={src} alt='Inspiration' width={400} height={bigPicture ? 300  : 150} />
        </div>
        <div style={smallDiv ? { width: '80%'} : { width: '100%'}} className='p-4 shadow-2xl flex flex-col gap-3'>
            <h5 style={{ fontFamily: 'Martel'}} className='font-bold tracking-[2px] capitalize'>{title}</h5>
            <div className='flex gap-4 items-center'>
                <p style={{ fontFamily: 'Martel'}} className='font-light text-sm tracking-[2px]'>{text}</p>
                <span className='text-xl'><BsArrowRight /></span>
            </div>
        </div>
    </div>
  )
}

export default InspirationItem