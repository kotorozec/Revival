import Head from "next/head";
import {useRouter} from "next/router";
import pl from "../locales/pl";
import en from "../locales/en";
import GalleryBlurImg from "../components/Gallery/GalleryBlurImg";
import {createClient} from "@supabase/supabase-js";
import {useState} from "react";


export async function getStaticProps () {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
    )
    const {data} = await supabaseAdmin.
    from('revivalImages')
        .select("*")
        .order("id")

    return {
        props: {
            revivalImages:data,
        }
    }
}


const Galeria = ({ revivalImages}) => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const t = locale === 'pl' ? pl : en;
    const [imgNum, setImgNum] = useState(8);
    const handleLoadMore = () => {
        setImgNum(prevPostNum => prevPostNum + 4)
    }
    return (<>
            <Head>
                <title>{t.GalleryPageTitle}</title>
                <meta name="description"
                      content={t.GalleryMetaDescription}/>
            </Head>

            <main className={"container max-w-screen-2xl mx-auto px-5"}>
                <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                    <h1 className={"dark:text-white"}>{t.GalleryTitlePart1}<span
                        className={"text-[#ffa500]"}>{t.GalleryTitlePart2}</span></h1>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                    <p className="mt-4 text-center text-md text-gray-600 font-semibold dark:text-white max-w-2xl">{t.GalleryIntroText}
                    </p>
                </div>
                <div
                    className={"grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10 py-8"}>
                    {revivalImages.slice(0, imgNum).map((image) => (
                        <GalleryBlurImg key={image.id} image={image}/>
                    ))}

                </div>
                <div className={"max-w-8xl flex justify-center py-4"}>
                    <button onClick={handleLoadMore} aria-label={"Zobacz więcej"}
                            className={"bg-[#ffa500] px-4 py-2 rounded-lg text-white shadow-xl hover:scale-90 duration-300"}>{t.BlogLoadMore}</button>
                </div>
            </main>

        </>

    )
}

export default Galeria