import Image from 'next/image'
import React from 'react'

const MethodPaymentItem = ({ setMethod, src, text, id, checked }) => {
  return (
    <label htmlFor={id} className='flex gap-2 items-center bg-white p-2'>
        <Image src={src} alt={text} width={100} />
    <p className='text-sm font-light leading-4 flex-1 pl-2'>{text}</p>
    <input checked={checked} onChange={() => setMethod({ src, text})} type="radio" id="bsi" className='accent-primary bg-primary hover:bg-primary checked:bg-primary rounded-full h-5 w-5 cursor-pointer' />
    </label>
  )
}

export default MethodPaymentItem