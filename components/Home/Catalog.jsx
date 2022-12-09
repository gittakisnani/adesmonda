import Image from 'next/image'
import Container from '../Container'
import Catalog from '../../public/assets/images/Catalog.svg'
import SeeMore from '../SeeMore'
const OurCatalog = () => {
  return (
    <section>
        <Container className='flex gap-10 items-center'>
            <Image src={Catalog} alt='Catalog' />
            <div style={{ fontFamily: 'Marcellus'}} className='flex flex-col gap-6'>
                <h2>Our Catalog</h2>
                <p className='text-lg leading-7 tracking-[0.25em]'>Find your inspiration with <br /> our new catalog</p>

                <div className='flex gap-4'>
                    <button className='tracking-[1px] leading-6 bg-primary px-6 rounded-lg uppercase text-[#FCF6F6]'>Download Catalog</button>
                    <SeeMore />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default OurCatalog