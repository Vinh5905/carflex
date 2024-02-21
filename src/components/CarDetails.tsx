'use client'
import { CarDetailsTypes, CarTypes } from '@/types'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import { generateCarImageUrl } from '@/utils'
import Image from 'next/image'

function CarDetails({ isOpen, closeModal, car }: CarDetailsTypes) {
    return (
        <>
            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 z-10"></div>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-hidden z-10">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-90"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-90"
                            >
                                <Dialog.Panel className="relative bg-white overflow-y-auto rounded-2xl max-h-[90vh] w-[512px] p-5">
                                    <div className="relative w-full">
                                        <button onClick={closeModal} className="absolute top-0 right-0 bg-white translate-x-1/2 -translate-y-1/2 p-2 rounded-full z-10 cursor-pointer">
                                            <Image
                                                className='text-black h-4 w-4'
                                                src="/close.svg"
                                                alt="close"
                                                width={20}
                                                height={20}
                                            />
                                        </button>

                                        <div className='relative h-[180px] mb-2 w-full bg-pattern bg-cover bg-center bg-no-repeat rounded-lg'>
                                            <Image src={generateCarImageUrl(car)} alt='' fill className='object-contain py-5' priority/>
                                        </div>

                                        <div className="flex gap-2">
                                            <div className='h-24 flex-1 relative bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImageUrl(car, '29')} alt='' fill className='p-3 object-contain'/>
                                            </div>
                                            <div className='h-24 flex-1 relative bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImageUrl(car, '33')} alt='' fill className='p-3 object-contain'/>
                                            </div>
                                            <div className='h-24 flex-1 relative bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImageUrl(car, '13')} alt='' fill className='p-3 object-contain'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='font-semibold text-lg gap-2 capitalize my-4'>
                                            {car.make} {car.model}
                                        </p>

                                        <div className='text-sm flex flex-col gap-4'>
                                            {Object.keys(car).map((property, index) => {
                                                return <div key={index} className='flex justify-between'>
                                                    <span className='flex-1 capitalize text-black/50'>{property.replace(/\_/g, ' ')}</span>
                                                    <span className='font-semibold'>{car[property as keyof CarTypes]}</span>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails
