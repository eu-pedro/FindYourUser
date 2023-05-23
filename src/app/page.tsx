import Image from 'next/image'
import Logo from './assets/LogoHeader.png'

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center h-20">
        <Image alt="" src={Logo.src} width={64} height={64} priority />
      </header>
      <hr />
      <main className="px-8">
        <h1 className="text-3xl leading text-gray-300 mt-10 font-normal">
          Pesquise seu usuário
        </h1>
      </main>
    </>
  )
}
