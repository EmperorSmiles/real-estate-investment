import Image from 'next/image'
import Investe from '../../../../public/Investe-Group.png'
import Meta from '../../../../public/Meta.png'
import Glovo from '../../../../public/Glovo_logo.png'
import Apple from '../../../../public/Apple.png'
import Sujimoto from '../../../../public/Sujimoto.png'
export default function About() {
    return (
        <>
            <div className="bg-slate-200 min-h-56 flex items-center justify-between">
                <h1 className="sm:text-sm lg:text-5xl mx-5 font-bold text-slate-900">Why Us</h1>
                <div className='flex flex-col'>
                <p className="mt-6 text-sm lg:text-3xl pr-2">We are your trusted partner in the world of property investment. With years of expertise and a deep understanding of the real estate market, we help you make informed investment decisions that aligns with your goals</p>
                <div className='flex items-center justify-around pt-4'>
                    <Image
                    src={Investe}
                    alt='Partners'
                    quality={100}
                    className="object-center w-10 h-full lg:w-36 lg:h-full grayscale"
            
                    />
                    <Image
                    src={Meta}
                    alt='Partners'
                    quality={100}
                    className='object-center w-10 h-full lg:w-24 lg:h-full grayscale '
                    />
                    <Image
                    src={Glovo}
                    alt='Partners'
                    quality={100}
                    className="object-center w-10 h-full lg:w-24 lg:h-full grayscale "
            
                    />
                    <Image
                    src={Apple}
                    alt='Partners'
                    quality={100}
                    className="object-center w-10 h-full lg:w-24 lg:h-full grayscale "
            
                    />
                    <Image
                    src={Sujimoto}
                    alt='Partners'
                    quality={100}
                    className="object-center w-10 h-full lg:w-24 lg:h-full grayscale "
            
                    />
                </div>
            </div>
            </div>
        </>
    )
}
