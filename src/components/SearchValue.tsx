'use client'
import { SearchValueTypes } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

//saveValue, setSaveValue
//data
//logo
//placeholder
//

function SearchValue({
    chooseValue,
    setChooseValue,
    data,
    icon,
    placeholder,
}: SearchValueTypes) {
    const [query, setQuery] = useState('')

    const filterData = data.filter((value) => {
        return value
            .toLowerCase()
            .replace(/\s+/gi, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
    })

    return (
        <div className="h-[45px] w-full">
            <Combobox value={chooseValue} onChange={setChooseValue}>
                <div className="flex h-full bg-primary-blue-100">
                    <div className="h-full flex justify-center items-center px-2">
                        <Image
                            src={icon}
                            alt=""
                            width={24}
                            height={24}
                            className="h-5 w-5"
                        />
                    </div>
                    <Combobox.Input
                        displayValue={(query: string) => query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                        className="outline-none bg-transparent flex-1 z-10"
                        autoComplete='off'
                        placeholder={placeholder}
                    />
                </div>

                <div className="h-fit bg-white z-10 max-h-[300px] overflow-auto">
                    <Transition
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Combobox.Options>
                            {filterData.map((value, index) => {
                                return (
                                    <Combobox.Option
                                        key={index}
                                        value={value}
                                        as={Fragment}
                                    >
                                        {({ selected, active }) => {
                                            return (
                                                <div
                                                    className={`w-full flex ${
                                                        active
                                                            ? 'bg-primary-blue text-white'
                                                            : 'bg-white text-black-100'
                                                    }`}
                                                >
                                                    <div className="w-12 h-full flex justify-center items-center">
                                                        {selected && (
                                                            <CheckIcon className="h-6 w-6" />
                                                        )}
                                                    </div>

                                                    <div className="">
                                                        <span>
                                                            {value}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        }}
                                    </Combobox.Option>
                                )
                            })}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchValue
