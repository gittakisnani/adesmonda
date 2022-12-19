import Image from 'next/image'
import React, { useState } from 'react'
import ProductPicture2 from '../../public/assets/images/ProductPicture2.svg'
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi'
import { HiOutlineTrash } from 'react-icons/hi'


const MyCart = ({ id, checked, handleChecked, src = ProductPicture2, color, title, price }) => {
    const [number, setNumber] = useState(1);
    const [remove, setRemove] = useState(false)
    const decreaseNumber = () => {
        if(number <= 1) {
            if(confirm('You want to delete the the cart item?')) {
                return setRemove(true)
            }

            return
        }
        setNumber(number - 1)
    }
    const increaseNumber = () => setNumber(number + 1);

    if(remove) return null
  return (
    <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='rounded-sm p-2 flex items-center gap-4'>
        <div className='flex gap-2'>
            <input checked={checked?.includes(id)} onChange={handleChecked} type="checkbox" className='h-5 w-5 accent-primary' />
            <div className='min-w-[70px] min-h-[70px] rounded-md overflow-hidden'>
                <Image src={src} alt='Wishlist products' className='w-full h-full bg-cover' />
            </div>
        </div>
        <div className='flex flex-col flex-1 overflow-hidden gap-3'>
            <h4 style={{ fontFamily: 'Marcellus' }} className='text-md uppercase leading-7 tracking-[0.25em] truncate '>{title}</h4>
            <p className='text-xs text-[#9CB6B5] mt-[-1] capitalize'>{color}</p>
            <div className='flex justify-between items-center'>
                <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='text-sm font-bold leading-4 tracking-[1.5px] text-primary'>Rp {price}</p>
                <div className='flex items-center gap-2'>
                    <button><HiOutlineTrash /></button>
                    <button onClick={increaseNumber}><BiPlusCircle /></button>
                    <p className=''>{number}</p>
                    <button onClick={decreaseNumber}><BiMinusCircle /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyCart