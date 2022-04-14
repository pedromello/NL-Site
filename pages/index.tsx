import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineForm, AiOutlineWhatsApp } from 'react-icons/ai'

const Home: NextPage = () => {

  const iconClassName = 'ml-4 w-7 h-7';

  const links = [
    {name: 'Instagram', href: 'https://www.instagram.com/h_lysias/', icon: <AiOutlineInstagram className={iconClassName}/>},
    {name: 'Formulário de Consulta', href: 'http://form.nutrilysias.com.br/', icon: <AiOutlineForm className={iconClassName}/>},
    {name: 'Entre em contato', href: 'https://api.whatsapp.com/', icon: <AiOutlineWhatsApp className={iconClassName}/>},
  ];

  return (
    <div className='w-full h-full bg-gradient-to-r from-orange-300 to-orange-200 flex justify-center'>
      
      <div className='flex flex-col items-center'>
        <div className='mt-20 '>
          <Image
            src='/HLLogov2.png'
            alt='logo'
            width={200}
            height={200}
            className='rounded-full'
          />
        </div>

        <div className='mt-20 flex flex-col space-y-5'>
          {links.map((obj, key) => (
            <Link href={obj.href} key={key} passHref>
              <button className="bg-amber-700 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded-full text-center flex justify-between items-center">
                {obj.name} 
                {obj.icon}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-5 w-5/6 h-[87%] rounded-3xl absolute border-4 border-orange-900 border-double'></div>
    </div>
  )
}

export default Home
