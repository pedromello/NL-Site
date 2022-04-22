import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineForm, AiOutlineWhatsApp,
   AiOutlineCopyrightCircle, AiOutlineShareAlt } from 'react-icons/ai'

const Home: NextPage = () => {

  const iconClassName = 'ml-4 w-7 h-7';

  const links = [
    {name: 'Instagram', href: 'https://www.instagram.com/hanellelysias_nutri/', icon: <AiOutlineInstagram className={iconClassName}/>},
    {name: 'Consulta Online', href: 'https://wa.me/5521988878695', icon: <AiOutlineWhatsApp className={iconClassName}/>},
  ];

  return (
    <div className='w-full h-full bg-gradient-to-r from-orange-300 to-orange-200 overflow-auto flex justify-center'>
      <div className='lg:w-[380px] lg:h-[680px]  lg:pb-8 mt-12 flex flex-col justify-center'>
        <div className='flex grow flex-col items-center'>
          <div className='w-[150px] h-[150px] p-1 rounded-full border-4 border-slate-100'>
            <Image
              src='/HLPhoto02.jpg'
              alt='logo'
              width={150}
              height={150}
              className='rounded-full'
            />
          </div>
          <p className='mt-4 font-medium text-center text-black w-64'>Hanelle Lysias | Nutricionista</p>
          <p className='text-sm'>CRN4: 22100538/P</p>
          <p className='mt-4 font-serif font-medium text-center text-black/60 w-64'>&quot;Comece hoje o que te fará sentir orgulho amanhã&quot;</p>

          <div className='mt-12 flex flex-col space-y-5'>
            {links.map((obj, key) => (
              <Link href={obj.href} key={key} passHref>
                <button className="w-60 bg-gradient-to-r from-slate-100 to-white hover:from-slate-200 hover:to-slate-100 shadow text-black font-normal py-2 px-10 rounded-full text-center flex justify-between items-center">
                  {obj.name} 
                  {obj.icon}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className='flex justify-center pb-2 font-thin'>
          2022 <AiOutlineCopyrightCircle className="w-6 mt-1"/> por Nutri Lysias
        </div>
      </div>

      {/*<div className='mt-5 w-5/6 h-[87%] rounded-3xl absolute border-4 border-orange-900 border-double'></div>*/}
    </div>
  )
}

export default Home
