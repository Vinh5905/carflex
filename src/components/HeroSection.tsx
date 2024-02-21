'use client'
import { CustomButton } from './index'
import Image from 'next/image'

function HeroSection() {
    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div className="container mx-auto flex max-xl:flex-wrap gap-10 pt-36 px-6">
            <div className="flex-1">
                <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold leading-tight">
                    Find, book, or rent a car -quickly and easily
                </h1>

                <p className='mt-7 mb-5'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    ut, perferendis doloribus porro nihil assumenda eveniet iste
                    quam consectetur.
                </p>

                <CustomButton
                    title="Helo nha"
                    btnType="button"
                    onClick={handleClick}
                    disabled={false}
                    className="bg-primary-blue rounded-full text-white"
                />
            </div>

            <div className="xl:flex-[1.5] flex justify-center items-end w-full h-auto">
                <div className="relative xl:w-full xl:h-full lg:w-[70%] w-[80%] lg:h-[500px] h-[400px] z-0">
                    <Image
                        src={'/hero.png'}
                        fill
                        className="object-contain"
                        alt="hero"
                    />
                    <div className="absolute bg-hero-bg bg-no-repeat bg-center bg-contain -z-10 w-full h-full overflow-hidden xl:scale-[1.6] scale-[1.25] -top-[10%] xl:-right-[35%] xl:-top-[17%]"></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
