import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { Tech } from "../../typings";
import Link from 'next/link'; // Import the Link component from Next.js
import proj1 from '../images/proj1.png'
import Marquee from "react-fast-marquee";
import TechBadge from "@/components/TechBadge";
import Divider from "@/components/Divider";

export default function Home({ title, description, tech, direction, span, gradient, delay }: { title: string, description: string, tech?: Tech[], direction: 'top' | 'bottom' | 'left' | 'right', span: 1 | 2, gradient: string, delay: number }) {

  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    setPageLoad(true)
  }, [])

  return (
    <>
      <Head>
        <title>shadow.gg</title>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
        <meta name="description" content="shadow" />
        <meta property="og:image" content="" />
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

            <div className=" fixed -right-1 top-48 inline-flex space-x-10">


              <motion.li
                className={`${span === 1 ? 'md:col-span-1 col-span-2' : 'col-span-2'} ${gradient} bg-gradient-to-br p-4 flex flex-col rounded-lg border-1 border-accent shadow-2xl shadow-background`}
                initial={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(${direction === 'top' || direction === 'left' ? '-' : ''}30px)`, opacity: 0 }}
                whileInView={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(0px)`, opacity: 100 }}
                transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 0.1, once: true }}
              >
                <a href='https://github.com/AmarBajraktarevic/ezbio-clone' target="_blank" rel="noopener noreferrer"  >
                  <img draggable={false} className="rounded-lg border-1 border-accent mb-4 grayscale hover:grayscale-0 duration-300" src='https://raw.githubusercontent.com/AmarBajraktarevic/portfolio/main/proj1.png' alt="Project" />
                </a>
                <a href='https://shdw.site ' target="_blank" rel="noopener noreferrer" >
                  <h2 className="text-gray-50 font-leaguespartan text-center font-semibold text-4xl underline">
                    shdw.site
                  </h2>
                </a>
                <p className="font-leaguespartan text-center text-xl text-text mb-2">
                  A place where you can paste your links for a quick and accessible viewing.
                </p>

              </motion.li>

              <motion.li
                className={`${span === 1 ? 'md:col-span-1 col-span-2' : 'col-span-2'} ${gradient} bg-gradient-to-b p-4 flex flex-col rounded-lg border-1 border-accent shadow-2xl shadow-background`}
                initial={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(${direction === 'top' || direction === 'left' ? '-' : ''}30px)`, opacity: 0 }}
                whileInView={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(0px)`, opacity: 100 }}
                transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 0.1, once: true }}
              >
                <a href='https://github.com/AmarBajraktarevic/Write-It' target="_blank" rel="noopener noreferrer" >
                  <img draggable={false} className="rounded-lg border-1 border-accent mb-4 grayscale hover:grayscale-0 duration-300" src='https://raw.githubusercontent.com/AmarBajraktarevic/portfolio/main/proj2.png' alt="Project" />
                </a>
                <a href=''>
                  <h2 className=" text-gray-50 underline font-leaguespartan text-center font-semibold text-4xl">
                    Write'It
                  </h2>
                </a>
                <p className="font-leaguespartan text-center text-xl text-text mb-2">
                  A simple planner & note-taking app built with React.
                </p>

              </motion.li>


              <motion.li
                className={`${span === 1 ? 'md:col-span-1 col-span-2' : 'col-span-2'} ${gradient} bg-gradient-to-br p-4 flex flex-col rounded-lg border-1 border-accent shadow-2xl shadow-background`}
                initial={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(${direction === 'top' || direction === 'left' ? '-' : ''}30px)`, opacity: 0 }}
                whileInView={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(0px)`, opacity: 100 }}
                transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 0.1, once: true }}
              >
                <a href=''>
                  <img draggable={false} className="rounded-lg border-1 border-accent mb-4 grayscale hover:grayscale-0 duration-300" src='https://raw.githubusercontent.com/AmarBajraktarevic/portfolio/main/proj1.png' alt="Project" />
                </a>
                <a href=''>
                  <h2 className=" text-gray-50 underline font-leaguespartan text-center font-semibold text-4xl">
                    News
                  </h2>
                </a>
                <p className="font-leaguespartan text-center text-xl text-text mb-2">
                  A Simple News App made in React
                </p>

              </motion.li>
            </div>

            <nav className="fixed z-50 flex h-16 w-full items-center justify-between bg-darkM-900 p-2 px-4 shadow-lg font-leaguespartan text-lg text-white top-0 left-0">
              <Link href="/">
                <span>
                  Amar Bajraktarevic
                </span>

            </Link>
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
    </main >
   </>
 )
}



