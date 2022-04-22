/* eslint-disable @next/next/inline-script-id */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

        <Script strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
            `}
        </Script>


      <Component {...pageProps} />
    </>
  ); 
}

export default MyApp
