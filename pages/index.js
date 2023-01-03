import Head from 'next/head'
import {useRouter} from 'next/router';
import pl from "../locales/pl";
import en from "../locales/en";
import revivalIntro from "../locales/revivalIntro";
import TypingMainPage from "../components/TypingAnimations/TypingMainPage";
import Image from "next/image";
import mainPageOrnament from "../assets/undraw_engineering_team_a7n2.svg"

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
            <main className={"container max-w-screen-2xl mx-auto px-5"}>

                <div className="sm:mx-auto sm:w-full sm:max-w-ful"
                     aria-label={locale === 'pl' && revivalIntro[0].introPl || locale !== 'pl' && revivalIntro[0].intro}>
                    <h1 className={"text-center pb-10 tracking-tight  md:text-5xl font-bold text-gray-600 dark:text-white"}>
                        {locale === 'pl' && revivalIntro[0].introPl || locale !== 'pl' && revivalIntro[0].intro}
                    </h1>
                    <div className={"flex justify-center pb-6"}>
                        <Image src={mainPageOrnament} height={864} width={443} alt={"Revival"}></Image>
                    </div>
                    <TypingMainPage/>

                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-2xl pb-5">
                    <p className="my-4 text-center text-md text-gray-600 font-semibold dark:text-white max-w-2xl">
                        {t.MainIntroText}
                    </p>
                </div>

            </main>

        </>

    )
}
