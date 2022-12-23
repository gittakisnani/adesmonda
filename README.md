This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

# Desktop Version

## Libraries Used:

- Swiper version ^8.4.5
- primeicon version ^6.0.1 & primereact version ^8.7.3 
- react-icons version ^4.7.1

## Frameworks Used:

- NextJS
- Tailwindcss

## Structure

- Components
- Pages
- Public
- Styles
- Utils


### Pages

#### There are 6 pages and one dynamic page (Single Product Page)

  - index.js (Home page)
  - myaccount (User settings page)
  - payment-process (User's payment page)
  - products
  - whishlist (User's Wishlist page)
  - checkout (User's checkout page)
  - product > id.js (Single product page)


### Components

- Checkout:
  - Portal (Payment Method modal)
  - MethodPaymentItem: Accepts 5 props (method, setMethod, src, id, text)
    - method and setMethod are the state of MethodPayment DropDown
    - src is the image of the method
    - id is the id of the method (bank)
    - text is the title pf the method (Bank) 
  - MethodPayment is the drop down has two state variables:
    - open a boolean variable to open/close the dropdown
    - method to show the method selected
- Home:
  - HeroSection the top section
  - Catalog 
  - Collections
  - Inspiration to show inspiration items
  - InspirationEntity accepts three props: 
    - src: the image to show.
    - title: the title of the inspiration
    - text: the sub-title of the inspiration 
    - bigPicture (default = false )
    - smallDiv (default = false )
  - NewArrival the slider of the home page
  - NewArrivalProduct
  - Our Catalog
  - Our Products grid of products.
  - Product accepts five props:
    - src is the image source
    - text is the product's title
    - category is the product's category
    - price is the product's price
    - width & height
    - imageHeight to handle the image of the product.
  - TableGrid is the slider of table products
- MyAccount:
  - AddAddress
  - CustomOrder accepts five props:
    - title
    - date
    - numberOfProducts
    - price
    - status
  - EditAddress
  - OrderItem accepts five props:
    - src
    - title
    - color
    - numberOfProducts
    - price (for one product)
  - MyAccount
  - MyAddresses
  - MyOrders
  - Tab accepts three props
    - text
    - link
    - value
  - MyAddress accepts seven props:
    - style (object of css styles) (optional)
    - main (boolean) (optional) (default = false)
    - includeTrash
    - includeChange
    - title
    - desc is the description of the address
    - number (Phone Number).
  - MyAddress accepts 5 props:
    - title
    - date
    - number
    - total
    - status
- Payment:
  - PaymentInstructions accepts two props:
    - text
    - instructions (array of instructions)
- Cart:
  - CartMenu (Modal)
  - MyCart accepts seven props:
    - src
    - title
    - color
    - price
    - checked
    - handleChecked (check / uncheck the cart).
    - id
- Product:
  - Image accepts two props:
    - src is teh source of the primary image
    - images is an array of images src (4 items)
- Table:
  - Table (Table slider item) accepts two props:
    - src
    - text
- Variant:
  - Controller to handle change and show the variant.
  - VariantItem accepts three props:
    - src
    - text
    - setVariant (to handle the variant of the product)
  - Variant Modal accepts two props:
    - setVariant   
    - handleShowModal (to open / close variantModal)
- WishList:
  - WishList accepts four props:
    - src
    - title
    - price
    - color
- Products:
  - Filter accepts three props:
    - setFilters
    - filters
    - handleFilter (to handle filters settings)
- NavBar accepts one prop:
  - handleNavBar (to open / close navbar)
- OrderSummary accepts two props:
  - includeSubTotal (default = false)
  - onClick (Pushing new link / show success modal)
- Search accepts two props: 
  - search (boolean)
  - setSearch (to show / close the search bar)
- Title accepts two props:
  - title
  - handleRequest (show success modal / push link to checkout page)
- SeeMore accepts two props: 
  - text (default = See More)
  - onClick




