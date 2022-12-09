import Image from "next/image"
import Cover from '../../public/assets/images/Cover.jpeg'
import ECOMMERCE from '../../public/assets/images/ECOMMERCE.svg'
import Container from "../Container"
const ShopIn = () => {
  return (
    <section className="relative h-[300px]">
        <div className="absolute inset-0 -z-[1]">
            <Image src={Cover} alt='ShopIn Cover' className="h-full w-full bg-cover" />
        </div>
        <Container className='!p-10'>
            <h4 className="text-white text-4xl leading-9 tracking-[0.5px] font-medium text-center">Shop In</h4>
            <div className="mt-10 flex justify-center">
                <Image src={ECOMMERCE} alt='ShopIn' />
            </div>
        </Container>
    </section>
  )
}

export default ShopIn