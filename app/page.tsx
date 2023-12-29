import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  bg-neutral-900 transition inset-0 mx-auto text-center sm:text-left ">

      <div className="z-10 max-w-5xl  items-center justify-between font-mono sm:grid-cols-2 text-sm lg:flex inset-0">
        <a>
          <Image
            className="relative scroll-smooth mx-auto "
            src="/images/Ak (2).png"
            alt="kxm Logo"
            width={400}
            height={400}
            priority
          />
        </a>

        <a
          href="https://discord.gg/YfZjqSsVz8"
          className="group rounded-[15px] border border-transparent py-4 px-2  lg:transition-colors lg:hover:border-gray-300 lg:hover:bg-gray-100 lg:hover:dark:border-neutral-700 lg:hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          >

          
            <a className={`m-1 text-base opacity-90 animate-pulse`}>
              Discord Server
            </a>
          
          
            <h2 className={`mb-5 text-8xl font-semibold text-white`}>
              <a className={`text-red-300`}>K</a>ELAS<a className={`text-red-900`} > A</a>XEM
            </h2>
          
          <a className={`m-1   text-lg opacity-60 text-white animate-bounce tracking-wide`}>
            Click to Join
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </a>

        </a>

      </div>

    </main>
  )
}
