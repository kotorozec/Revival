import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from "next/router";
import pl from "../locales/pl";
import en from "../locales/en";
import testimonials from "../locales/testimonials";

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

                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
                    {testimonials.map(el => {
                        return (
                            <div className={"bg-gray-500"}>
                                <div className={"flex justify-between items-center"}>
                                    <div className={"rounded-full"}>
                                        {el.avatar}
                                    </div>
                                    <div>
                                        {el.name}
                                    </div>

                                </div>
                                <p key={el.id}>{el.testimonialsPl}</p>
                            </div>
                        )
                    })}

                </div>
            </main>
        </>

    )
}

export default Referencje