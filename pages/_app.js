import 'tailwindcss/tailwind.css'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="work-with-cercle.vercel.app">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
