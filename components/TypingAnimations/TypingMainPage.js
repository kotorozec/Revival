import {useRouter} from 'next/router';
import revivalIntro from "../../locales/revivalIntro";
import useTypeHighlight from "./useTypeHighlight";

const TypingMainPage = () => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const highlight = useTypeHighlight()
    return (
            <div className={"h-[60px] sm:h-fit"}>
                <h3 className={"text-[#ffa500] blinking-cursor font-extrabold"}>
                    {highlight}
                </h3>
            </div>


    )
}

export default TypingMainPage