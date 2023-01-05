import Head from 'next/head'
import {useRouter} from 'next/router';
import pl from "../locales/pl";
import en from "../locales/en";
import revivalIntro from "../locales/revivalIntro";
import TypingMainPage from "../components/TypingAnimations/TypingMainPage";
import Image from "next/image";
import dots from '../assets/hero-and-ornaments/dots-lot.png'
import dotsSmall from '../assets/hero-and-ornaments/dots-small.png'
import circle from '../assets/hero-and-ornaments/hero-circle.png'

export default function Home() {
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
            <main className={"container max-w-screen-2xl mx-auto px-5  min-h-[80vh] flex justify-center items-center"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 w-full h-full py-10 place-items-center"}>
                    <div className={"place-items-center grid grid-cols-1 relative"}>
                        <h1 className={"text-gray-600 font-semibold dark:text-white text-5xl text-left "}>{t.MainTitle}</h1>
                        <TypingMainPage/>

                        <p className="my-4 text-left  text-md text-gray-600 font-semibold dark:text-white w-3/4">
                            {t.MainIntroText}
                        </p>


                        <div className={"py-5"}>
                            <h2 className={"text-left pb-10"}> Czym się zajmujemy?</h2>
                            <div className={"grid grid-cols-5 gap-5"}>
                                <div className={"bg-white rounded-full px-3 flex items-center justify-evenly relative gap-2 flex-1"}>
                                    <div className="w-3 h-3 bg-rose-700 rounded-full before:content-['']"></div>
                                    <p>Usługa 1</p>
                                </div>
                                <div className={"bg-white rounded-full px-3 flex items-center justify-evenly relative gap-2"}>
                                    <div className="w-3 h-3 bg-rose-700 rounded-full before:content-['']"></div>
                                    <p>Usługa 1</p>
                                </div>
                                <div className={"bg-white rounded-full px-3 flex items-center justify-evenly relative gap-2"}>
                                    <div className="w-3 h-3 bg-rose-700 rounded-full before:content-['']"></div>
                                    <p>Usługa 1</p>
                                </div>
                                <div className={"bg-white rounded-full px-3 flex items-center justify-evenly relative gap-2"}>
                                    <div className="w-3 h-3 bg-rose-700 rounded-full before:content-['']"></div>
                                    <p>Usługa 1</p>
                                </div>

                                <div className={"bg-white rounded-full px-3 flex items-center justify-evenly relative gap-2"}>
                                    <div className="w-3 h-3 bg-rose-700 rounded-full before:content-['']"></div>
                                    <p>Usługa 1</p>
                                </div>
                                <div className={"bg-white rounded-full px-3 flex items-center justify-evenly relative gap-2"}>
                                    <div className="w-3 h-3 bg-rose-700 rounded-full before:content-['']"></div>
                                    <p>Usługa 1</p>
                                </div>
                                <div className={"bg-white rounded-full px-3 flex items-center justify-evenly relative gap-2"}>
                                    <div className="w-3 h-3 bg-rose-700 rounded-full before:content-['']"></div>
                                    <p>Usługa 1</p>
                                </div>
                                <div className={"bg-white rounded-full px-3 flex items-center justify-evenly relative gap-2"}>
                                    <div className="w-3 h-3 bg-rose-700 rounded-full before:content-['']"></div>
                                    <p>Usługa 1</p>
                                </div>
                            </div>
                        </div>


                        <div className={"absolute top-0 left-0"}>
                            <Image src={dots} width={67} height={67} alt={""}></Image>
                        </div>

                        <div className={"absolute bottom-[-20%] left-0"}>
                            <Image src={dotsSmall} width={40} height={40} alt={""}></Image>
                        </div>
                    </div>

                    <div
                        className={"sm:py-5 md:py-0 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 lg:bg-gray-800 lg:rounded-[100%] lg:aspect-square lg:shadow-2xl gap-x-10 lg:dark:bg-white relative"}>

                        <div className={"absolute bottom-[0%] left-20"}>
                            <Image src={circle} width={150} height={150} alt={""}></Image>
                        </div>
                        <div
                            className={"bg-white rounded-lg w-3/4 lg:w-full max-h-full grid grid-cols-1 place-items-center p-5 md:relative md:top-[50%] md:left-[40%] md:translate-x-[-50%] shadow-2xl lg:hover:scale-110 duration-300"}>
                            <h2>Zaufanie</h2>
                            <p>Pracujemy tak, by nasi klienci mieli do nas absolutne zaufanie. Podchodzimy do naszych
                                obowiązków sumiennie i z pełną odpowiedzialnością.</p>

                        </div>
                        <div
                            className={"bg-white rounded-lg w-3/4 md:w-full  max-h-full  grid grid-cols-1 place-items-center p-5 md:relative md:top-[0%] md:right-[-50%] md:translate-x-[-50%] shadow-2xl lg:hover:scale-110 duration-300"}>
                            <h2>Skuteczność</h2>
                            <p>Gwarancję likwidacji niebezpiecznych substancji oraz zneutralizowanie przykrych zapachów
                                zapewnia zapis w umowie, który zobowiązuje nas do pełnej i skutecznej usługi, a w razie
                                niepowodzenia zwrotu kosztów.</p>

                        </div>
                        <div
                            className={"bg-white rounded-lg w-3/4 md:w-full max-h-full  grid grid-cols-1 place-items-center p-5 md:col-end-3 p-5 shadow-2xl lg:hover:scale-110 duration-300"}>
                            <h2>Profesjonalizm</h2>
                            <p>Jesteśmy firmą profesjonalną i podejmujemy się nawet najtrudniejszych zadań. Zachęcamy do
                                zapoznania się ze szczegółami szerokiej oferty sprzątania, dezynfekcji i
                                dezynsekcji.</p>
                        </div>
                    </div>
                </div>

            </main>
        </>

    )
}
