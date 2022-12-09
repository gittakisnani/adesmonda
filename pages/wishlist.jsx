import Container from "../components/Container"
import Meta from "../components/Meta"
import Filter from "../components/Products/Filter"
import WishListItem from "../components/WishList/WishList"


const WishList = () => {
  return (
    <>
        <Meta 
          title='Wishlist'  
        />
        <section className="my-20">
            <h2 className="text-center pb-10">Wishlist</h2>
            <Container className='flex gap-10'>
                <Filter />
                <div className="flex flex-col gap-6 flex-1">
                    <WishListItem />
                    <WishListItem />
                    <WishListItem />
                    <WishListItem />
                </div>
            </Container>
        </section>
    </>
  )
}

export default WishList