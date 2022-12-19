import Image from 'next/image'
import Container from './Container'
import Logo from  '../public/assets/images/Logo.svg'
import Navbar from  '../public/assets/images/Navbar.svg'
import User from  '../public/assets/images/User.svg'
import Liked from  '../public/assets/images/Liked.svg'
import ShoppingList from  '../public/assets/images/ShoppingList.svg'
import Search from  '../public/assets/images/Search.svg'
import { useState } from 'react'
import Link from 'next/link'
import NavBar from './NavBar'
import SearchForm from './Search'
import CartMenu from './Cart/CartMenu'
const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [search, setSearch] = useState(false)
    const [showCart, setShowCart] = useState(false);
    
    const handleShowCart = () => setShowCart(!showCart)
    const handleNavbar = () => setNavbar(!navbar)
  
  
    return (
    <header className='border-b h-[60px] flex items-center'>
        <Container className='flex w-full gap-4 items-center relative overflow-y-hidden'>
        {navbar && <NavBar handleNavbar={handleNavbar} />}
        <button onClick={handleNavbar}>
            <Image src={Navbar} alt='Show Menu' height={36} width={36} />
        </button>
        <div className='flex-1'>
            <Link href='/'>
                <Image className='mx-auto' src={Logo} alt='Website name' width={101} height={40} />
            </Link>
        </div>
        <div className='flex items-center gap-4'>
            <Image className='cursor-pointer' onClick={() => setSearch(true)} src={Search} alt='Search Products' width={32} height={32} />
            <Link href='/wishlist'><Image src={Liked} alt='Wishlist' width={32} height={32} /></Link>
            <Image onClick={handleShowCart} src={ShoppingList} alt='Shopping list' width={32} height={32} />
            {loggedIn 
            ? <Image src={User} alt='User info' width={32} height={32} />
            : <button 
                style={{fontFamily: 'Metrophobic'}}
            className='bg-primary font-bold w-[80px] h-[32px] text-[#FCF6F6] rounded-[4px] tracking-wider'>Login</button>
            }
        </div>
        <SearchForm search={search} setSearch={setSearch} />
        </Container>
        {showCart && <CartMenu handleShowCart={handleShowCart} />}
    </header>
  )
}

export default Header