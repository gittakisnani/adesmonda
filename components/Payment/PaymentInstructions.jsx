import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
const PaymentInstruction = ({ text, instructions}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
      setOpen(!open)
  }
  return (
    <div className='bg-white mx-2 p-2 flex flex-col gap-2 rounded-lg transitions'>
        <div className='flex justify-between items-center'>
            <p className='text-sm tracking-[2px] capitalize'>{text}</p>
            <button onClick={handleOpen} style={open ? { rotate: '180deg'} : null} className='text-xl transitions'><BsChevronDown /></button>
        </div>
        {open && <div className='pt-6 flex flex-col gap-3 px-2'>
          {instructions.map((instruction, index) => (
            <p key={index} className='text-xs leading-5 tracking-[0.5px]'>{index+1}. {instruction}</p>
          ))}
        </div>}
    </div>
)}

export default PaymentInstruction