import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from "next/router";
import pl from "../locales/pl";
import en from "../locales/en";
import testimonials from "../assets/testimonials.svg"


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

                <div className={"flex w-full justify-center items-center p-12 gap-x-6"}>
                    <div className={"h-full relative w-full rounded-lg bg-white p-12 flex justify-center items-center"}>
                        <Image src={testimonials} width={400} height={400} alt={""}/>

                    </div>


                    <div className={"h-full w-full "}>


                    </div>

                </div>
            </main>
        </>

    )
}

export default Referencje