import Image from 'next/image'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header/>
      <div className='min-h-screen	'>

      <h1>Hi, i'm <span className='text-secondary-color'>Andres Guerra</span></h1>
      </div>
      <Portfolio/>
      <Footer/>
    </main>
  )
}
