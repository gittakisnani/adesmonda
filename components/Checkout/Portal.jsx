import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import MethodPaymentItem from './MethodPaymentItem'
import BSI from '../../public/assets/images/BSI.svg'
import BNI from '../../public/assets/images/BNI.svg'
import Mandiri from '../../public/assets/images/Mandiri.svg'
import BCA from '../../public/assets/images/BCA.svg'
import BRI from '../../public/assets/images/BRI.svg'
const Portal = ({ handlePaymentMethod }) => {
    const [method, setMethod] = useState()
  return (
    <div className='p-2 bg-white rounded-md absolute top-[100%] shadow-2xl w-[400px]'>
        <div className='flex items-center gap-4'>
            <button onClick={handlePaymentMethod} className='text-xl'><MdOutlineClose /></button>
            <h4 className='uppercase text-lg leading-7 font-bold text-center flex-1'>Method Payment</h4>
        </div>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='flex justify-between items-center p-2'>
            <p className='font-semibold leading-5 mt-2'>ATM/Transfer Bank (Virtual Account)</p>
        </div>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='flex flex-col gap-2 p-2'>
            <MethodPaymentItem id='bsi' text='Bank Syariah Indonesia' src={BSI} setMethod={setMethod} checked={method === 'bsi'} />
            <MethodPaymentItem id='bca' text='Bank Syariah Indonesia ' src={BCA} setMethod={setMethod} checked={method === 'bca'} />
            <MethodPaymentItem id='mandiri' text='Bank Mandiri' src={Mandiri} setMethod={setMethod} checked={method === 'mandiri'} />
            <MethodPaymentItem id='bri' text='Bank Rakyat Indonesia' src={BRI} setMethod={setMethod} checked={method === 'bri'} />
            <MethodPaymentItem id='bni' text='Bank Negara Indonesia' src={BNI} setMethod={setMethod} checked={method === 'bni'} />
        </div>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='flex mt-2 justify-between items-center p-2'>
            <p className='font-semibold leading-5'>Credit Card</p>
        </div>
    </div>
  )
}

export default Portal