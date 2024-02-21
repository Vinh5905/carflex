import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export interface CustomButtonProps {
    btnType?: 'button' | 'submit'
    title: string
    disabled?: boolean
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    rightIcon?: string
    leftIcon?: string
    display?: boolean
}

export interface SearchValueTypes {
    chooseValue?: string
    setChooseValue?: Dispatch<SetStateAction<string>>
    data: string[]
    icon: string
    inputClassName?: string
    placeholder?: string
}

export interface CarTypes {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface CarDetailsTypes {
    isOpen: boolean
    closeModal: () => void
    car: CarTypes
}

export interface fetchCarsTypes {
    manufacturer?: string
    model?: string
    year?: number
    fuel?: string
    limit?: number
    pageNumber?: number
}

export interface CustomFilterTypes {
    title: string,
    value: string
}

export interface CustomFilterProps {
    data: CustomFilterTypes[]
    selectedValue: string,
    setSelectedValue: Dispatch<SetStateAction<string>>
}

export interface ShowMoreProps {
    display?: boolean
    pageNumber: number
}