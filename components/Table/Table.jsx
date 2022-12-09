import Image from 'next/image'

const Table = ({ src, text }) => {
  return (
    <div 
    style={{ fontFamily: 'Marcellus'}}
    className='flex flex-col gap-4 text-center w-[186px] h-[164px] text-black'>
        <Image src={src} alt={text} />
        <p className='leading-4 tracking-[0.25em] text-sm font-medium'>{text}</p>
    </div>
  )
}

export default Table