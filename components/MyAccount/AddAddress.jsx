import Title from "../Title"

const AddAddress = ({ handleModal}) => {
    
  return (
    <div className="fixed top-1/2 left-1/2 p-2 bg-white h-[500px] overflow-y-auto -translate-x-1/2 -translate-y-1/2">
        <Title onClick={handleModal} title='add address' />
        <div className='flex flex-col gap-8 w-full'>
                    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='p-2 w-full flex-1 flex gap-2 flex-col'>
                            <label htmlFor="recipient" className='flex flex-col gap-1'>
                                <p className='text-sm font-bold tracking-[1.5px]'>Recipient</p>
                                <input className='bg-white border p-2 rounded-lg w-full' placeholder='Jhon Doe' type="text" />
                            </label>
                            <label htmlFor="number" className='flex flex-col gap-1'>
                                <p className='text-sm font-bold tracking-[1.5px]'>Phone Number</p>
                                <input className='bg-white border p-2 rounded-lg w-full' placeholder='Ex: 081234567896' type="tel" />
                            </label>
                            <label htmlFor="address" className='flex flex-col gap-1'>
                                <p className='text-sm font-bold tracking-[1.5px]'>Full address</p>
                                <textarea className='bg-white border p-2 rounded-lg w-full resize-none h-[100px]' />
                            </label>
                            <label htmlFor="province" className='flex flex-col gap-1'>
                                <p className='text-sm font-bold tracking-[1.5px]'>Province</p>
                                <select id="province" value={'Choose address’s province'} className='p-2 rounded-lg text-[#626260]'>
                                    <option value={'Choose address’s province'}>Choose address’s province</option>
                                    <option value={'province 1'}>1</option>
                                    <option value={'province 1'}>1</option>
                                </select>
                            </label>
                            <label htmlFor="city" className='flex flex-col gap-1'>
                                <p className='text-sm font-bold tracking-[1.5px]'>City</p>
                                <select id="city" value={'Choose address’s province'} className='p-2 rounded-lg text-[#626260]'>
                                    <option value={'Choose address’s province'}>Choose address’s city</option>
                                    <option value={'province 1'}>1</option>
                                    <option value={'province 1'}>1</option>
                                </select>
                            </label>
                            <label htmlFor="zip" className='flex flex-col gap-1'>
                                <p className='text-sm font-bold tracking-[1.5px]'>Zip Code</p>
                                <input className='bg-white border p-2 rounded-lg w-full' placeholder='Ex: 30151' type="number" />
                            </label>
                            <label htmlFor="addMain" className='flex gap-2 items-center'>
                                <input type="checkbox" className='h-5 w-5 accent-primary' id="addMain" />
                                <p className='font-bold text-sm tracking-5 tracking-[1.5px]'>
                                Add as Main Address
                                </p>
                            </label>
                    </div>
                    <div className='flex justify-center gap-4 items-center'>
                        <button onClick={handleModal} className='bg-[#7F0B03] text-white font-bold p-3 px-16 rounded-[16px]'>Cancel</button>
                        <button onClick={handleModal} className='bg-primary text-white font-bold p-3 px-16 rounded-[16px]'>Save</button>
                    </div>
        </div> 
    </div>
  )
}

export default AddAddress