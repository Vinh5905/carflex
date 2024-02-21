'use client'
import { fetchCarsTypes, CarTypes } from '@/types'
import { CarCard, ShowMore } from '.'
import { useEffect, useState } from 'react'
import { fetchCars } from '@/utils'

function MainHome({ searchParams }: { searchParams: fetchCarsTypes }) {
    const [data, setData] = useState<CarTypes[] | undefined>()

    useEffect(() => {
        const fetchApi = async () => {
            const allCars: CarTypes[] | undefined = await fetchCars({
                manufacturer: searchParams.manufacturer || '',
                year: searchParams.year || 2022,
                fuel: searchParams.fuel || '',
                limit: searchParams.limit || 12,
                model: searchParams.model || '',
            })

            if (allCars && Array.isArray(allCars) && allCars.length > 0) {
                setData(allCars)
            }
        }

        fetchApi()
    }, [searchParams])

    return (
        <>
            {!!data ? (
                <>
                    <div className="grid grid-cols-[repeat(4,minmax(200px,1fr))] gap-5">
                        {data.map((car, index) => {
                            return <CarCard key={index} car={car} />
                        })}
                    </div>

                    <div className="w-full flex justify-center pt-10">
                        <ShowMore
                            display={(searchParams.limit || 12) <= data.length}
                            pageNumber={searchParams.pageNumber || 1}
                        />
                    </div>
                </>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default MainHome
