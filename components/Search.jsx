import { useState } from "react"
import { IoMdClose } from 'react-icons/io'
const SearchForm = ({ search, setSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setSearch(false)

        //Db stuff
    }


  return (
    <form onSubmit={handleSubmit} style={{ bottom: search ? '0' : '100%' }} className='transitions absolute left-0 right-0 z-2 text-textBlack text-sm h-full flex items-center bg-white gap-4 justify-between'>
        <input 
        type='text'
        className='outline-none border-none bg-transparent flex-1 px-4'
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder='Search'
        />
        <button type="button" onClick={() => setSearch(false)} className="text-2xl"><IoMdClose /></button>
    </form>
  )
}

export default SearchForm