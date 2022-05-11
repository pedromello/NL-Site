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
    {name: 'Agendamento', href: 'https://wa.me/5521988878695', icon: <AiOutlineWhatsApp className={iconClassName}/>},
  ];

  return (
    <div className='w-full h-full bg-gradient-to-r from-slate-100 to-white overflow-auto flex justify-center'>
      <Head>
        <title>Nutricionista - Hanelle Lysias</title>
        <meta name='description' content='Comece hoje o que te fará sentir orgulho amanhã. | Emagrecimento | Estética | Qualidade de vida' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="Nutricionista - Hanelle Lysias" />
        <meta property="og:description" content='Comece hoje o que te fará sentir orgulho amanhã. | Emagrecimento | Estética | Qualidade de vida' />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.nutrilysias.com.br" />
        <meta property="profile:first_name" content="Hanelle" />
        <meta property="profile:last_name" content="Lysias" />
        <meta property="profile:gender" content="female" />
        <meta property="og:image" content="https://instagram.fsdu8-2.fna.fbcdn.net/v/t51.2885-15/161029919_800809083854707_3826061281414338865_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fsdu8-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-cY9Xz1btzoAX_9t72G&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjUzMTU5OTYyMzczNDI0Njc4Ng%3D%3D.2-ccb7-4&oh=00_AT9tReZi2xhwD4tyMsdQCaL_0SxAuLKBmm7OUFGBU2bmPA&oe=62816344&_nc_sid=30a2ef" />

      </Head>
      <div className='lg:w-[380px] lg:h-[680px]  lg:pb-8 mt-12 flex flex-col justify-center'>
        <div className='flex grow flex-col items-center'>
          <div className='w-[150px] h-[150px] p-1 rounded-full border-4 border-rose-300'>
            <Image
              src='/HLPhoto02.jpg'
              alt='logo'
              width={150}
              height={150}
              className='rounded-full'
            />
          </div>
          <div className='w-32 h-32 z-10 flex absolute top-[172px]'>
            <Image className='object-none' src='/HLLogoSmall.png' alt='Small logo'
             width={300} height={300}/>
          </div>
          <h1 className='z-20 mt-4 font-medium text-center text-black w-64'>Hanelle Lysias | Nutricionista</h1>
          <p className='z-20 text-sm'>CRN4: 22100538/P</p>
          <p className='mt-4 font-serif font-medium text-center text-black/60 w-64'>&quot;Comece hoje o que te fará sentir orgulho amanhã&quot;</p>
          
          <div className='mt-12 flex flex-col space-y-5'>
            {links.map((obj, key) => (
              <a href={obj.href} key={key} target="_blank" rel="noopener noreferrer">
                <button className="w-60 bg-gradient-to-r from-rose-100 to-rose-50 hover:from-slate-200 hover:to-slate-100 shadow text-black font-normal py-2 px-10 rounded-full text-center flex justify-between items-center">
                  {obj.name} 
                  {obj.icon}
                </button>
              </a>
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
