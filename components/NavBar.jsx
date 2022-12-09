import Link from "next/link"
import { useState } from "react"
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
const navbarData = {
    product: {
        link: '/',
        subLinks: {
            product: { link: '/', categories: null},
            table: { link: '/', categories: [['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/']]},
            'Home Decor': { link: '/', categories: [['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/']]},
        }
    },
    inspiration: {
        link: '/',
        subLinks: {
            text: { link: '/', categories: null}
        }
    },
    'about us' : {
        link: '/',
        subLinks: null
    }
}
const NavBar = ({ handleNavbar }) => {
    const [activeLink, setActiveLink] = useState('');
    const [category, setCategory] = useState('')
    const handleNavLink = (activeLink = '') => {
        setActiveLink(activeLink);
        setCategory('')
    }
  return (
    <nav className='fixed top-0 left-0 flex  bg-primary bottom-0 py-2 text-white'>
        <button onClick={handleNavbar} className="absolute text-5xl top-4 left-10"><MdOutlineClose /></button>
        <div className="flex flex-col gap-6 p-10 pt-24 pb-0 h-full justify-between">
        <div className="flex flex-col gap-6">
        {Object.keys(navbarData).map(navLink => (
            <>
            <div className="flex items-center justify-between gap-20" >
                <p style={{ fontFamily: 'Marcellus'}} className="capitalize text-[51px] leading-[64px] tracking-[0.5px]">
                    <Link href='/'>{navLink}</Link>
                </p>
                {navbarData[navLink].subLinks && <span onClick={() => handleNavLink(activeLink === navLink ? undefined : navLink)} style={activeLink === navLink ? { rotate: '90deg'} : null} className="text-5xl cursor-pointer text-white transitions"><IoIosArrowForward /></span>}
            </div>
            {navLink === activeLink && Object.keys(navbarData[navLink].subLinks).map(subLink => (
                <div key={navLink.split(' ')[0]} className='flex justify-between items-center px-2'>
                    <p className="leading-9 text-4xl capitalize">
                        <Link href='/'>
                            {subLink}
                        </Link>
                    </p>
                        {navbarData[navLink].subLinks[subLink].categories && <span onClick={() => setCategory(subLink)} className="text-5xl cursor-pointer text-white transitions"><IoIosArrowForward /></span>}
                </div>
            ))}
            </>
        ))}</div>
        <div className="pt-2 border-t">
            <span className="font-bold">EN</span>
            <span>|</span>
            <span>IN</span>
        </div>
        </div>
        {activeLink && category   && navbarData[activeLink].subLinks[category]?.categories.length 
            && <div style={{ fontFamily: 'Marcellus'}} className="flex flex-col gap-6 pt-24 p-10 border-l w-[400px]">
                <h4  className="capitalize text-[51px] leading-[64px] tracking-[0.5px]">
                        <Link href='/'>{category}</Link>
                </h4>

                <div  className="flex flex-col gap-4 uppercase leading-7 text-lg tracking-[0.25em]">
                    {navbarData[activeLink].subLinks[category]?.categories.map((cat, index) => (
                        <p key={index}>
                            <Link href={cat[1]}>
                                {cat[0]}
                            </Link>
                        </p>
                    ))}
                </div>
            </div> 
        }
    </nav>
  )
}

export default NavBar