import Head from 'next/head'
import Image from 'next/image'
import OurCatalog from '../components/Home/Catalog'
import Collections from '../components/Home/Collections'
import HeroSection from '../components/Home/HeroSection'
import Inspiration from '../components/Home/Inspiration'
import NewArrival from '../components/Home/NewArrival'
import OurProducts from '../components/Home/OurProducts'
import ShopIn from '../components/Home/ShopIn'
import TableGrid from '../components/Home/TableGrid'
import Meta from '../components/Meta'
import Newsletter from '../components/Newsletter'
import GridPicture from '../public/assets/images/GridPicture.svg'
import GridPicture2 from '../public/assets/images/GridPicture2.svg'
import GridPicture3 from '../public/assets/images/GridPicture3.svg'
import GridPicture4 from '../public/assets/images/GridPicture4.svg'
import OrderModal from '../components/OrderModal'
export default function Home() {
  return (
    <>
      <Meta title='Home page' />
      <HeroSection />
      <TableGrid />
      <NewArrival />
      <ShopIn />
      <OurProducts />
      <Collections pictures={[GridPicture, GridPicture2, GridPicture3, GridPicture4]} />
      <OurCatalog />
      <Inspiration />
      <Newsletter />
    </>
  )
}
