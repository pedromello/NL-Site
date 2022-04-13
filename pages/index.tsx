import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='w-full h-full bg-orange-200 flex justify-center'>
      <div className='mt-24'>LOGO</div>
      <div className='mt-4'>Lista</div>
    </div>
  )
}

export default Home
