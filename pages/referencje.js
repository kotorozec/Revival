import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from "next/router";
import pl from "../locales/pl";
import en from "../locales/en";

const Referencje = () => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const t = locale === 'pl' ? pl : en;
    return (<>
            <Head>
                <title>{t.TestimonialsPageTitle}</title>
                <meta name="description"
                      content={t.TestimonialsMetaDescription}/>
            </Head>

            <main className={"container max-w-screen-2xl mx-auto px-5"}>
                <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                    <h1 className={"dark:text-white"}>{t.TestimonialsTitlePart1}<span
                        className={"text-[#ffa500]"}>{t.TestimonialsTitlePart2}</span></h1>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                    <p className="mt-4 text-center text-md text-gray-600 font-semibold dark:text-white max-w-2xl">{t.TestimonialsIntroText}
                    </p>
                </div>

                <div className={"flex flex-col-reverse md:flex-row w-full justify-evenly items-center"}>

                </div>
            </main>
        </>

    )
}

export default Referencje