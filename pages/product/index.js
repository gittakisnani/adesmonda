import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../../components/Container'
import ProductPicture from '../../public/assets/images/ProductPicture.svg'
import ProductPicture2 from '../../public/assets/images/ProductPicture2.svg'
import AddToBag from '../../public/assets/images/AddToBag.svg'
import Share from '../../public/assets/images/Share.svg'
import Product from '../../components/Home/Product'
import ProductCover from '../../public/assets/images/ProductCover.svg'
import ProductBanner from '../../public/assets/images/ProductBanner.svg'
import Meta from '../../components/Meta'

const ProductPage = () => {
    const router = useRouter()
  return (
    <>
        <Meta title='Product' />
        <section className='my-5'>
            <Container className='py-10 flex flex-col gap-20'>
                <div className='flex gap-10'>
                    <div className='flex items-center gap-2 py-12 min-w-[680px]'>
                        <div className='flex-1'>
                            <Image src={ProductPicture} alt='Main Image' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className='border-2 w-[70px] p-px border-primary rounded-xl'>
                                <Image src={ProductPicture2} alt='Product' className='w-full h-full bg-cover' />
                            </div>
                            <div className='border p-px rounded-xl'>
                                <Image src={ProductPicture2} alt='Product' className='w-full h-full bg-cover' />
                            </div>
                            <div className='border p-px rounded-xl'>
                                <Image src={ProductPicture2} alt='Product' className='w-full h-full bg-cover' />
                            </div>
                            <div className='border p-px rounded-xl'>
                                <Image src={ProductPicture2} alt='Product' className='w-full h-full bg-cover' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 style={{ fontFamily: 'Marcellus' }} className='text-black leading-9 tracking-[2px] text-2xl uppercase'>Meja Makan Marmer 4 Kursi Rounded Simply Modern </h4>
                        <p style={{ color: 'rgba(18, 18, 18, 0.7)'}} className='leading-4 tracking-[1px] '>Dining Table</p>
                        <div className='flex items-center gap-6'>
                            <p style={router.query.tab === 'description' ? {fontWeight: 700, borderBottom: '2px solid'} : null} className='leading-5 text-xl tracking-[1.5px] border-primary'>
                                <Link href='?tab=description'>
                                    Description
                                </Link>
                            </p>
                            <p style={router.query.tab === 'specification' ? {fontWeight: 700, borderBottom: '2px solid'} : null} className='leading-5 text-xl tracking-[1.5px] border-primary'>
                                <Link href='?tab=specification'>
                                    Specification
                                </Link>
                            </p>
                        </div>
                        <p className='text-sm leading-5 tracking-[1px]'>Lengkapi ruang makan anda dengan meja makan yang elegan dari Cavallo Dining Table Series. Meja marmer yang luas menawarkan Anda untuk menikmati makan malam kecil ataupun besar. Pola dan warna yang sederhana untuk ruang makan anda memberikan kesan kehangatan serta suasana ceria pada ruang makan Anda.</p>
                        <h5 style={{ fontFamily: 'Plus Jakarta Sans'}} className='text-4xl leading-10 font-bold tracking-[1.5px]'>Rp 320.000.000</h5>
                        <p className='text-xl leading-5 font-bold tracking-[1px]'>Marble Color</p>
                        <div className='flex justify-between items-center'>
                            <p className='leading-4'>Pallette Royal</p>
                            <p className='underline text-primary'>Change</p>
                        </div>
                        <div className='flex items-center mt-4'>
                            <button className='text-sm leading-5 bg-primary w-full mx-10 py-2 rounded-lg flex items-center gap-2 justify-center tracking-[2px] text-[#FCF6F6]'>
                                <Image src={AddToBag} alt='Add To Shopping List' />
                                <p>ADD TO CART</p>
                            </button>
                            <Image src={Share} alt='Share' />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <Image src={ProductBanner} alt='Banner' className='w-full' />
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-4xl leading-9 tracking-[0.5px]'>Related Products</h4>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default ProductPage