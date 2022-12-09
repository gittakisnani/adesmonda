import React from 'react'
import Container from './Container'
import FooterLogo from '../public/assets/images/FooterLogo.svg'
import Facebook from '../public/assets/images/Facebook.svg'
import Instagram from '../public/assets/images/Instagram.svg'
import BliBli from '../public/assets/images/BliBli.svg'
import Lazada from '../public/assets/images/Lazada.svg'
import Shopee from '../public/assets/images/Shopee.svg'
import Tokopedia from '../public/assets/images/Tokopedia.svg'
import Vector from '../public/assets/images/Vector.svg'
import Link from 'next/link'
import Image from 'next/image'
const FooterTitle = ({ text, className }) => {
  return (
    <h5 
   style={{ fontFamily: 'Marcellus' }}
  className={'leading-[20px] uppercase mb-4 !text-base ' + className}>
  {text}
  </h5>
  )
}

const Footer = () => {
  return (
    <footer 
    style={{ fontFamily: 'Martel'}}
    className='min-h-[315px] bg-primary text-textGold'>
      <Container className='!p-10 h-full grid grid-cols-3 lg:grid-cols-7 gap-8'>
        <div className='flex flex-col gap-4 col-span-2'>
          <Link href='/'>
            <Image src={FooterLogo} alt='Website name' width={127} height={101} />
          </Link>
            <p className='text-xs leading-5'>
            Jalan Gatot Subroto Nomor 47 E Petisah Tengah, Medan Petisah,Medan, Sumatera Utara
            </p>
            <p className='text-xs leading-[18px]'>
            Hello@esteticohome.com
            </p>
            <div className='flex items-center gap-3'>
              <Link 
              href='/'
              aria-label='Instagram page'
              rel='noreferrer noopener'
              target='_blank'
              >
                <Image src={Instagram} alt='Instagram' />
              </Link>
              <Link 
              href='/'
              aria-label='Facebook page'
              rel='noreferrer noopener'
              target='_blank'
              >
                <Image src={Facebook} alt='Instagram' />
              </Link>
            </div>
        </div>
        <div className='text-xs leading-5 tracking-[0.4px] flex flex-col gap-2'>
          <FooterTitle text='About Us' />
          <p>Who we are</p>
          <p>Press Release</p>
        </div>
        <div className='text-xs leading-5 tracking-[0.4px] flex flex-col gap-2'>
          <FooterTitle text='CUSTOMER CARE' />
          <p>Knowledge Base</p>
          <p>Customer Feedback</p>
          <p>Terms & Condition</p>
          <p>FAQ</p>
        </div>
        <div className='text-xs leading-5 tracking-[0.4px] flex flex-col gap-2'>
          <FooterTitle text='INSPIRATION' />
          <p>Promo Deals</p>
          <p>Tips & Tricks</p>
          <p>Blogs</p>
          <p>Online Catalogs</p>
          <p>News & Updates</p>
        </div>
        <div className='text-xs leading-5 tracking-[0.4px] flex flex-col gap-2'>
          <FooterTitle text='FIND US ON' />
          <Image src={Lazada} alt='Lazada' />
          <Image src={BliBli} alt='BliBli' />
          <Image src={Tokopedia} alt='Tokopedia' />
          <Image src={Shopee} alt='Shopee' />
        </div>
        <div className=''>
          <FooterTitle text='Payment Partner' className='!capitalize ' /> 
          <Image src={Vector} alt='Vector' />
          <FooterTitle text='Delivery Partner' className='!capitalize ' /> 
        </div>
      </Container>
    </footer>
  )
}

export default Footer