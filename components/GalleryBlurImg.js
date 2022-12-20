import Link from 'next/link'
import Image from 'next/image'
import {useState} from "react";

const classesImg = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const GalleryBlurImg = ({image}) => {
    const [isLoading, setLoading] = useState(true)
    return (
        <>
            <Link href={"/"}>
                <div className={"w-full overflow-hidden rounded-lg shadow-xl group"}>
                    <Image src={image.imgHref} alt={"Wait for loading img"} width={637} height={850} className={classesImg(
                        'duration-300 ease-in-out group-hover:opacity-75',
                        isLoading
                            ? 'scale-110 blur-2xl grayscale'
                            : 'scale-100 blur-0 grayscale-0'
                    )}
                           onLoadingComplete={() => setLoading(false)}
                    />
                </div>
                <h3 className={"mt-2 text-sm text-gray-700 dark:text-white font-semibold"}>{image.servicesPl}</h3>
                <p className={"mt-0 text-lg font-medium text-gray-800 dark:text-white"}>Ipsum dolorem</p>
            </Link>
        </>


    )

}

export default GalleryBlurImg