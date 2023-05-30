import { User } from 'lucide-react'
import Image from 'next/image'
import LogoHeader from './assets/LogoHeader.png'
import Icon from './assets/IconeGithub.png'

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center h-20 border-b-2 border-gray-400">
        <h1 className="text-3xl leading text-gray-300 font-normal">
          <Image src={LogoHeader} alt="" width={30} height={30} />
        </h1>
      </header>
      <main className="px-8 max-w-[900px] mt-20 m-auto h-[500px] bg-gray-800 rounded-2xl p-8">
        <div className="flex flex-col items-center justify-between h-[100%]">
          <h3 className=" text-gray-300 leading-snug text-3xl">
            Entre já usando o Github
          </h3>
          <a
            href="#"
            className="flex items-center justify-center gap-2 p-5 border "
          >
            <Image src={Icon} alt="" width={16} height={16} />
            <span>Entre com o Github</span>
          </a>
        </div>
      </main>
    </>
  )
}

/* <div className="bg-gray-500 w-10 h-10 rounded-full items-center flex justify-center">
            <User className="h-5 w-5 text-gray-200" />
          </div>
          <a
            href="#"
            className="max-w-[140px] text-sm leading-snug text-gray-400"
          >
            <span className="underline">Entre já!</span> encontre sua conta no
            Github
          </a> */
