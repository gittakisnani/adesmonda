import React, { useState } from 'react'
import VariantsModal from './VariantsModal';

const Controller = () => {
    const [variant, setVariant] = useState('Pallette Royal');
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)


    const handleVariant = (variant) => {
        setVariant(variant);
        setShowModal(false)
    }

  return (
    <div className='flex justify-between items-center'>
        {showModal && <VariantsModal handleShowModal={handleShowModal} setVariant={handleVariant} />}
        <p className='leading-4 capitalize'>{variant}</p>
        <button onClick={handleShowModal} className='underline text-primary'>Change</button>
    </div>
  )
}

export default Controller