
import Image from 'next/image'
import Link from 'next/link';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import Footer from '../components/Footer'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import { Tweet } from 'react-tweet'

export default function Home() {

  return (
    <>
    <div className='flex flex-col items-center h-full bg-white pb-5'>
      <div className='mt-14 flex flex-col justify-between items-center'>
      <Image
      src="/Yuk-milih.png"
      width={300}
      height={300}
      alt="Logo"
      />

      <div className=''>
        <h1 className='text-5xl lg:text-7xl text-center font-bold text-[#092c4c]'>COMING SOON</h1>
        <h3 className='text-center font-semibold mt-7'>This site is</h3>
        <h2 className='text-center font-semibold'>UNDER CONSTRUCTION</h2>
      </div>

      <div className='mt-5'>
        <h3 className='text-center'>Contact With Us</h3>
        <div className='flex justify-center gap-3 mt-3'>
          <a href='https://www.facebook.com/profile.php?id=61553963472122&mibextid=ZbWKwL' target='blank' rel="facebook"><FaFacebookSquare size={60} className='w-[60px]'/></a>
          <a href='https://instagram.com/yukmilih' target='blank' rel="instagram"><FaInstagramSquare size={60} className='w-[60px]'/></a>
        </div>
      </div>


      </div>

      <div className='lg:flex lg:w-[70%] gap-3'>
      <Tweet id="1730429163113533925" />
      <Tweet id="1731624999830856125" />
      <Tweet id="1731640743616254035" />
      </div>

      <div className='lg:flex lg:w-[70%] gap-3 mx-auto lg:justify-center'>
        <Card1 link={'/article1'}/>
        <Card2 link={'/article2'}/>
        <Card3 link={'/article3'}/>
      </div>

    </div>
    </>
  )
}
