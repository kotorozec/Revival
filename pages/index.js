import Head from 'next/head'
import {useRouter} from 'next/router';
import pl from "../locales/pl";
import en from "../locales/en";
import revivalIntro from "../locales/revivalIntro";
import TypingMainPage from "../components/TypingAnimations/TypingMainPage";

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
                <div className={"flex flex-wrap justify-evenly items-center"}>
                    <div className={"sm:w-full md:w-1/2 flex justify-center items-center md:min-h-[60vh]"} aria-label={locale === 'pl' && revivalIntro[0].introPl || locale !== 'pl' && revivalIntro[0].intro}>
                        <TypingMainPage/>
                    </div>


                    <div className={"md:w-1/2"}>

                    </div>

                </div>
            </main>

        </>

    )
}
