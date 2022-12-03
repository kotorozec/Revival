import '../styles/main.scss'
import Layout from "../components/Layout";
import {useState} from "react";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
