import {useRouter} from 'next/router'
import {useEffect} from "react";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Head from "next/head";

const PageNotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/blog')
        }, 4000)
    }, [])
    return (
        <>
            <Head>
                <title>Revival - Posta nie znaleziono</title>
                <meta name="description" content="Ups! Wygląda na to, że artykuł o podanym adresie nie istnieje" />
            </Head>
            <div className={"h-1/3"}>
                <ErrorPage/>
            </div>
        </>
    )
}

export default PageNotFound