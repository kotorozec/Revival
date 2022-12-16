import Prices from "/components/Prices";
import Head from 'next/head'
import {useRouter} from "next/router";
import pl from "../locales/pl";
import en from "../locales/en";

const Cennik = () => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const t = locale === 'pl' ? pl : en;
    return (
        <>
            <Head>
                <title>{t.PricePageTitle}</title>
                <meta name="description"
                      content={t.PriceMetaDescription}/>
            </Head>
            <main className={"container max-w-screen-2xl mx-auto px-5"}>
                <div className="sm:mx-auto sm:w-full sm:max-w-xl">
                    <h1 className={"dark:text-white"}>{t.PriceTitlePart1}<span
                        className={"text-[#ffa500]"}>{t.PriceTitlePart2}</span></h1>
                    <p className="mt-2 text-center text-sm text-gray-600 font-semibold">{t.PriceIntroText}
                    </p>
                </div>
                <Prices/>

            </main>
        </>

    )
}

export default Cennik