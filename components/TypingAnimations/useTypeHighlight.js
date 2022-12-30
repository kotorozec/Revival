import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import revivalIntro from "../../locales/revivalIntro";

const Phase = {
    Typing: Symbol('typing'),
    Pausing: Symbol('pausing'),
    Deleting: Symbol('deleting'),
};

const useTypeHighlight = () => {
    const [typeHighlight, setTypeHighlight] = useState("")
    const [phase, setPhase] = useState(Phase.Typing)
    const [selectTxt, setSelectTxt] = useState(0)
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    useEffect(() => {

        switch (phase) {
            case Phase.Typing: {
                const nextTypeHighlightPl = revivalIntro[selectTxt].typingPl.slice(0, typeHighlight.length + 1)
                const nextTypeHighlightEn = revivalIntro[selectTxt].typing.slice(0, typeHighlight.length + 1)

                if (nextTypeHighlightPl === typeHighlight || nextTypeHighlightEn === typeHighlight) {
                    setPhase(Phase.Pausing)
                    return
                }

                const timeout = setTimeout(() => {
                    if (locale === 'pl') {
                        setTypeHighlight(nextTypeHighlightPl)
                    }
                    if (locale !== 'pl') {
                        setTypeHighlight(nextTypeHighlightEn)
                    }
                }, 150)

                return () => clearTimeout(timeout)

            }
            case Phase.Deleting: {
                if (!typeHighlight) {
                    setPhase(Phase.Typing)
                    return
                }

                const prevTypeHighlightPl = revivalIntro[selectTxt].typingPl.slice(0, typeHighlight.length - 1)
                const prevTypeHighlightEn = revivalIntro[selectTxt].typing.slice(0, typeHighlight.length - 1)

                const timeout = setTimeout(() => {
                    if (locale === 'pl') {
                        setTypeHighlight(prevTypeHighlightPl)
                    }
                    if (locale !== 'pl') {
                        setTypeHighlight(prevTypeHighlightEn)
                    }
                }, 200)

                return () => clearTimeout(timeout)

            }
            case Phase.Pausing:
            default:
                const timeout = setTimeout(() => {
                    setPhase(Phase.Deleting)
                }, 1000)

                return () => clearTimeout(timeout)
        }


    }, [typeHighlight, phase, selectTxt])
    return [
        typeHighlight,
        phase,
    ]
}

export default useTypeHighlight