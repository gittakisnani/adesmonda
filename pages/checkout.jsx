import Image from "next/image"
import Container from "../components/Container"
import Meta from "../components/Meta"
import OrderSummary from "../components/OrderSummary"
import ProductPicture2 from '../public/assets/images/ProductPicture2.svg'

const products = () => {
  return (
    <>
        <Meta title='Checkout' />
        <section className="my-20">
            <h2 className="text-center mb-10">Checkout</h2>
            <Container className='grid grid-cols-2 gap-32'>
                <div  className="flex flex-col gap-10">
                    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 rounded-2xl flex flex-col gap-4'>
                        <h4 className="font-bold text-xl leading-5">Shipping Address</h4>
                        <p className="tracking-[1px] leading-4 font-bold">Mas DW</p>
                        <p className="tracking-[1px] leading-6">
                        Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan
                        </p>
                        <p className="tracking-[0.5px] text-xs leading-4">087897877411</p>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='p-2 rounded-2xl flex flex-col gap-4'>
                        <h4 className="font-bold text-xl leading-5">Items Order</h4>
                        <div className="flex flex-col gap-2">
                        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className="w-[90%] flex gap-2 items-center p-2 py-4 rounded-md">
                    <div className="">
                        <Image src={ProductPicture2} alt='Product' />
                    </div>
                    <div className="flex flex-col flex-1">
                        <h4 style={{ fontFamily: 'Marcellus'}} className="uppercase leading-7 text-sm tracking-[0.25em]">black string couple coffee table</h4>
                        <p className="text-[#9CB6B5] text-xs leading-4 tracking-[0.5px]">Black</p>
                        <div className="flex items-center gap-4 text-primary mt-2 w-full">
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px]">1 x Rp 123.456.789</p>
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px]">Rp 123.456.789</p>
                        </div>
                    </div>
                        </div>
                        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className="w-[90%] flex gap-2 items-center p-2 py-4 rounded-md">
                    <div className="">
                        <Image src={ProductPicture2} alt='Product' />
                    </div>
                    <div className="flex flex-col flex-1">
                        <h4 style={{ fontFamily: 'Marcellus'}} className="uppercase leading-7 text-sm tracking-[0.25em]">black string couple coffee table</h4>
                        <p className="text-[#9CB6B5] text-xs leading-4 tracking-[0.5px]">Black</p>
                        <div className="flex items-center gap-4 text-primary mt-2 w-full">
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px]">1 x Rp 123.456.789</p>
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px]">Rp 123.456.789</p>
                        </div>
                    </div>
                        </div>
                        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className="w-[90%] flex gap-2 items-center p-2 py-4 rounded-md">
                    <div className="">
                        <Image src={ProductPicture2} alt='Product' />
                    </div>
                    <div className="flex flex-col flex-1">
                        <h4 style={{ fontFamily: 'Marcellus'}} className="uppercase leading-7 text-sm tracking-[0.25em]">black string couple coffee table</h4>
                        <p className="text-[#9CB6B5] text-xs leading-4 tracking-[0.5px]">Black</p>
                        <div className="flex items-center gap-4 text-primary mt-2 w-full">
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px]">1 x Rp 123.456.789</p>
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px]">Rp 123.456.789</p>
                        </div>
                    </div>
                        </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 rounded-2xl flex flex-col gap-4'>
                        <h4 className="font-bold text-xl leading-5">Payment Method</h4>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 rounded-2xl flex flex-col gap-4'>
                        <h4 className="font-bold text-xl leading-5">Promo Code</h4>
                        <div className="border rounded-lg bg-white text-[#626260] text-xs leading-5 tracking-[2px] w-[90%] p-2">
                            <p>Masukkan kode promo anda</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <OrderSummary />
                    <button className="w-full text-white leading-6 font-bold rounded-[16px] bg-primary py-3">Continue your payment</button>
                </div>
            </Container>
        </section>
    </>
  )
}

export default products