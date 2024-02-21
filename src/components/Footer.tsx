import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/app/constants'

function Footer() {
    return (
        <footer className="container mx-auto flex flex-col text-black-100 mt-5 border-gray-100  px-6 py-10">
            <div className="flex max-md:flex-col flex-nowrap justify-between gap-20">
                <div className="flex flex-col items-start justify-start gap-6">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                    <div className='flex flex-col gap-4'>
                        <p>Carhub 2023</p>
                        <p>All Rights Reserved &copy;</p>
                    </div>
                </div>

                <div className="flex-wrap gap-24 flex justify-end">
                    {footerLinks.map((item) => {
                        return (
                            <div className="min-w-[100px]">
                                <p className='text-lg font-bold'>{item.title}</p>
                                <div className='flex flex-col mt-5 gap-4 w-full'>
                                    {item.links.map((link, index) => {
                                        return (
                                            <Link key={index} href={link.url}>
                                                {link.title}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 gap-5">
                <p className=''>@2023 Carhub. All right reserved</p>
                <div className='flex gap-5 '>
                    <Link href='/'>Privacy & Policy</Link>
                    <Link href='/'>Terms & Condition</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
