import Head from 'next/head'
import {useRouter} from 'next/router';
import pl from "../locales/pl";
import en from "../locales/en";
import TypingMainPage from "../components/TypingAnimations/TypingMainPage";
import Image from "next/image";
import dots from '../assets/hero-and-ornaments/dots-lot.png'
import dotsSmall from '../assets/hero-and-ornaments/dots-small.png'
import circle from '../assets/hero-and-ornaments/hero-circle.png'

const Home = () => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const t = locale === 'pl' ? pl : en;
    return (
        <>
            <Head>
                <title>{t.MainPageTitle}</title>
                <meta name="description"
                      content={t.MainMetaDescription}/>
            </Head>
            <main
                className={"container max-w-screen-2xl mx-auto px-5 h-fit flex justify-center items-center relative"}>
                <div className={"hidden absolute top-0 left-10 xl:block"}>
                    <Image src={dots} width={67} height={67} alt={""} className={"rotate-dots-upper"}></Image>
                </div>

                <div className={"hidden absolute -bottom-4 md:bottom-0 left-10 xl:block"}>
                    <Image src={dotsSmall} width={50} height={50} alt={""} className={"rotate-dots-bottom"}></Image>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 w-full h-full py-10 place-items-center p-5 "}>
                    <div className={"place-items-center grid grid-cols-1 relative"}>
                        <h1 className={"text-gray-600 font-semibold dark:text-white text-4xl pb-4 w-full"}>{t.MainTitle}</h1>
                        <TypingMainPage/>

                        <p className="my-4 text-md text-gray-600 font-semibold dark:text-white xl:w-3/4">
                            {t.MainIntroText}
                        </p>

                        <h2 className={"pb-6 dark:text-white w-full xl:text-center "}>{t.MainServicesIntro}</h2>
                        <div className={"w-full grid grid-cols-1  place-items-center"}>
                            <div className={"grid grid-cols-2 md:grid-cols-2 gap-5 pb-6 w-3/4"}>
                                <div
                                    className={"bg-white rounded-full p-3 flex items-center justify-evenly gap-1 dark:text-gray-800  shadow-xl "}>
                                    <div
                                        className="min-h-[0.8rem] min-w-[0.8rem] bg-[#ffa500] rounded-full before:content-[''] mr-2"></div>
                                    <h3 className={"text-base w-full"}>{t.MainServicesFirst}</h3>
                                </div>
                                <div
                                    className={"bg-white rounded-full p-3 flex items-center justify-evenly gap-1 dark:text-gray-800 shadow-xl "}>
                                    <div
                                        className="min-h-[0.8rem] min-w-[0.8rem] bg-gray-800 rounded-full before:content-[''] mr-2"></div>
                                    <h3 className={"text-base w-full"}>{t.MainServicesSecond}</h3>
                                </div>
                                <div
                                    className={"bg-white rounded-full p-3 flex items-center justify-evenly gap-1 dark:text-gray-800 shadow-xl "}>
                                    <div
                                        className="min-h-[0.8rem] min-w-[0.8rem] bg-[#ffa500] rounded-full before:content-[''] mr-2"></div>
                                    <h3 className={"text-base w-full"}>{t.MainServicesThird}</h3>
                                </div>
                                <div
                                    className={"bg-white rounded-full py-3 flex items-center justify-evenly gap-1 dark:text-gray-800 shadow-xl "}>
                                    <div
                                        className="min-h-[0.8rem] min-w-[0.8rem] bg-gray-800 rounded-full before:content-[''] mr-2"></div>
                                    <h3 className={"text-base w-3/4"}>{t.MainServicesForth}</h3>
                                </div>

                                <div
                                    className={"bg-white rounded-full p-3 flex items-center justify-evenly gap-1 dark:text-gray-800  shadow-xl "}>
                                    <div
                                        className="min-h-[0.8rem] min-w-[0.8rem] bg-[#ffa500] rounded-full before:content-[''] mr-2"></div>
                                    <h3 className={"text-base w-full"}>{t.MainServicesFifth}</h3>
                                </div>
                                <div
                                    className={"bg-white rounded-full p-3 flex items-center justify-evenly gap-1 dark:text-gray-800  shadow-xl "}>
                                    <div
                                        className="min-h-[0.8rem] min-w-[0.8rem] bg-gray-800 rounded-full before:content-[''] mr-2"></div>
                                    <h3 className={"text-base w-full"}>{t.MainServicesSixth}</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div
                        className={"sm:py-5 md:py-0 grid grid-cols-1 xl:grid-cols-2 place-items-center gap-5 lg:bg-gray-800 lg:rounded-[100%] lg:aspect-square lg:shadow-2xl gap-x-3 lg:bg-gray-700 lg:relative"}>

                        <div
                            className={"bg-white rounded-lg md:w-3/4 xl:w-full max-h-full grid grid-cols-1 place-items-center p-5 xl:relative xl:top-[50%] xl:left-[40%] xl:translate-x-[-50%] shadow-2xl hover:scale-110 duration-300 dark:text-gray-800 text-center"}>
                            <h2 className={"text-lg lg:text-3xl"}>{t.MainServicesWheelSecond}</h2>
                            <p className={"text-sm xl:text-base"}>{t.MainServicesWheelSecondDescription}</p>

                        </div>
                        <div
                            className={"bg-white rounded-lg md:w-3/4 xl:w-full  max-h-full  grid grid-cols-1 place-items-center p-5 xl:relative lg:top-[0%] lg:right-[-50%] xl:translate-x-[-50%] shadow-2xl hover:scale-110 duration-300 dark:text-gray-800 text-center"}>
                            <h2 className={"text-xl lg:text-3xl"}>{t.MainServicesWheelFirst}</h2>
                            <p className={"text-sm xl:text-base"}>{t.MainServicesWheelFirstDescription}</p>

                        </div>
                        <div
                            className={"bg-white rounded-lg md:w-3/4 xl:w-full max-h-full  grid grid-cols-1 place-items-center p-5 xl:col-end-3 p-5 shadow-2xl hover:scale-110 duration-300 dark:text-gray-800 text-center"}>
                            <h2 className={"text-xl lg:text-3xl"}>{t.MainServicesWheelThird}</h2>
                            <p className={"text-sm xl:text-base"}>{t.MainServicesWheelThirdDescription}</p>
                        </div>
                    </div>
                </div>


                <div className={"hidden absolute bottom-[0%] right-[30%] translate-x-[-50%] xl:block"}>
                    <Image src={circle} width={150} height={150} alt={""} className={"rotate-circle-mainPage"}></Image>
                </div>
            </main>
        </>

    )
}


export default Home