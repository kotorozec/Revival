import {useRouter} from 'next/router';
import revivalIntro from "../../locales/revivalIntro";
import useTypeHighlight from "./useTypeHighlight";

const TypingMainPage = () => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const highlight = useTypeHighlight()
    return (
            <div className={"h-[60px] sm:h-fit"}>
                <h2 className={"text-[#ffa500] blinking-cursor text-center md:text-4xl font-extrabold"}>
                    {highlight}
                </h2>
            </div>


    )
}

export default TypingMainPage