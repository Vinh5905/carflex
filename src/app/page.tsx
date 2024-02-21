import { HeroSection, FilterCar, MainHome } from '@/components'
import { fetchCars } from '@/utils'
import { fetchCarsTypes } from '@/types';
export default async function Home({searchParams}: {searchParams: fetchCarsTypes}) {

    return (
        <main className="">
            <div>
                <HeroSection />
                <div className="my-20 container px-6 mx-auto">
                    <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
                        <p className="text-4xl font-extrabold">Car Catalogue</p>
                        <p>Explore the cars you might like</p>
                    </div>

                    <FilterCar/>

                    <MainHome searchParams={searchParams}/>
                </div>
            </div>
        </main>
    )
}
