import Container from "../components/Container"
import Product from "../components/Home/Product"
import Meta from "../components/Meta"
import Filter from "../components/Products/Filter"
import ProductCover from '../public/assets/images/ProductCover.svg'
const products = () => {
  return (
    <>
      <Meta title='Products' />
      <section className="my-20">
          <h2 className="text-center my-10">Products</h2>
          <Container className='flex gap-10'>
              <Filter />
              <div className="grid grid-cols-3 gap-4">
                  <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                  <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                  <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                  <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                  <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                  <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
              </div>
          </Container>
      </section>
    </>
  )
}

export default products