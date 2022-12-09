import React from 'react'

const categories = {
    table: ['Dining Table', 'Office Table', 'Cafe and Bar Table', 'Coffee Table', 'Console Table', 'Side Table'],
    'Home Decor': []
}

const sort = ['Default', 'A-Z', 'Z-A', 'Newest Product', 'Most Recomended', 'Lowest Price', 'Lowest Price']


const Filter = () => {
  return (
    <div className='w-[272px]'>
        <h5 style={{ fontFamily: 'Marcellus'}} className='text-lg tracking-[0.25em] leading-6'>Filter</h5>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='p-2 flex flex-col gap-4 mt-2'>
            <p className='font-medium leading-4'>Category</p>
            {Object.keys(categories).map(key => (
                <>
                <label  className='flex items-center gap-2'>
                    <input type='checkbox' className='appearance-none bg-white checked:bg-slate-400 cursor-pointer outline-none h-5 w-5 accent-slate-800' />
                    <p className='tracking-[0.5px] text-xs leading-5 capitalize'>{key}</p>
                </label>
                {categories[key].length > 0 && <div className='mx-4 mb-4 flex flex-col gap-3'>
                    {categories[key].map((subKey, i) => (
                        <label key={i} className='flex items-center gap-2'>
                            <input type='checkbox' className='appearance-none bg-white checked:bg-slate-400 cursor-pointer outline-none h-5 w-5 accent-slate-800' />
                            <p className='tracking-[0.5px] text-xs leading-5 capitalize'>{subKey}</p>
                        </label>
                    ))}
                </div>}
                </>
            ))}
        </div>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='p-2 flex flex-col gap-4 mt-2'>
            <p className='font-medium leading-4'>Sort by</p>
            {sort.map(sortType => (
                <label key={sortType.split(' ')[0]} className='flex items-center gap-2'>
                    <input type='radio' name='sort' className='appearance-none bg-white checked:bg-slate-400 cursor-pointer outline-none h-5 w-5 rounded-full accent-slate-800' />
                    <p className='tracking-[0.5px] text-xs leading-5 capitalize'>{sortType}</p>
                </label>
            ))}
        </div>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='p-2 flex flex-col gap-4 mt-2'>
            <p className='font-medium leading-4'>Price range</p>
        </div>
    </div>
  )
}

export default Filter