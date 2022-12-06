import {useRouter} from 'next/router'
import {useEffect} from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const PageNotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])
    return (
        <div className={""}>
            <ErrorPage/>
        </div>
    )
}

export default PageNotFound