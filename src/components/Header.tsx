'use client'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'
import { useEffect } from 'react'
// import { useDeviceSize } from '@/hooks'

function Header() {
    // const [width, height] = useDeviceSize()
    // console.log(width, height)

    // useEffect(() => {
    //     window.onscroll = (e) => {
    //         console.log(e)
    //     }
    // })

    return (
        <header className="w-full z-10 fixed bg-white">
            <div className='absolute top-full left-0 right-0 h-5 bg-gradient-to-b from-white to-white/0'>
            </div>
            <div className="container flex justify-between items-center mx-auto px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo.svg"
                        alt=""
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                <CustomButton title='Sign in' btnType={'button'} className='text-primary-blue bg-white min-w-[130px] rounded-full'/>
            </div>
        </header>
    )
}

export default Header
