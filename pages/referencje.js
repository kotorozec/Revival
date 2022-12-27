import Head from 'next/head'
import {useRouter} from "next/router";
import pl from "../locales/pl";
import en from "../locales/en";
import testimonials from "../locales/testimonials";
import {wrap} from "@popmotion/popcorn";
import {motion} from "framer-motion";
import {useState} from "react";
import styled from "styled-components";

const Referencje = () => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const t = locale === 'pl' ? pl : en;
    const [[slide, direction], setSlide] = useState([0, 0])
    const slideIndex = wrap(0, testimonials.length, slide)
    const pagination = (newDirection) => {
        setSlide([slide + newDirection, newDirection])
    }
    return (<>
            <Head>
                <title>{t.TestimonialsPageTitle}</title>
                <meta name="description"
                      content={t.TestimonialsMetaDescription}/>
            </Head>

            <main className={"container max-w-screen-2xl mx-auto px-5"}>
                <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                    <h1 className={"dark:text-white"}>{t.TestimonialsTitlePart1}<span
                        className={"text-[#ffa500]"}>{t.TestimonialsTitlePart2}</span></h1>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                    <p className="my-4 text-center text-md text-gray-600 font-semibold dark:text-white max-w-2xl">{t.TestimonialsIntroText}
                    </p>
                </div>

                <motion.div
                    className={"container max-w-screen-lg min-h-[60vh] w-full m-auto py-16 px-4 relative bg-white rounded-lg flex justify-center text-center items-center"}>
                    {testimonials
                        .filter((_, index) => index === slideIndex)
                        .map(testimonial => {
                            return (
                                <motion.div key={testimonial.id} className={"px-2 md:px-16 h-full w-2/3 "}
                                            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                                            transition={{duration: 0.8}}>

                                    <h2 className={"text-gray-600 font-semibold"}>{testimonial.name}</h2>
                                    <p className={"text-gray-600 font-semibold"}>{testimonial.testimonialsPl}</p>
                                    <motion.div className={"flex justify-evenly items-center"}>
                                        <div onClick={() => pagination(-1)}>Prev</div>
                                        <div onClick={() => pagination(1)}>Next</div>
                                    </motion.div>
                                    <div className={"flex w-full justify-center items-center gap-x-2"}>
                                        {testimonials.map((el, index) => (
                                            <Dots active={index === slideIndex ? 1 : 0} key={el.idPag}></Dots>
                                        ))}
                                    </div>

                                </motion.div>
                            )
                        })}
                </motion.div>
            </main>
        </>

    )
}

const Dots = styled(motion.span)`
  display:block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({active}) => (active ? "#ffa500" : "gray")}
`

export default Referencje