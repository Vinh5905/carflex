'use client'
import { CustomFilterProps } from '@/types'
import { Listbox } from '@headlessui/react'
import Image from 'next/image'

function CustomFilter({
    data,
    selectedValue,
    setSelectedValue,
}: CustomFilterProps) {
    return (
        <Listbox value={selectedValue} onChange={setSelectedValue}>
            <div className='relative inline-block'>
                <Listbox.Button
                    className={`flex flex-row relative justify-between items-center pl-3 pr-1 py-1.5  min-w-[140px] outline-none drop-shadow-md bg-white border border-black/5 rounded-lg`}
                >
                    {selectedValue || data[0].title}
                    <div className="relative w-6 h-6">
                        <Image
                            src="/updown-arrow.svg"
                            alt="right icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {data.map((option, index) => {
                        return (
                            <Listbox.Option key={index} value={option.value} className='px-4 py-2'>
                                {option.title}
                            </Listbox.Option>
                        )
                    })}
                </Listbox.Options>
            </div>
        </Listbox>
    )
}

export default CustomFilter
