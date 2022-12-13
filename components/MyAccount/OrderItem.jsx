import Image from 'next/image'
import React from 'react'

const OrderItem = ({ title, number, src, color, price }) => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className="w-[90%] flex gap-2 items-center p-2 py-4 rounded-md">
        <div className="">
            <Image src={src} alt='Product' />
        </div>
        <div className="flex flex-col flex-1">
            <h4 style={{ fontFamily: 'Marcellus'}} className="uppercase leading-7 text-sm tracking-[0.25em]">{title}</h4>
            <p className="text-[#9CB6B5] text-xs leading-4 tracking-[0.5px] capitalize">{color}</p>
            <div className="flex items-center gap-4 text-primary mt-2 w-full">
            <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px]">1 x Rp {price}</p>
            <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px]">Rp {price.split('.').join('') * number}</p>
            </div>
        </div>
    </div>
  )
}

export default OrderItem