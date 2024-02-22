import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { Tech } from "../../typings";
import Link from 'next/link'; // Import the Link component from Next.js

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
                    <h1 className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} text-white font-bold sm:text-6xl text-4xl font-leaguespartan text-center`}>
                        About Me
                    </h1>
                    <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>


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
                        <motion.li
                            className={`${span === 1 ? 'someClassName' : ''} ${gradient} max-w-screen-xl from-primary to-secondary p-4 flex flex-col rounded-lg border-1 border-accent shadow-2xl shadow-background mx-auto items-center justify-center`}
                            initial={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(30px)`, opacity: 0 }}
                            whileInView={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(0px)`, opacity: 1 }}
                            transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96] }}
                            viewport={{ amount: 0.1, once: true }}
                        >
                            <h2 className="font-leaguespartan text-center font-semibold text-4xl text-text">
                            </h2>
                            <p className="font-leaguespartan text-center text-xl text-text mb-2">
                                Hey, I'm Amar Bajraktarevic, a 16-year-old high school student from Michigan who's passionate about coding. It all started when I was younger, looking at the websites my friend made and thinking, "I want to make something like that too!" So, I taught myself how to code.
                                By sophomore year, I was fully immersed, working on a website for a business idea my friend and I came up with. Now, I've got several websites up and running, all thanks to my love for coding. Feel free to check them out here.
                            </p>
                        </motion.li>







                    </div>
                </div>
            </main>
        </>
    )
}
