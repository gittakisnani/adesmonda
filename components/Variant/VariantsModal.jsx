import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import Container from '../Container'
import Variant from '../../public/assets/images/Variant.svg'
import VariantItem from './Variant'
const VariantsModal = ({ setVariant, handleShowModal }) => {
  return (
    <div className='fixed noScrollBar top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-30 shadow-xl rounded-l-xl shadow-primary h-[600px] overflow-y-auto flex flex-col'>
    <Container className='flex !p-4 flex-col flex-1 gap-4 w-[600px]'>
    <div className='flex items-center relative'>
        <button onClick={handleShowModal}  className='text-2xl absolute left-0'>
            <IoCloseSharp  />
        </button>
        <h4 className='font-bold uppercase text-lg leading-4 tracking-[2px] flex-1 text-center'>All Patterns</h4>
    </div>
    <div className='grid grid-cols-3 gap-4 mt-3'>
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
        <VariantItem setVariant={setVariant} src={Variant} text={'White Lust H316'} />
    </div>
    </Container>
    </div>
  )
}

export default VariantsModal