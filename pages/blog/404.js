import Link from "next/link";
import {useRouter} from 'next/router'
import {useEffect} from "react";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

const PageNotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/blog')
        }, 113000)
    }, [])
    return (
        <div className={"h-1/3"}>
            <ErrorPage/>
        </div>
    )
}

export default PageNotFound