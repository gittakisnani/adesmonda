import Image from "next/image"
import { useState } from "react"
import PaymentMethod from "../components/Checkout/PaymentMethod"
import Container from "../components/Container"
import Meta from "../components/Meta"
import OrderItem from "../components/MyAccount/OrderItem"
import OrderSummary from "../components/OrderSummary"
import ProductPicture2 from '../public/assets/images/ProductPicture2.svg'

const Checkout = () => {
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
                        <OrderItem src={ProductPicture2} title='black string couple coffee table' color='Black' number={1} price={'123.456.789'} />
                        <OrderItem src={ProductPicture2} title='black string couple coffee table' color='Black' number={1} price={'123.456.789'} />
                        <OrderItem src={ProductPicture2} title='black string couple coffee table' color='Black' number={1} price={'123.456.789'} />
                        <OrderItem src={ProductPicture2} title='black string couple coffee table' color='Black' number={1} price={'123.456.789'} />
                        </div>
                    </div>
                    <PaymentMethod />
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

export default Checkout