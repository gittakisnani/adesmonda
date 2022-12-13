import Image from "next/image"
import Link from "next/link"
import { AiOutlineHeart } from 'react-icons/ai'
const Product = ({ src, text, rounded = true, width = 283, height = 412, imageHeight }) => {
  return (
    <div style={{ width, height }} className="p-2">
        <div style={{ borderRadius: rounded ? '8px' : 0, height: imageHeight || undefined}} className="w-full overflow-hidden relative">
            <Link href='/product'><Image src={src} alt={text} width={width} className='!w-full !h-full' /></Link>
            <button className="absolute top-6 right-4 text-2xl bg-black/5 p-1 text-white rounded-full">
              <AiOutlineHeart />
            </button>
        </div>
        <div className="flex flex-col items-center gap-2 text-[#121212] mt-3">
            <p style={{ fontFamily: 'Marcellus'}} className='text-sm text-center leading-4 tracking-[0.25em] uppercase'>
            Premium Marquina Simply Modern
            </p>
            <p className="text-[#989C9C] text-sx leading-5 tracking-[0.5px]">
            Dining Table
            </p>
            <p className="text-sm font-bold leading-5 tracking-[0.15px]">Rp 30.000.000</p>
        </div>
    </div>
  )
}

export default Product