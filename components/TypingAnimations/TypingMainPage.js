import {useRouter} from 'next/router';
import revivalIntro from "../../locales/revivalIntro";
import useTypeHighlight from "./useTypeHighlight";

const TypingMainPage = () => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const highlight = useTypeHighlight()
    return (
        <>
            <h1 className={"flex flex-col lg:block items-center text-center py-6 tracking-tight  md:text-5xl font-bold"}>
                <span className={"text-gray-600 dark:text-white block "}>{locale === 'pl' && revivalIntro[0].introPl || locale !== 'pl' && revivalIntro[0].intro}</span>
                <span className={"text-[#ffa500] blinking-cursor"}>{highlight}</span>
            </h1>
        </>
    )
}

export default TypingMainPage