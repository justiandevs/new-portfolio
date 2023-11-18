import {Instagram, Linkedin, Twitter} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 xl:px-0 py-32 flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <h1>Hey 👋<br /> I am Justian<span className="text-blue-600">.</span></h1>
          <div className="flex flex-col gap-2 items-end">
            <p className="text-sm text-gray-400">Follow me</p>
            <div className="text-zinc-950 flex flex-row gap-2">
              <Link href="https://www.linkedin.com/in/justian-spijkerbosch-a4b74118b/" className="transition duration-200 border border-gray-200 p-2 rounded-lg hover:border-gray-400">
                <Linkedin size={20} />
              </Link>
              <Link href="https://twitter.com/justiandev" className="transition duration-200 border border-gray-200 p-2 rounded-lg hover:border-gray-400">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com/justianspijkerbosch" className="transition duration-200 border border-gray-200 p-2 rounded-lg hover:border-gray-400">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        <p>
          Passionate about creating digital solutions for the convenience of businesses and individuals, and sharing my journey online.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <h2 className="col-span-1 md:col-span-12">Contact</h2>
        <div className="col-span-1 md:col-span-7 flex flex-col gap-4">
          <p>
            Have a question about one of my projects, or just want to talk about something interesting?
          </p>
          <p>
            Send a mail to <a className="text-blue-600 underline font-semibold" href="mailto:mail@justian.dev">mail@justian.dev</a>
          </p>
        </div>
        <div className="col-span-1 md:col-span-4 md:col-start-9">
          <p>
            CoC - 89274482 <br />
            VAT-ID - NL004712093B24
          </p>
        </div>
      </div>
    </main>
  )
}
