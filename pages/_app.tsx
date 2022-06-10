/* eslint-disable @next/next/inline-script-id */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER || "" });
  }, []);
  return(
    <>
      <Component {...pageProps} />
    </>
  ); 
}

export default MyApp
