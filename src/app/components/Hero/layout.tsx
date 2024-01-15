import React  from "react";
import Image from 'next/image'
import background from '../../../../public/BGimage.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const social = [
  {
    icon: <FaInstagram />,
    spacing: "mb-4",
    url: "https://www.instagram.com"
  },
  {
    icon: <FaXTwitter />,
    spacing: "mb-4",
    url: "https://www.twitter.com"
  },
  {
    icon: <FaFacebookF />,
    spacing: "mb-4",
    url: "https://www.facebook.com"
  },
  {
    icon: <FaYoutube />,
    url: "https://medium.com"
  },
]

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
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-70"></div>
        <div>
          <div className="absolute inset-0 flex items-center px-10 justify-between">
            <h1 className="text-gray-300 text-5xl font-bold flex flex-col"><span className='px-14'>SMART </span> <span className='px-8'>HOMES, </span><span className='px-20'>SMARTER</span> <span className='px-12'>INVESTMENTS</span></h1>
            <div className="relative inset-0 flex flex-col py-10 text-gray-300 ">
              {social.map((social, idx) => (
              <a href={social.url} target="_blank" key={idx} className={`${social.spacing} border-2 p-2 rounded-full border-gray-300 hover:bg-white hover:text-black hover:border-black`}>
              {social.icon}
            </a>
            ))}
          </div>
          </div>
          <p className='text-gray-300 absolute inset-0 flex items-center justify-center top-80 '>
          At IntelliVest, we are your trusted partner on the path to property investment success
          </p>
        </div>
        
      </div>
    </>
  )
}
