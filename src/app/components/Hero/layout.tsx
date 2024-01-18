import React  from "react";
import Image from 'next/image'
import background from '../../../../public/BGimage.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdAttachMoney } from "react-icons/md";

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
    url: "https://youtube.com"
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
          <div className="absolute inset-0 flex items-center sm:px-2 lg:px-10 justify-between">
            <h1 className="text-gray-300 text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold flex flex-col"><span className='px-14'>SMART </span> <span className='px-8'>HOMES, </span><span className='px-20'>SMARTER</span> <span className='px-12'>INVESTMENTS</span></h1>
            <div className="relative inset-0 flex flex-col py-10 text-gray-300 ">
              {social.map((social, idx) => (
              <a href={social.url} target="_blank" key={idx} className={`${social.spacing} border-2 p-2 rounded-full border-gray-300 hover:bg-white hover:text-black hover:border-black`}>
              {social.icon}
            </a>
            ))}
          </div>
          </div>
          <p className='text-gray-300 absolute inset-0 flex items-center justify-center top-80 font-roboto'>
          At IntelliVest, we are your trusted partner on the path to property investment success
          </p>
        </div>
      </div>
      <div className="bg-gray-500 p-6 lg:flex justify-between">
        <div className="flex justify-between mb-6">
          <div className="pr-6">
            <GoGraph className="text-xl lg:text-4xl mr-4"/> <p className="text-sm lg:text-lg">Invest in full or fractional property ownership and earn real-time rental income from multiple listings</p>
          </div>
          <div>
            <MdAttachMoney className="text-xl lg:text-4xl mr-4"/> <p className="text-sm lg:text-lg">Receive your portion of rental income from your properties hassle-free with no property management worries </p>
          </div>
        </div>
        <button className="bg-transparent rounded-full border-gray-900 border-2 px-2 lg:my-12 hover:border-white hover:text-white w-full lg:w-72">Free Strategy Session</button>
      </div>
    </>
  )
}
