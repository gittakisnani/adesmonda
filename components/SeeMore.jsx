const SeeMore = ({ onClick, text='See More'}) => {
  return (
    <button {...onClick && {onClick}} className='px-2 h-[56px] rounded-[16px] bg-[#F8ECEC] text-black uppercase font-bold leading-6 mx-auto'>{text}</button>
  )
}

export default SeeMore