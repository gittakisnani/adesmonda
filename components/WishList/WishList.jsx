import Image from 'next/image'
import React, { useState } from 'react'
import ShareWishList from '../../public/assets/images/ShareWishList.svg'
import Add from '../../public/assets/images/Add.svg'
import Trash from '../../public/assets/images/Trash.svg'
const WishListItem = ({ src, title, price, color}) => {
    const [remove, setRemove] = useState(false);
  if(remove) return null
  return (
    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className="w-full flex gap-2 items-center p-2 py-4 rounded-md">
        <div className="">
            <Image src={src} alt='Product' />
        </div>
        <div className="flex flex-col flex-1">
            <h4 style={{ fontFamily: 'Marcellus'}} className="uppercase leading-7 text-sm tracking-[0.25em]">{title}</h4>
            <p className="text-[#9CB6B5] text-xs leading-4 tracking-[0.5px] capitalize">{color}</p>
            <div className="flex items-center gap-4 justify-between mt-2 w-full">
            <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px]">Rp {price}</p>
            <div className="flex items-center gap-4">
                <Image onClick={() => setRemove(true)} src={Trash} alt='Delete' />
                <Image src={ShareWishList} alt='Share' />
                <button className="bg-primary flex items-center gap-2 py-2 px-6 rounded-lg text-sm uppercase tracking-[2px] leading-5 text-white">
                    <Image src={Add} alt='Add' />
                    CART
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default WishListItem