import React from 'react'

const OrderSummary = () => {
  return (
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
  )
}

export default OrderSummary