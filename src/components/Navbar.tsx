import { motion } from "framer-motion";
import Link from 'next/link'; // Import the Link component from Next.js
export default function Navbar() {



    return (
        <>
            <nav className="fixed z-50 flex h-16 w-full items-center justify-between bg-darkM-900 p-2 px-4 shadow-lg font-leaguespartan text-lg text-white">
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
        </>
    );

}
