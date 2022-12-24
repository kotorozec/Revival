import Link from 'next/link'
import Image from 'next/image'
import {useState} from "react";
import {useRouter} from "next/router";

const classesImg = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const GalleryBlurImg = ({image}) => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const [isLoading, setLoading] = useState(true)
    return (
        <>
            <Link href={locale === 'pl' && "/cennik" || locale !== 'pl' && "/en/cennik"}>
                <div className={"w-full overflow-hidden rounded-lg shadow-xl group"}>
                    <Image src={image.imgHref} alt={locale === 'pl' && image.servicesPl || locale !== 'pl' && image.servicesEn} width={637} height={850} className={classesImg(
                        'duration-300 ease-in-out group-hover:opacity-75',
                        isLoading
                            ? 'scale-110 blur-2xl grayscale'
                            : 'scale-100 blur-0 grayscale-0'
                    )}
                           onLoadingComplete={() => setLoading(false)}
                    />
                </div>
                <h2 className={"mt-2 text-sm text-gray-700 dark:text-white font-semibold text-center"}>{locale === 'pl' && image.servicesPl || locale !== 'pl' && image.servicesEn}</h2>
            </Link>
        </>


    )

}

export default GalleryBlurImg