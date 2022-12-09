import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Tab = ({ link, text, value }) => {
    const router = useRouter();

    const borderStyleCondition = text === 'Personal Information' ? !router.query.tab : text === 'My Orders' ? router.query.tab === 'my-orders' : text === 'My Addresses' ? router.query.tab === 'my-addresses' : false
  return (
    <Link href={link}>
        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)', border: borderStyleCondition ? '2px solid #004441' : '2px solid transparent'}} className='flex flex-col gap-2 rounded-lg p-2 py-4'>
            <p style={{ color: !router.query.tab  ? '#004441' : ''}} className='font-bold text-xl leading-8'>{text}</p>
            <p className='text-[#9CB6B5] leading-6 text-xs'>{value}</p>
        </div>
    </Link>
  )
}

export default Tab