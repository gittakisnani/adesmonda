import { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs'
import Portal from './Portal';
const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState(false);
    const handlePaymentMethod = () => setPaymentMethod(!paymentMethod)
  return (
    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 relative rounded-2xl flex flex-col gap-4'>
        <h4 className="font-bold text-xl leading-5 pb-4 border-b">Payment Method</h4>
        <div className='flex text-[#AAAAAA] justify-between items-center px-4'>
            <p className='text-xs tracking-[2px]'>Choose a payment method</p>
            <button onClick={handlePaymentMethod} className='text-lg'><BsChevronRight /></button>
        </div>
        {paymentMethod && <Portal handlePaymentMethod={handlePaymentMethod} />}
    </div>
  )
}

export default PaymentMethod