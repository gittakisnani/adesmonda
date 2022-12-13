import { useState } from "react"
import Container from "../components/Container"
import Meta from "../components/Meta"
import Filter from "../components/Products/Filter"
import WishListItem from "../components/WishList/WishList"
import ProductPicture2 from '../public/assets/images/ProductPicture2.svg'


const WishList = () => {
  const [filters, setFilters] = useState({
    category: [],
    sort: 'Default',
    price: [0, 1000]
  })
  return (
    <>
        <Meta 
          title='Wishlist'  
        />
        <section className="my-20">
            <h2 className="text-center pb-10">Wishlist</h2>
            <Container className='flex gap-10'>
                <Filter filters={filters} setFilters={setFilters} />
                <div className="flex flex-col gap-4 w-full">
                  <div className='flex items-center gap-2 overflow-x-auto filtersWrapper'>
                      {filters.sort !== 'Default' && <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2'>{filters.sort}</p>}
                      {filters.category?.map((cat, index) => (
                          <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2' key={index}>{cat}</p>
                      ))}
                  </div>
                  <div className="flex flex-col gap-6 flex-1">
                      <WishListItem src={ProductPicture2} title='black string couple coffee table' price={'123.456.789'} color='Black' />
                      <WishListItem src={ProductPicture2} title='black string couple coffee table' price={'123.456.789'} color='Black' />
                      <WishListItem src={ProductPicture2} title='black string couple coffee table' price={'123.456.789'} color='Black' />
                      <WishListItem src={ProductPicture2} title='black string couple coffee table' price={'123.456.789'} color='Black' />
                  </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default WishList