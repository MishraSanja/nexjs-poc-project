import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import Header from './components/header'
import Link from 'next/link'
 
export default function Home() {
  return (
  <div className='w-100'>

   <Header></Header>
   <div className='Container'>
   <div className='Main-container mt-4'>
        <h1> Next Js POC </h1>
        <p>Welcome to the Next.js POC! </p>
        <nav>
          <ul className='topics-list'>
            {/* <Link href="/"  >
              Home
            </Link> */}
            <Link href="/users">
              CSR - Client Side Rendering
            </Link>
            <Link href="/server/users">
              Server Side Rendering
            </Link>
            <Link href="/static/users">
              Static Generation
            </Link>
            <Link href="/products"  >
            Incremental Static Regeneration (ISR) 
            </Link>
          </ul>
        </nav>
      </div>
    </div>
   <Footer></Footer>
 
  
   </div> )
}
