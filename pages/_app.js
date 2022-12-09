import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
