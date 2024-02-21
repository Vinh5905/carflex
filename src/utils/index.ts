import { CarTypes, fetchCarsTypes } from '@/types'

export async function fetchCars({
    manufacturer,
    model,
    year,
    fuel,
    limit,
}: fetchCarsTypes) {
    try {
        // throw new Error("Don't need to call API yet!!")
        const headers = {
            'X-RapidAPI-Key':
                '7e39403896msh9f1bd06a391c0d6p121607jsn96d5a8a2f1d9',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
        }

        const response = await fetch(
            `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel=${fuel}`,
            {
                headers: headers,
                cache: 'force-cache',
            }
        )

        const result = await response.json()
        console.log('IS IT RUN?')
        return result
    } catch (err) {
        console.log(err)
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50 // Base rental price per day in dollars
    const mileageFactor = 0.1 // Additional rate per mile driven
    const ageFactor = 0.05 // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

    return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarTypes, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')
    const { make, model, year } = car

    // url.searchParams.append(
    //     'customer',
    //     process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
    // )
    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`)

    return `${url}`
}
