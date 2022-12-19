import React, { useState } from 'react'
import CustomOrderItem from './CustomOrderItem'
import MyAddress from './MyAddress'
import OrderSummary from '../OrderSummary'
import OrderModal from '../OrderModal'
import Title from '../Title'
import OrderItem from './OrderItem'
import ProductPicture2 from '../../public/assets/images/ProductPicture2.svg'
import SeeMore from '../SeeMore'
import { useRouter } from 'next/router'

const CustomOrder = ({ handleModal }) => {
  const router = useRouter()
  const [request, setRequest] = useState(false);
  const handleRequest = () => {
    router.push('/myaccount?tab=my-orders&type=all');
    setRequest(false)
  }
  if(request) return <OrderModal handleRequest={handleRequest} />
  return (
    <div className='fixed bg-white shadow-2xl h-[500px] p-2 overflow-y-auto z-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
        <Title onClick={handleModal} title={'Orders'} />
        <div className='flex flex-col gap-4'>
        <CustomOrderItem />
        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='p-2 rounded-2xl flex flex-col gap-4'>
                <h4 className="font-bold leading-5">Items Order</h4>
                <div className="flex flex-col gap-2">
                <OrderItem src={ProductPicture2} title='black string couple coffee table' color='Black' number={1} price={'123.456.789'} />
                <OrderItem src={ProductPicture2} title='black string couple coffee table' color='Black' number={1} price={'123.456.789'} />
                <OrderItem src={ProductPicture2} title='black string couple coffee table' color='Black' number={1} price={'123.456.789'} />
                </div>
              <MyAddress title='Mas DW' main desc='Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan' number='087897877411' includeChange={false} includeTrash={false} style={{background: 'rgba(0, 68, 65, 0.05)'}} />
              <OrderSummary />
        </div>
        <SeeMore onClick={() => setRequest(true)} text='Request Invoice' />   
        </div>
    </div>
  )
}

export default CustomOrder