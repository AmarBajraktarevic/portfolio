import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';



export default function Home() {


    const [pageLoad, setPageLoad] = useState(false);


    return (
        <>
            <Head>
              <title>Amar Bajraktarevic | Portfolio </title>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
        <meta name="description" content="" />
        <meta property="og:image" content="https://i.imgur.com/thgCHTL.png" />
        <meta property='theme-color' content='#4f6d7a' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex h-screen flex-col justify-center pattern-grid-lg text-primary overflow-x-hidden'>
                <div className='max-w-5xl w-full mx-auto'>
                    
                    <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>
                      
                        <div className="relative mt-2 flex items-center">
                          
                      
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
