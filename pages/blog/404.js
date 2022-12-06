import Link from "next/link";
import {useRouter} from 'next/router'
import {useEffect} from "react";

const PageNotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/blog')
        }, 3000)
    }, [])
    return (
        <div>
            Wygląda na to, że dany artykul nie został znaleziony.
        </div>
    )
}

export default PageNotFound