import Image from 'next/image'
import React from 'react'
import Container from '../components/Container'
import Meta from '../components/Meta'
import PaymentInstruction from '../components/Payment/PaymentInstructions'
import Bank from '../public/assets/images/Bank.svg'
import CopyBank from '../public/assets/images/CopyBank.svg'

const INSTRUCTIONS = ['Open BSI Mobile application', 'Choose payment Menu', 'Choose E-Commerce menu', 'Choose merchant "DOKU', 'Choose account number']

const instructions = {
    'BSI Mobile': INSTRUCTIONS,
    'ATM BSI': INSTRUCTIONS,
    'Banking Syariah Net': INSTRUCTIONS,
    'Kantor BSI': INSTRUCTIONS
}

const PaymentProcessPage = () => {
  return (
    <>
        <Meta title='Payment Process' />
        <section className='my-20'>
            <h2 style={{ fontFamily: 'Marcellus' }} className='text-center mb-10'>Payment Process</h2>
            <Container className='grid grid-cols-2 gap-20'>
                <div className='flex flex-col gap-4'>
                    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='rounded-xl p-2 pr-4 flex flex-col gap-4'>
                        <div className='flex justify-between items-center'>
                            <h6 className='font-bold text-lg leading-5'>Status Pembayaran</h6>
                            <span className='rounded-md bg-primary text-[10px] font-bold leading-4 text-white p-1 py-0.5'>Awaiting Payment</span>
                        </div>
                        <p className='text-xs tracking-[0.5px] text-[#9CB6B5]'>Selesaikan pembayaran sebelum</p>
                        <div style={{ fontFamily: 'Plus Jakarta Sans' }} className='flex items-center gap-20 font-bold leading-5'>
                            <p className='text-primary'>31-12-2022 12:32</p>
                            <p className='text-[#D52E2F]'>31-12-2022 12:32</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='rounded-xl p-2 pr-4 flex flex-col gap-4'>
                        <h6 className='font-bold leading-5'>Virtual Account</h6>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs tracking-[0.5px] text-[#9CB6B5]'>Nama Bank</p>
                            <p className='text-xs tracking-[0.5px] text-[#9CB6B5]'>Nomor Virtual Account</p>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                        <div className='flex items-center justify-between font-bold leading-5'>
                            <p className='text-primary'>Bank Syariah Indonesia</p>
                            <Image src={Bank} alt='Bank' />
                        </div>
                        <div className='flex items-center justify-between font-bold leading-5'>
                            <p className='text-primary'>6059000000008748</p>
                            <Image src={CopyBank} alt='Copy Bank' />
                        </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='rounded-xl p-2 pr-4 flex flex-col gap-4'>
                        <h6 className='font-bold leading-5'>Payment Instruction</h6>
                        {Object.keys(instructions).map((instruction, index) => (
                            <PaymentInstruction key={index} text={instruction} instructions={instructions[instruction]} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 py-4 rounded-2xl flex flex-col gap-4'>
                            <h4 className="font-bold text-xl leading-5">Order Summary</h4>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <p className="text-[#6A8483] leading-4 tracking-[0.5px] text-xs">Total (3 Product)</p>
                                    <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-xs text-[#171520]">Rp 350.000.000</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[#6A8483] leading-4 tracking-[0.5px] text-xs">Total (3 Product)</p>
                                    <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-xs text-[#171520]">Rp 350.000.000</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[#6A8483] leading-4 tracking-[0.5px] text-xs">Total (3 Product)</p>
                                    <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-xs text-[#171520]">Rp 350.000.000</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[#121212] leading-4 font-medium tracking-[0.5px] text-xs">Total Price</p>
                                    <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-xs font-bold text-[#171520]">Rp 350.000.000</p>
                                </div>
                            </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default PaymentProcessPage