import { useRouter } from 'next/router';
import pl from "../locales/pl";
import en from "../locales/en";


const Footer = () => {
    const routerTranslation = useRouter();
    const { locale } = routerTranslation ;
    const t = locale === 'pl' ? pl : en;
    return (
       <footer className={"py-6 text-center text-gray-600 font-semibold dark:text-white container max-w-screen-2xl mx-auto p-5"}>
           <span className={"text-gray-900 text-md dark:text-white"}>Revival</span>&copy; {t.FooterText}
       </footer>
    )
}

export default Footer