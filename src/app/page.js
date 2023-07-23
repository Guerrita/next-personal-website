import Image from 'next/image'
import Header from './components/Header'
import Portfolio from './components/Portfolio'

export default function Home() {
  return (
    <main>
      <Header/>
      {/* <h1>Hi, i'm <span className='text-secondary-color'>Andres Guerra</span></h1> */}
      <Portfolio/>
    </main>
  )
}
