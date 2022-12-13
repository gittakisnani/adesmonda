import { useState } from "react"
import Container from "../components/Container"
import Product from "../components/Home/Product"
import Meta from "../components/Meta"
import Filter from "../components/Products/Filter"
import ProductCover from '../public/assets/images/ProductCover.svg'
const Products = () => {
  const [filters, setFilters] = useState({
    category: [],
    sort: 'Default',
    price: [0, 1000]
  })
  return (
    <>
      <Meta title='Products' />
      <section className="my-20">
          <h2 className="text-center my-10">Products</h2>
          <Container className='flex gap-10'>
              <Filter  filters={filters} setFilters={setFilters} />
              <div className="flex flex-col gap-4">
                <div className='flex items-center gap-2 overflow-x-auto filtersWrapper'>
                    {filters.sort !== 'Default' && <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2'>{filters.sort}</p>}
                    {filters.category?.map((cat, index) => (
                        <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2' key={index}>{cat}</p>
                    ))}
                    {filters.price[0] > 0 && filters.price[1] && <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2'>{filters.price[0]}-{filters.price[1]}</p>
                    }
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                </div>
              </div>
          </Container>
      </section>
    </>
  )
}

export default Products