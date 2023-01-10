import Head from 'next/head'
import {useRouter} from 'next/router';
import Image from "next/image";

import pl from "../locales/pl";
import en from "../locales/en";
import TypingMainPage from "../components/TypingAnimations/TypingMainPage";
import dots from '../assets/hero-and-ornaments/dots-lot.png'
import dotsSmall from '../assets/hero-and-ornaments/dots-small.png'
import circle from '../assets/hero-and-ornaments/hero-circle.png'
import { TiArrowLeftOutline } from "react-icons/ti";
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
                <div className={"grid grid-cols-1 md:grid-cols-2 w-full h-full lg:py-10 place-items-center"}>
                    <div className={"place-items-center grid grid-cols-1 relative pb-2"}>
                        <h1 className={"text-gray-600 font-semibold dark:text-white text-4xl pb-4 w-full "}>{t.MainTitle}</h1>
                        <TypingMainPage/>

                        <p className="my-4 text-md text-gray-600 font-semibold dark:text-white xl:w-3/4 text-center md:text-left">
                            {t.MainIntroText}
                        </p>

                        <h2 className={"pt-6 dark:text-white w-full text-center "}>{t.MainServicesIntro}</h2>
                        <p className="my-2 text-md text-gray-600 font-semibold dark:text-white xl:w-3/4 text-center md:text-left">{t.MainServicesIntroDescriptionPartOne}</p>
                        <p className="my-2 text-md text-gray-600 font-semibold dark:text-white xl:w-3/4 text-center md:text-left">{t.MainServicesIntroDescriptionPartTwo}</p>
                        <p className="my-2 text-md text-gray-600 font-semibold dark:text-white xl:w-3/4 text-center md:text-left">{t.MainServicesIntroDescriptionPartThree}</p>
                    </div>

                    <div
                        className={"sm:py-5 md:py-0 grid grid-cols-1 xl:grid-cols-2 place-items-center gap-5 lg:bg-gray-800 lg:rounded-[100%] h-full lg:shadow-2xl gap-x-3 lg:bg-gray-700 lg:relative"}>

                        <div
                            className={"bg-white rounded-lg md:w-3/4 xl:w-full max-h-full grid grid-cols-1 place-items-center p-5 xl:relative xl:top-[50%] xl:left-[40%] xl:translate-x-[-50%] shadow-2xl lg:hover:scale-110 duration-300 dark:text-gray-800 text-center"}>
                            <h2 className={"text-lg lg:text-3xl"}>{t.MainServicesWheelSecond}</h2>
                            <p className={"text-base"}>{t.MainServicesWheelSecondDescription}</p>

                        </div>
                        <div
                            className={"bg-white rounded-lg md:w-3/4 xl:w-full  max-h-full  grid grid-cols-1 place-items-center p-5 xl:relative lg:top-[0%] lg:right-[-50%] xl:translate-x-[-50%] shadow-2xl lg:hover:scale-110 duration-300 dark:text-gray-800 text-center"}>
                            <h2 className={"text-xl lg:text-3xl"}>{t.MainServicesWheelFirst}</h2>
                            <p className={"text-base"}>{t.MainServicesWheelFirstDescription}</p>

                        </div>
                        <div
                            className={"bg-white rounded-lg md:w-3/4 xl:w-full max-h-full  grid grid-cols-1 place-items-center p-5 xl:col-end-3 p-5 shadow-2xl lg:hover:scale-110 duration-300 dark:text-gray-800 text-center"}>
                            <h2 className={"text-xl lg:text-3xl"}>{t.MainServicesWheelThird}</h2>
                            <p className={"text-base"}>{t.MainServicesWheelThirdDescription}</p>
                        </div>
                    </div>
                </div>


                <div className={"hidden absolute bottom-[0%] right-[30%] translate-x-[-50%] xl:block"}>
                    <Image src={circle} width={150} height={150} alt={""} className={"rotate-circle-mainPage"}></Image>
                </div>
            </main>

            <div className={"w-full grid grid-cols-1 place-items-center px-5"}>
                <h2 className={"p-4 dark:text-white"}>{t.MainOurServices}</h2>
                <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-6 xl:w-3/4"}>
                    <div className={"bg-white rounded-2xl dark:text-gray-800 shadow-2xl p-3 text-center relative w-full group"}>
                        <h3 className={"text-lg font-semibold text-gray-600 w-full text-center w-full  underline decoration-[#ffa500] decoration-2"}>{t.MainServicesFirst}</h3>
                        <p>{t.MainServicesFirstDesc}</p>
                        <div className={"opacity-0 absolute top-0 left-0 bg-[#ffa500] w-full z-100 h-full rounded rounded-2xl lg:group-hover:opacity-100 duration-300 grid grid-cols-1 place-items-center cursor-pointer"}>
                            <TiArrowLeftOutline className={"rotate-[125deg] fill-white text-6xl"}></TiArrowLeftOutline>
                    </div>
                    </div>
                    <div className={"bg-white rounded-2xl dark:text-gray-800 shadow-2xl p-3 text-center relative w-full group"}>
                        <h3 className={"text-lg font-semibold text-gray-600 w-full text-center w-full underline decoration-[#3871c1] decoration-2"}>{t.MainServicesSecond}</h3>
                        <p>{t.MainServicesSecondDesc}</p>
                        <div className={"opacity-0 absolute top-0 left-0 bg-[#ffa500] w-full z-100 h-full rounded rounded-2xl lg:group-hover:opacity-100 duration-300 grid grid-cols-1 place-items-center cursor-pointer "}>

                            <TiArrowLeftOutline className={"rotate-[125deg] fill-white text-6xl"}></TiArrowLeftOutline>
                        </div>
                    </div>
                    <div className={"bg-white rounded-2xl dark:text-gray-800 shadow-2xl p-3 text-center relative w-full group"}>
                        <h3 className={"text-lg font-semibold text-gray-600 w-full text-center w-full underline decoration-gay-800 decoration-2"}>{t.MainServicesThird}</h3>
                        <p>{t.MainServicesThirdDesc}</p>
                        <div className={"opacity-0 absolute top-0 left-0 bg-[#ffa500] w-full z-100 h-full rounded rounded-2xl lg:group-hover:opacity-100 duration-300 grid grid-cols-1 place-items-center  cursor-pointer"}>
                            <TiArrowLeftOutline className={"rotate-[125deg] fill-white text-6xl"}></TiArrowLeftOutline>
                        </div>
                    </div>
                    <div className={"bg-white rounded-2xl dark:text-gray-800 shadow-2xl p-3 text-center relative w-full group"}>
                        <h3 className={"text-lg font-semibold text-gray-600 w-full text-center w-full underline decoration-gay-800 decoration-2"}>{t.MainServicesForth}</h3>
                        <p>{t.MainServicesForthDesc}</p>
                        <div className={"opacity-0 absolute top-0 left-0 bg-[#ffa500] w-full z-100 h-full rounded rounded-2xl lg:group-hover:opacity-100 duration-300 grid grid-cols-1 place-items-center cursor-pointer "}>
                            <TiArrowLeftOutline className={"rotate-[125deg] fill-white text-6xl"}></TiArrowLeftOutline>
                        </div>
                    </div>

                    <div className={"bg-white rounded-2xl dark:text-gray-800 shadow-2xl p-3 text-center relative w-full group"}>
                        <h3 className={"text-lg font-semibold text-gray-600 w-full text-center w-full underline decoration-[#3871c1] decoration-2"}>{t.MainServicesFifth}</h3>
                        <p>{t.MainServicesFifthDesc}</p>
                        <div className={"opacity-0 absolute top-0 left-0 bg-[#ffa500] w-full z-100 h-full rounded rounded-2xl lg:group-hover:opacity-100 duration-300 grid grid-cols-1 place-items-center  cursor-pointer"}>
                            <TiArrowLeftOutline className={"rotate-[125deg] fill-white text-6xl"}></TiArrowLeftOutline>
                        </div>
                    </div>
                    <div className={"bg-white rounded-2xl dark:text-gray-800 shadow-2xl p-3 text-center relative w-full group"}>
                        <h3 className={"text-lg font-semibold text-gray-600 w-full text-center w-full  underline decoration-[#ffa500] decoration-2"}>{t.MainServicesSixth}</h3>
                        <p>{t.MainServicesSixthDesc}</p>
                        <div className={"opacity-0 absolute top-0 left-0 bg-[#ffa500] w-full z-100 h-full rounded rounded-2xl lg:group-hover:opacity-100 duration-300 grid grid-cols-1 place-items-center cursor-pointer "}>
                            <TiArrowLeftOutline className={"rotate-[125deg] fill-white text-6xl"}></TiArrowLeftOutline>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default Home