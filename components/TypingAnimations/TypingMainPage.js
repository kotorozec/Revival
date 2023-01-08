import {useRouter} from 'next/router';
import revivalIntro from "../../locales/revivalIntro";
import useTypeHighlight from "./useTypeHighlight";

const TypingMainPage = () => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const highlight = useTypeHighlight()
    return (
            <div className={"sm:h-fit"}>
                <h2 className={"text-[#ffa500] blinking-cursor font-extrabold text-center text-lg"}>
                    {highlight}
                </h2>
            </div>


    )
}

export default TypingMainPage