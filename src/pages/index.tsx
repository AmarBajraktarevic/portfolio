import Head from "next/head";
import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import Hero from "@/components/index/Hero";
import About from "@/components/index/About";
import Projects from "@/components/index/Projects";
import Footer from "@/components/index/Footer";

export default function Home() {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>shadow.gg</title>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
        <meta name="description" content="shadow" />
        <meta property="og:image" content="" />
        <meta property='theme-color' content='#4f6d7a' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="relative min-h-screen text-primary bg-pattern overflow-x-hidden px-6 text-c ">
        <Hero inView={inView} descRef={ref} />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
