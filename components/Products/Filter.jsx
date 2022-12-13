import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css'
import { Slider } from 'primereact/slider';


const categories = {
    table: ['Dining Table', 'Office Table', 'Cafe and Bar Table', 'Coffee Table', 'Console Table', 'Side Table'],
    'Home Decor': []
}

const sort = ['Default', 'A-Z', 'Z-A', 'Newest Product', 'Most Recomended', 'Lowest Price', 'Lowest Price']


const Filter = ({ filters, setFilters }) => {
    const handleSetAll = (key) => {
        const wasChecked = categories[key].every(cat => filters.category.includes(cat))
        setFilters({...filters, category: wasChecked ? filters.category.filter(cat => !categories[key].includes(cat)) :categories[key]})
    }

    const handleCategorySubKey = (e) => {
        const { value } = e.target;
        const wasChecked = filters.category.includes(value)
        setFilters({...filters, category: wasChecked ? filters.category.filter(cat => cat !== value) : [...filters.category, value]})
    }

    const handleSort = (e) => {
        setFilters({...filters, sort: e.target.value})
    }


  return (
    <div className='w-[272px]'>
        <h5 style={{ fontFamily: 'Marcellus'}} className='text-lg tracking-[0.25em] leading-6'>Filter</h5>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='p-2 flex flex-col gap-4 mt-2'>
            <p className='font-medium leading-4'>Category</p>
            {Object.keys(categories).map(key => (
                <>
                <label  className='flex items-center gap-2'>
                    <input onChange={Array.isArray(categories[key]) && categories[key].length ? () => handleSetAll(key) : handleCategorySubKey} value={key} checked={categories[key].length ? categories[key].every(cat => filters.category.includes(cat)) : filters.category.includes(key)} type='checkbox' className='appearance-none bg-white checked:bg-slate-400 cursor-pointer outline-none h-5 w-5 accent-slate-800' />
                    <p className='tracking-[0.5px] text-xs leading-5 capitalize'>{key}</p>
                </label>
                {categories[key].length > 0 && <div className='mx-4 mb-4 flex flex-col gap-3'>
                    {categories[key].map((subKey, i) => (
                        <label key={i} className='flex items-center gap-2'>
                            <input onChange={handleCategorySubKey} checked={filters.category.includes(subKey)} value={subKey} type='checkbox' className='appearance-none bg-white checked:bg-slate-400 cursor-pointer outline-none h-5 w-5 accent-slate-800' />
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
                    <input type='radio' onChange={handleSort} checked={filters.sort.toLowerCase() === sortType.toLowerCase()} value={sortType} name='sort' className='appearance-none bg-white checked:bg-slate-400 cursor-pointer outline-none h-5 w-5 rounded-full accent-slate-800' />
                    <p className='tracking-[0.5px] text-xs leading-5 capitalize'>{sortType}</p>
                </label>
            ))}
        </div>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='p-2 flex flex-col gap-4 mt-2'>
            <p className='font-medium leading-4'>Price range</p>
            <div className='px-5 mt-5 flex flex-col gap-3'>
                <Slider min={0} max={1000} range value={filters.price} onChange={e => setFilters({...filters, price: e.value})} />
                <div className='flex gap-4 items-center justify-center'>
                    <div className='p-2 rounded-md text-xs leading-5 bg-white'>
                        Rp {filters.price[0]}
                    </div>
                    <div className='p-2 rounded-md text-xs leading-5 bg-white'>
                        Rp {filters.price[1]}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter