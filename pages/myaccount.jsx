import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../components/Container'
import Meta from '../components/Meta'
import MyAccount from '../components/MyAccount/MyAccount'
import MyAddresses from '../components/MyAccount/MyAddresses'
import MyOrders from '../components/MyAccount/MyOrders'
import Tab from '../components/MyAccount/Tab'
const MyAccountPage = () => {
    const router = useRouter()
  return (
    <>
        <Meta title='My Account' />
        <section className='my-20'>
            <h2 className='text-center mb-10' style={{ fontFamily: 'Marcellus'}}>My Account</h2>
            <Container className='flex gap-10'>
                <div className='min-w-[380px] flex flex-col gap-4'>
                    <Tab link='/myaccount' text={'Personal Information'} value={'087897877411'} />
                    <Tab link='?tab=my-orders' text={'My Orders'} value='2 orders' />
                    <Tab link='?tab=my-addresses'  text={'My Addresses'} value='2 Addresses'/>
                        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='flex flex-col gap-2 rounded-lg p-2 py-8 border-red-600 border-2'>
                        <p className='font-bold text-xl leading-8 text-red-600'>Logout</p>
                        </div>
                </div>
                {!router.query.tab && <MyAccount />}
                {router.query.tab === 'my-orders' && <MyOrders />}
                {router.query.tab === 'my-addresses' && <MyAddresses />}
            </Container>
        </section>
    </>
  )
}

export default MyAccountPage