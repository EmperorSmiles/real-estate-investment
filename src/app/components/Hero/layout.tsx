import Image from 'next/image'
import background from '../../../../public/BGimage.png'

export default function Hero() {
  return (
    <>
      <div className="relative bg-cover bg-center h-96">
        <Image
          src={background}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Your content goes here */}
          <h1 className="text-gray-200 text-4xl font-bold">Smart Homes, Smarter Investing!</h1>
        </div>
      </div>
    </>
  )
}
