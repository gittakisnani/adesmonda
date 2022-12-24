import Container from '../Container';
import { useState } from 'react'
import MyCart from './MyCart'
import OrderSummary from '../OrderSummary'
import { IoCloseSharp } from 'react-icons/io5'
const CartMenu = ({ handleShowCart }) => {
    const [checked, setChecked] = useState([]);
  const handleChecked = (id) => {
    setChecked(checked.includes(id) ? checked.filter(item => item !== id) : [...checked, id])
  }

  const handleCheckAll = () => {
    const wasChecked = [1, 2, 3, 4].every(item => checked.includes(item))
    setChecked(wasChecked ? [] : [1, 2, 3, 4])
  }

  return (
    <div className='fixed noScrollBar top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[70] shadow-xl rounded-l-xl shadow-primary h-[600px] overflow-y-auto flex flex-col'>
    <Container className='flex !p-4 flex-col flex-1 gap-4'>
    <div className='flex items-center relative'>
        <button onClick={handleShowCart} className='text-2xl absolute left-0'>
            <IoCloseSharp  />
        </button>
        <h4 className='font-bold uppercase text-lg leading-4 tracking-[2px] flex-1 text-center'>My Cart</h4>
    </div>
        <label htmlFor="checkAll" className='flex gap-2 items-center px-2'>
            <input onChange={handleCheckAll} checked={[1, 2, 3, 4].every(item => checked.includes(item))} type="checkbox" className='accent-primary h-5 w-5' id="checkAll" />
            <p style={{ fontFamily: 'Marcellus'}} className='uppercase text-md leading-5'>Check all</p>
        </label>
        <MyCart price='3.900.000' title='black string couple coffee table' color='black' id={1} handleChecked={() => handleChecked(1)} checked={checked} />
        <MyCart price='3.900.000' title='black string couple coffee table' color='black' id={2} handleChecked={() => handleChecked(2)} checked={checked} />
        <MyCart price='3.900.000' title='black string couple coffee table' color='black' id={3} handleChecked={() => handleChecked(3)} checked={checked} />
        <MyCart price='3.900.000' title='black string couple coffee table' color='black' id={4} handleChecked={() => handleChecked(4)} checked={checked} />
    </Container>
    <OrderSummary includeSubtotal />
    </div>
  )
}

export default CartMenu