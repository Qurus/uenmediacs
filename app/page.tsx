import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image
        src="/xera.svg"
        alt="Themeptation "
        className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
        width={500}
        height={500}
      />
      <Image
        src="/shapes.svg"
        alt="hero"
        className="absolute w-full left-24 bottom-24 animate-blob2"
        width={500}
        height={500}
      />
      <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
        <div className="text-center space-y-10">
          <h3 className="font-light text-xl uppercase tracking-wider">
            Uen Media Coming soon
          </h3>
          <h1 className="text-7xl lg:text-9xl font-extrabold">
            We’r blowing up
          </h1>
          <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
            We`re under construction. Check back for an update soon. Stay in
            touch!
          </p>
        </div>
      </div>
      <div className="absolute bottom-5">
      </div>
    </div>
  )
}
