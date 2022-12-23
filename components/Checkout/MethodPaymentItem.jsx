import Image from 'next/image'
import { BiCheck } from 'react-icons/bi'

const MethodPaymentItem = ({ setMethod, src, text, id, checked }) => {
  const checkedStyle = {background: 'radial-gradient(38.75% 38.75% at 33.75% 40%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%) , #004441',
  boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.3), inset 3px 4px 5px rgba(255, 255, 255, 0.2), inset -4px -5px 12px rgba(0, 0, 0, 0.3)',
  borderRadius: 8}
  return (
    <label onClick={() => setMethod({ src, text, id})} className='flex gap-2 cursor-pointer items-center bg-white p-2'>
        <Image src={src} alt={text} width={40} />
    <p className='text-sm font-light leading-4 flex-1 pl-2'>{text}</p>

    {checked && <span style={checkedStyle} className='text-white flex mr-2 justify-center items-center'>
      <BiCheck />
    </span>}
    </label>
  )
}

export default MethodPaymentItem