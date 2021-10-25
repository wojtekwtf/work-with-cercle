import 'tailwindcss/tailwind.css'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="workwithcercle.com/">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
