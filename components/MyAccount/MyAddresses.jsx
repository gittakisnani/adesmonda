import React, { useState } from 'react'
import AddAddress from './AddAddress';
import EditAddress from './EditAddress';
import MyAddress from './MyAddress'

const MyAddresses = () => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');
  const [desc, setDesc] = useState('');
  const [main, setMain] = useState(false)
  const [editAddress, setEditAddress] = useState(false);

  const onChange = (title, desc, number, main) => {
    setEditAddress(true)
    setTitle(title);
    setDesc(desc);
    setNumber(number);
    setMain(main)
  }

  const handleModal = () => setModal(!modal)
  return (
    <div className='w-full flex flex-col gap-4'>
      {modal && <AddAddress handleModal={handleModal} />}
      {editAddress && <EditAddress isMain={main} title={title} number={number} desc={desc} handleModal={() => setEditAddress(!editAddress)} />}
        <h6 onClick={handleModal} className='text-end cursor-pointer text-primary text-xl leading-5 font-bold'><span className='text-3xl'>+</span> Add Address</h6>
        <MyAddress onChange={onChange} title='Mas DW' desc='Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan' number='087897877411' main />
        <MyAddress onChange={onChange} title='Mas DW' desc='Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan' number='087897877411' />
        <MyAddress onChange={onChange} title='Mas DW' desc='Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan' number='087897877411' />
        <MyAddress onChange={onChange} title='Mas DW' desc='Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan' number='087897877411' />
    </div>
  )
}

export default MyAddresses