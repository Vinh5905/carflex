'use client'
import { CarTypes } from '@/types'
import { useState } from 'react'
import Image from 'next/image'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import { CustomButton, CarDetails } from '.'

interface CarCardTypes {
    car: CarTypes
}

function CarCard({ car }: CarCardTypes) {
    const { city_mpg, combination_mpg, make, model, transmission, year, drive } = car
    const [isOpen, setIsOpen] = useState(false)

    const carRent = calculateCarRent(city_mpg, year)

    return (
        <div className="shadow-lg bg-primary-blue-100 rounded-lg flex flex-col p-5 group/viewMore">
            <header className='font-bold mb-3 text-lg capitalize line-clamp-1'>{make} {model}</header>

            <div className='mb-2'>
                <div className="relative pl-2 inline-block">
                    <span className="absolute text-xs left-0 top-0">$</span>
                    <span className='text-2xl font-bold '>{carRent ? carRent : '???'}</span>
                    <span className="absolute bottom-0 text-xs -right-[23px]">/day</span>
                </div>
            </div>

            <div className="w-full h-[160px] flex p-5">
                <Image className="object-contain h-full w-full" src={generateCarImageUrl(car)} alt="" width={100} height={100}/>
            </div>

            <div className="flex mt-2 justify-between text-sm group-hover/viewMore:hidden">
                <div className="flex flex-col items-center gap-2">
                    <Image src='/steering-wheel.svg' alt='' width={18} height={18}/>

                    <span>{transmission === 'a' ? 'Automatic' : 'Manual'}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image src='/tire.svg' alt='' width={18} height={18}/>

                    <span>{drive.toUpperCase()}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image src='/gas.svg' alt='' width={18} height={18}/>

                    <span>{city_mpg} MPG</span>
                </div>
            </div>

            <div className='mt-2 hidden group-hover/viewMore:block '>
                <CustomButton onClick={() => setIsOpen(true)} rightIcon='/right-arrow.svg' title='View More' className='w-full bg-primary-blue rounded-full text-white font-semibold tracking-wider'/>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
        </div>
    )
}

export default CarCard
