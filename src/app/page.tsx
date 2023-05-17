import Link from "next/link";
import {FaArrowRight, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Image from "next/image";
import figma from "../../public/assets/logo/figma.svg"
import nest from "../../public/assets/logo/nest.svg"
import next from "../../public/assets/logo/next-js.svg"
import postgresql from "../../public/assets/logo/postgresql.svg"
import react from "../../public/assets/logo/react.svg"
import supabase from "../../public/assets/logo/supabase.png"
import tailwind from "../../public/assets/logo/tailwind.svg"

export default function Home() {
  return (
    <>
      <main className="relative">
        <div className="absolute z-10 top-0 left-0 bottom-0 right-0">
          <div className="custom-container h-full flex justify-between">
            <div className="h-full border-opacity-10 border-r border-zinc-100 ml-10 md:ml-20"></div>
            <div className="h-full border-opacity-10 border-r border-zinc-100"></div>
            <div className="h-full border-opacity-10 border-r border-zinc-100 mr-10 md:mr-20"></div>
          </div>
        </div>
        <div className="relative z-30">
          <nav className="custom-container py-12 flex justify-between flex-row items-center">
            <Link href={"/"} className="font-semibold text-[1.5-rem] opacity-100">
              Justian.dev
            </Link>
            <a href={"#contact"} className="opacity-100 bg-lime-400 py-4 px-4 py-3 rounded-lg text-black font-medium transition duration-300 hover:bg-lime-500">
              Contact
            </a>
          </nav>
          <section className="py-32 custom-container">
            <div className="flex flex-col gap-8 w-full lg:w-1/2">
              <h1>I am a <span className="text-lime-400">creative developer</span> who build things that you will like 😌</h1>
              <p>I am Justian Spijkerbosch, a fullstack developer who is focused on creating beautiful (web)apps and websites for myself or others.</p>
              <a href={"#about"} className="group text-lime-400 font-semibold opacity-100 flex flex-row gap-4 items-center transition duration-300 hover:text-lime-500">
                Learn more about me
                <FaArrowRight className="transition duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
              </a>
            </div>
          </section>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-30 custom-container">
              <Image style={{objectFit: "cover"}} className="rounded-lg h-80 -rotate-3" src={"/assets/photo_1.jpg"} alt={"Front view image of myself at my work in the forest"} width={"1000"} height={"1000"} />
              <Image style={{objectFit: "cover"}} className="hidden md:block rounded-lg h-80 -rotate-3" src={"/assets/photo_2.jpg"} alt={"Front view image of myself at my work in the forest"} width={"1000"} height={"1000"} />
            </div>
          </section>
          <section id="about" className="custom-container py-32 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="col-span-1 md:col-span-2 flex gap-8 flex-col">
              <h2>Who <span className="text-lime-400">am I</span></h2>
              <p>I am Justian Spijkerbosch and I enjoy working on digital solutions that are problem-solving such as apps or websites as a fullstack developer. I do this for myself and for others.</p>
              <p>Since a few years I program a lot and currently I am a second years Computer Science student, next to this section you can see the technologies I am well-known with and at my <a className="opacity-100 text-lime-400 font-semibold transition duration-300 hover:text-lime-500" href="https://github.com/justiandevs">github</a> you can see my opensource projects / contributions and under this section you can see my work.</p>
              <a href={"#work"} className="group text-lime-400 font-semibold opacity-100 flex flex-row gap-4 items-center transition duration-300 hover:text-lime-500">
                My work
                <FaArrowRight className="transition duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
              </a>
            </div>
            <div className="col-span-1 md:col-span-1 flex flex-col gap-8 md:items-end">
              <h3>Technologies</h3>
              <div className="flex flex-wrap md:grid md:grid-cols-3 gap-4">
                <Link href="https://figma.com" className="bg-zinc-900 opacity-100 border flex items-center justify-center border-zinc-100 border-opacity-10 rounded-lg w-12 h-12">
                  <Image height={16} width={16} src={figma} alt={"figma"} />
                </Link>
                <Link href="https://nestjs.com" className="bg-zinc-900 opacity-100 border flex items-center justify-center border-zinc-100 border-opacity-10 rounded-lg w-12 h-12">
                  <Image height={16} width={16} src={nest} alt={"nestjs"} />
                </Link>
                <Link href="https://nextjs.com" className="bg-zinc-900 opacity-100 border flex items-center justify-center border-zinc-100 border-opacity-10 rounded-lg w-12 h-12">
                  <Image height={16} width={16} src={next} alt={"nextjs"} />
                </Link>
                <Link href={"https://postgresql.com"} className="bg-zinc-900 opacity-100 border flex items-center justify-center border-zinc-100 border-opacity-10 rounded-lg w-12 h-12">
                  <Image height={16} width={16} src={postgresql} alt={"postgresql"} />
                </Link>
                <Link href={"https://reactjs.org"} className="bg-zinc-900 opacity-100 border flex items-center justify-center border-zinc-100 border-opacity-10 rounded-lg w-12 h-12">
                  <Image height={16} width={16} src={react} alt={"react"} />
                </Link>
                <Link href={"https://supabase.com"} className="bg-zinc-900 opacity-100 border flex items-center justify-center border-zinc-100 border-opacity-10 opacity-100 rounded-lg w-12 h-12">
                  <Image height={16} width={16} src={supabase} alt={"supabase"} />
                </Link>
                <Link href={"https://tailwindcss.com"} className="bg-zinc-900 opacity-100 border flex items-center justify-center border-zinc-100 border-opacity-10 rounded-lg w-12 h-12">
                  <Image height={16} width={16} src={tailwind} alt={"tailwind"} />
                </Link>
              </div>
            </div>
          </section>
          <section id="work" className="py-16 bg-zinc-900 border-t border-b border-zinc-100 border-opacity-10" style={{borderRadius: "64px"}}>
            <div className="custom-container flex flex-col gap-8 items-center">
              <h2>My <span className="text-lime-400">work</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
                <Link href="https://tiktok.mrboost.nl" className="col-span-1 border border-lime-400 border-opacity-40 opacity-100 rounded-lg transition duration-300 hover:bg-zinc-800">
                  <Image src={"/assets/mockup-tiktok.png"} alt={"tiktok agency website for mrboost"} width={1000} height={1000} />
                  <h3 className="px-8 pb-8 -mt-16">TikTok Agency site for MrBoost</h3>
                </Link>
                <div className="col-span-1 md:col-span-2 border border-lime-400 border-opacity-40 border-dashed rounded-lg p-8 flex flex-col justify-center gap-4">
                  <h3>Do you have a nice idea that could be possibly here?</h3>
                  <p>I like to build on my own projects but to finance them I work on projects for others sometimes.</p>
                  <a href={"#contact"} className="group text-lime-400 font-semibold opacity-100 flex flex-row gap-4 items-center transition duration-300 hover:text-lime-500">
                    Lets drink a coffee
                    <FaArrowRight className="transition duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="custom-container py-32 flex flex-col gap-8">
            <h2>Lets <span className="text-lime-400">get in <br />touch</span></h2>
            <div className="flex flex-col md:flex-row gap-8">
              <p className="w-full md:w-1/2">Have a question about one of my projects, or just want to talk about something interesting?</p>
              <p>CoC - 89274482 <br/>VAT-ID - NL004712093B24</p>
            </div>
            <p>Send a mail to <a href="mailto:mail@justian.dev" className="font-semibold opacity-100 text-lime-400 transition duration-300 hover:text-lime-500">mail@justian.dev</a></p>
          </section>
          <footer className="custom-container flex pb-32 flex-col md:flex-row gap-4 justify-between">
            <Link href={"/"} className="font-semibold text-[1.5-rem] opacity-100">
              Justian.dev
            </Link>
            <div className="flex flex-row gap-2">
              <a href={"https://github.com/justiandevs"} aria-label="github" className="opacity-100">
                <div className="p-3 border border-zinc-100 bg-zinc-900 border-opacity-10 rounded-full transition duration-300 hover:border-opacity-100">
                  <FaGithub />
                </div>
              </a>
              <a href={"https://www.linkedin.com/in/justian-spijkerbosch-a4b74118b/"} aria-label="linkedin" className="opacity-100">
                <div className="p-3 border border-zinc-100 bg-zinc-900 border-opacity-10 rounded-full transition duration-300 hover:border-opacity-100">
                  <FaLinkedin />
                </div>
              </a>
              <a href={"https://twitter.com/Justiandev"} aria-label="twitter" className="opacity-100">
                <div className="p-3 border border-zinc-100 bg-zinc-900 border-opacity-10 rounded-full transition duration-300 hover:border-opacity-100">
                  <FaTwitter />
                </div>
              </a>
              <a href={"https://instagram.com/justianspijkerbosch"} aria-label="instagram" className="opacity-100">
                <div className="p-3 border border-zinc-100 bg-zinc-900 border-opacity-10 rounded-full transition duration-300 hover:border-opacity-100">
                  <FaInstagram />
                </div>
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
