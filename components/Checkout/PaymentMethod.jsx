import Image from 'next/image';
import { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs'
import Portal from './Portal';
const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState(false);
    const [method, setMethod] = useState(null)
    const handlePaymentMethod = () => setPaymentMethod(!paymentMethod)


    const handleMethod = (method) => {
      setMethod(method);
      setPaymentMethod(false)
    }
  return (
    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 relative rounded-2xl flex flex-col gap-4'>
        <h4 className="font-bold text-xl leading-5 pb-2 border-b">Payment Method</h4>
        <div className='flex text-[#AAAAAA] justify-between items-center px-4'>
            {!method && <p className='text-xs tracking-[2px]'>Choose a payment method</p>}
            {method && <div className='flex-1 flex items-center justify-between pr-4'>
              <p className='text-sm text-black'>{method.text}</p>
              <Image src={method.src} alt={method.text} height={30} />
            </div>}
            <button onClick={handlePaymentMethod} className='text-lg'><BsChevronRight /></button>
        </div>
        {paymentMethod && <Portal method={method} setMethod={handleMethod} handlePaymentMethod={handlePaymentMethod} />}
    </div>
  )
}

export default PaymentMethod