'use client'
import { CustomButton } from "."
import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"

function ShowMore({display, pageNumber: page}: ShowMoreProps) {
    const router = useRouter()

    const redirectURL = ({
        pageNumber,
        limit,
    }: {
        pageNumber: number
        limit: number,
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

        setUrl('pageNumber', pageNumber)
        setUrl('limit', limit)

        router.push(url.href, {scroll: true})
    }

    const handleShowMore = () => {
        redirectURL({
            pageNumber: page + 1,
            limit: (page + 1) * 12,
        })
    }

    return (
        <CustomButton title='Show more' display={display} className='text-white bg-primary-blue rounded-full' onClick={handleShowMore}/>
    )
}

export default ShowMore