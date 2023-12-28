import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  bg-neutral-900 transition ">

      <div className="z-10 max-w-5xl  items-center justify-between font-mono lg:grid-cols-2 text-sm lg:flex lg:inset-0">
        <a>
          <Image
            className="relative scroll-smooth lg:inset-0 md:mx-auto"
            src="/images/Ak (2).png"
            alt="kxm Logo"
            width={400}
            height={400}
            priority
          />
        </a>

        <a
          href="https://discord.gg/YfZjqSsVz8"
          className="group rounded-lg border border-transparent py-4 px-2  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer">

          <p>
            <a className={`m-1 text-base opacity-90 `}>
              Discord Server
            </a>
          </p>
          <p>
            <h2 className={`mb-5 text-8xl font-semibold text-white`}>
              <a className={`text-red-300`}>K</a>ELAS<a className={`text-red-900`} > A</a>XEM
            </h2>
          </p>
          <p className={`m-1   text-lg opacity-60 text-white animate-bounce tracking-wide`}>
            Click to Join
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>



        </a>

      </div>




      <div className="relative grid text-center lg:max-w-5xl lg:w-full  lg:grid-cols-2 lg:text-left">

      </div>
    </main>
  )
}
