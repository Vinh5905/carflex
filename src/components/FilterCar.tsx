'use client'
import { SearchValue, CustomButton, CustomFilter } from '.'
import React, { MouseEvent, useState } from 'react'
import {
    manufacturers,
    models,
    yearsOfProduction,
    fuels,
} from '@/app/constants'
import { useRouter } from 'next/navigation'

function FilterCar() {
    const [manuFacturer, setManuFacturer] = useState('')
    const [modal, setModal] = useState('')
    const [fuelType, setFuelType] = useState('')
    const [yearOfManufacture, setYearOfManufacture] = useState('')
    const router = useRouter()

    const customFilter = [
        {
            data: fuels,
            value: fuelType,
            setValue: setFuelType,
        },
        {
            data: yearsOfProduction,
            value: yearOfManufacture,
            setValue: setYearOfManufacture,
        },
    ]

    const redirectURL = ({
        manufacturer,
        model,
        year,
        fuel,
    }: {
        manufacturer: string
        model: string
        year: number | string
        fuel: string
    }) => {
        let url = new URL(`${window.location}`)

        const params = url.searchParams

        const setUrl = (name: string, value: string | number) => {
            if (value) {
                params.set(
                    name,
                    typeof value === 'string' ? value : value.toString()
                )
            } else {
                params.delete(name)
            }
        }

        setUrl('manufacturer', manufacturer)
        setUrl('model', model)
        setUrl('year', year)
        setUrl('fuel', fuel)

        router.push(url.href, {scroll: true})
    }

    const handleSearch = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        redirectURL({
            manufacturer: manuFacturer.toLowerCase(),
            model: modal.toLowerCase(),
            year: yearOfManufacture,
            fuel: fuelType.toLowerCase(),
        })
    }

    return (
        <form className="flex flex-col my-12 gap-5">
            <div className="w-full flex items-center justify-between gap-5 flex-1">
                <div className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl">
                    <div className="flex-1">
                        <SearchValue
                            chooseValue={manuFacturer}
                            setChooseValue={setManuFacturer}
                            data={manufacturers}
                            icon="/car-logo.svg"
                            placeholder="Choose a manufacturer?"
                        />
                    </div>
                    <div className="flex-1">
                        <SearchValue
                            chooseValue={modal}
                            setChooseValue={setModal}
                            data={models}
                            icon="/model-icon.png"
                            placeholder="Choose a manufacturer?"
                        />
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                    {customFilter.map((filter, index) => {
                        return (
                            <CustomFilter
                                key={index}
                                data={filter.data}
                                selectedValue={filter.value}
                                setSelectedValue={filter.setValue}
                            />
                        )
                    })}
                </div>
            </div>

            <div className="self-end">
                <CustomButton
                    onClick={handleSearch}
                    btnType="submit"
                    title="Tìm kiếm"
                    className="bg-primary-blue text-white uppercase font-semibold"
                />
            </div>
        </form>
    )
}

export default FilterCar