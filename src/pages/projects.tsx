import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { Tech } from "../../typings";
import Link from 'next/link'; // Import the Link component from Next.js
import proj1 from '../images/proj1.png'


export default function Home({ title, description, tech, direction, span, gradient, delay }: { title: string, description: string, tech?: Tech[], direction: 'top' | 'bottom' | 'left' | 'right', span: 1 | 2, gradient: string, delay: number }) {


  const [pageLoad, setPageLoad] = useState(false);
  const [search, setSearch] = useState('')

  useEffect(() => {
    setPageLoad(true)
  }, [])

  function handleInput(e: any) {
    setSearch(e.target.value.replaceAll(' ', '+'))
  }

  function handleEnter(e: any) {
    if (e.key === 'Enter') {
      window.open(`https://duckduckgo.com/?t=lm&q=${search}&ia=web`, '_blank')
      setSearch('')
    }
  }

  return (
    <>
      <Head>
        <title>shadow.gg</title>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
        <meta name="description" content="Aiden's (aka SKRRRTT) personal site" />
        <meta property="og:image" content="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lbo1x6wn.png" />
        <meta property='theme-color' content='#17171a' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex h-screen flex-col justify-center  text-primary overflow-x-hidden'>
        <div className='max-w-5xl w-full mx-auto'>
          <h1 className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} fixed left-0 right-0 text-white font-bold sm:text-6xl text-4xl font-leaguespartan text-center top-24`}>
            Projects
          </h1>
          <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>


            <nav className="fixed z-50 flex h-16 w-full items-center justify-between bg-darkM-900 p-2 px-4 shadow-lg font-leaguespartan text-lg text-white top-0 left-0">
              <Link href="/">
                <span>
                  Amar Bajraktarevic
                </span>
              </Link>

           
           
             


          


              <motion.li
                className={`${span === 1 ? 'someClassName' : ''} ${gradient} fixed top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background w-96 t-96`}
                initial={{ transform: `translate${direction === 'bottom' || direction === 'top' ? 'Y' : 'X'}(30px)`, opacity: 0 }}
                animate={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'X' : 'Y'}(0px)`, opacity: 1 }}
                transition={{ duration: .5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96] }}
                viewport={{ amount: 0.1, once: true }}
              >
                <a draggable={false} href='/' target="_blank" className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background w-96 t-96`}>
                  <img draggable={false} className="rounded-lg border-1 border-accent mb-4 grayscale hover:grayscale-0 duration-300" src='https://raw.githubusercontent.com/AmarBajraktarevic/portfolio/main/proj2.png' alt="Project" />
                  <h2 className="font-leaguespartan text-center font-semibold text-4xl text-text">
                  Write'it.
                  </h2>
                  <p className="font-leaguespartan text-center text-xl text-text">
                  A simple planner & note-taking app built with React.
                  </p>
                </a>
              </motion.li>




              <motion.li
                className={`${span === 1 ? 'someClassName' : ''} ${gradient} fixed top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background w-96 t-96`}
                initial={{ transform: `translate${direction === 'bottom' || direction === 'top' ? 'Y' : 'X'}(-30px)`, opacity: 0 }}
                animate={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'X' : 'Y'}(0px)`, opacity: 1 }}
                transition={{ duration: .5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96] }}
                viewport={{ amount: 0.1, once: true }}
              >
                <a draggable={false} href='/' target="_blank" className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background w-96 t-96`}>
                  <img draggable={false} className="rounded-lg border-1 border-accent mb-4 grayscale hover:grayscale-0 duration-300" src='https://raw.githubusercontent.com/AmarBajraktarevic/portfolio/main/proj1.png' alt="Project" />
                  <h2 className="font-leaguespartan text-center font-semibold text-4xl text-text">
                    shdw.site
                  </h2>
                  <p className="font-leaguespartan text-center text-xl text-text">
                  A place where you can paste your links for a quick and accessible viewing.
                  </p>
                </a>
              </motion.li>

              <motion.li
                className={`${span === 1 ? 'someClassName' : ''} ${gradient} fixed top-1/2 left-96 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background w-96 t-96 justify-center items-center`}
                initial={{ transform: `translate${direction === 'bottom' || direction === 'top' ? 'Y' : 'X'}(0px)`, opacity: 0 }}
                animate={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'X' : 'Y'}(-100px)`, opacity: 1 }}
                transition={{ duration: .5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96] }}
                viewport={{ amount: 0.1, once: true }}
              >
                <a draggable={false} href='/' target="_blank" className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background w-96 t-96`}>
                  <img draggable={false} className="rounded-lg border-1 border-accent mb-4 grayscale hover:grayscale-0 duration-300" src='https://raw.githubusercontent.com/AmarBajraktarevic/portfolio/main/proj1.png' alt="Project" />
                  <h2 className="font-leaguespartan text-center font-semibold text-4xl text-text">
                    shdw.site
                  </h2>
                  <p className="font-leaguespartan text-center text-xl text-text">
                  A place where you can paste your links for a quick and accessible viewing.
                  </p>
                </a>
              </motion.li>



              <div className="flex flex-row gap-0">
                <Link href="/about">
                  <span className="p-2 duration-300 text-text text-lg font-medium hover:bg-secondary font-leaguespartan rounded-md">About</span>
                </Link>
                <Link href="/projects">
                  <span className="p-2 duration-300 text-text text-lg font-medium hover:bg-secondary font-leaguespartan rounded-md">Projects</span>
                </Link>
                <Link href="/cv">
                  <span className="p-2 duration-300 text-text text-lg font-medium hover:bg-secondary font-leaguespartan rounded-md">CV</span>
                </Link>
              </div>
            </nav>








          </div>
        </div>
      </main>
    </>
  )
}
