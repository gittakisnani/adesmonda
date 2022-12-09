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
const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleNavbar = () => setNavbar(!navbar)
  return (
    <header className='border-b'>
        <Container className='flex gap-4 items-center'>
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
            <Image src={Search} alt='Search Products' width={32} height={32} />
            <Link href='/wishlist'><Image src={Liked} alt='Wishlist' width={32} height={32} /></Link>
            <Link href='/checkout'><Image src={ShoppingList} alt='Shopping list' width={32} height={32} /></Link>
            {loggedIn 
            ? <Image src={User} alt='User info' width={32} height={32} />
            : <button 
                style={{fontFamily: 'Metrophobic'}}
            className='bg-primary font-bold w-[80px] h-[32px] text-[#FCF6F6] rounded-[4px] tracking-wider'>Login</button>
            }
        </div>
        </Container>
    </header>
  )
}

export default Header