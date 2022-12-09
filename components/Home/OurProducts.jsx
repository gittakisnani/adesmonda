import React from 'react'
import Container from '../Container'
import Product from './Product'
import ProductImage from '../../public/assets/images/Product.svg'
import SeeMore from '../SeeMore'
const OurProducts = () => {
  return (
    <section className='mt-10'>
    <h2 
    style={{ fontFamily: 'Marcellus '}}
    className='mb-5 text-center'>Our Products</h2>
    <Container className='grid grid-cols-3 lg:grid-cols-4 gap-6'>
        <Product src={ProductImage} text='Product' />
        <Product src={ProductImage} text='Product' />
        <Product src={ProductImage} text='Product' />
        <Product src={ProductImage} text='Product' />
        <Product src={ProductImage} text='Product' />
        <Product src={ProductImage} text='Product' />
        <Product src={ProductImage} text='Product' />
        <Product src={ProductImage} text='Product' />
    </Container>
    <div className='flex items-center justify-center my-4'>
        <SeeMore />
    </div>
    </section>
  )
}

export default OurProducts