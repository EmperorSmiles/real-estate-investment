import Image from 'next/image'
import Investe from '../../../../public/Investe-Group.png'
import LionStone from '../../../../public/Picture 1.webp'
import PropInvest from '../../../../public/PropertyInvest_DE_Logo_CMYK_Black_Orange.png'
import SvG1 from '../../../../public/logo-bk.svg'
import SvG2 from '../../../../public/page-logoInner.svg'
export default function About() {
    return (
        <>
            <div className="bg-slate-200 min-h-0h-56 flex items-center justify-between space-x-6">
                <h1 className="text-5xl m-5 font-bold text-slate-900">Why Us</h1>
            </div>
                <div className='flex flex-col'>
                <p className="mt-6">We are your trusted partner in the world of property investment. With years of expertise and a deep understanding of the real estate market, we help you make informed investment decisions that aligns with your goals</p>
                <div className='flex items-center'>
                    <Image
                    src={Investe}
                    alt='Partners'
                    quality={100}
                    className="object-cover w-1/6 h-full px-5"
            
                    />
                    <Image
                    src={LionStone}
                    alt='Partners'
                    quality={100}
                    className='bg-slate-800 object-cover w-1/6 h-16 mx-4'
                 // width={100}
                 // height={10}
            
                    />
                    <Image
                    src={PropInvest}
                    alt='Partners'
                    quality={100}
                    className="object-cover w-1/6 h-16 mx-4"
            
                    />
                    <Image
                    src={SvG2}
                    alt='Partners'
                    quality={100}
                    className="object-cover w-1/6 h-16 mx-4"
            
                 />
                 <Image
                 src={SvG1}
                 alt='Partners'
                 quality={100}
                 // width={200}
                 // height={10}
                 className="object-cover w-1/6 h-16"
            
                 />
             </div>
                 </div>
        </>
    )
}
