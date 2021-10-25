import Head from 'next/head'

import { useState, useEffect } from 'react'

const CERCLE_YT_HASHES = [
  "oFvqo1dil7M",
  "_SvwdK_HibQ",
  "RJaV5BX-xpE",
  "SD6GDiyHmbE",
  "uGEDSGCUkXk",
  "crZfT5qnFdA",
  "h96MGcsi7GQ",
  "z05IO3gWlog",
  "XHNHq1mC0VQ",
  "dQjkqyc5nlc",
  "sCNlt5nvSI8",
  "5mpafLYHVd0",
  "ZdAwiV4T22I",
  "8AvC05kXS9I"
]

export default function Home() {

  const [cercleYTHash, setCercleYTHash] = useState("")

  useEffect(() => {
    setRandomYTHash()
  }, [])

  const setRandomYTHash = () => {
    setCercleYTHash(CERCLE_YT_HASHES[Math.floor(Math.random()*CERCLE_YT_HASHES.length)])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-h-screen py-2 bg-gradient-to-br from-white via-indigo-200 to-pink-100">
      <Head>
        <title>work with cercle</title>
        <meta name="description" content="random cercle concert without going through youtube"/>
        <link rel="icon" href="/music-emoji.png" />
      </Head>

      <div className="mb-4 z-50">
        <div className="md:hidden">
          <iframe
            width="375"
            height="215"
            src={`https://www.youtube-nocookie.com/embed/${cercleYTHash}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hidden md:block lg:hidden">
          <iframe
            width="735"
            height="380"
            src={`https://www.youtube-nocookie.com/embed/${cercleYTHash}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hidden lg:block">
          <iframe
            width="1120"
            height="630"
            src={`https://www.youtube-nocookie.com/embed/${cercleYTHash}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none mb-6 z-50"
        onClick={() => window.location.reload()}
      >
        Change video
      </button>
      <p className="text-sm text-black z-50">Made by <a className="underline" target="_blank" href="https://wojtek.wtf">wojtek</a>. right now he's working on <a className="underline" target="_blank" href="https://mazurylabs.com">mazury</a></p>.
    </div>
  )
}
