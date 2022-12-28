import Head from 'next/head'
import {useRouter} from "next/router";
import pl from "../locales/pl";
import en from "../locales/en";
import testimonials from "../locales/testimonials";
import {wrap} from "@popmotion/popcorn";
import {motion} from "framer-motion";
import {useState} from "react";
import styled from "styled-components";
import SvgStar from "../components/SVGPopup";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";

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
                <div className="sm:mx-auto sm:w-full sm:max-w-2xl pb-5">
                    <p className="my-4 text-center text-md text-gray-600 font-semibold dark:text-white max-w-2xl">{t.TestimonialsIntroText}
                    </p>
                </div>

                <motion.div
                    className={"container max-w-screen-lg  w-full m-auto py-16 px-4 relative bg-gray-800 shadow-2xl rounded-lg flex justify-center text-center items-center dark:bg-white"}>
                    {testimonials
                        .filter((_, index) => index === slideIndex)
                        .map(testimonial => {
                            return (
                                <motion.div key={testimonial.id} className={"px-2 md:px-16 h-full w-3/4"}
                                            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                                            transition={{duration: 0.8}}>

                                    <h2 className={"text-gray-600  font-semibold py-2 md:py-6 text-white dark:text-gray-600"}>{testimonial.name}</h2>
                                    <p className={"text-gray-600 text-white font-semibold  dark:text-gray-600"}>{locale === 'pl' && testimonial.testimonialsPl || locale !== 'pl' && testimonial.testimonials}</p>
                                    <div className={"flex justify-center items-center gap-x-1 py-2 md:pt-6"}>
                                        <SvgStar/>
                                        <SvgStar/>
                                        <SvgStar/>
                                        <SvgStar/>
                                        <SvgStar/>
                                    </div>
                                    <motion.div className={"flex justify-center items-center gap-x-2 py-2 md:pt-6"}>
                                        <motion.div onClick={() => pagination(-1)} className={"bg-gray-600 rounded-full duration-300"}>
                                            <MdKeyboardArrowLeft className={"text-2xl text-white"}></MdKeyboardArrowLeft>
                                        </motion.div>
                                        {testimonials.map((el, index) => (
                                            <Dots active={index === slideIndex ? 1 : 0} key={el.idPag}></Dots>
                                        ))}
                                        <motion.div onClick={() => pagination(1)} className={"bg-gray-600 rounded-full duration-300"}>
                                            <MdKeyboardArrowRight className={"text-2xl text-white"}></MdKeyboardArrowRight>
                                        </motion.div>
                                    </motion.div>


                                </motion.div>
                            )
                        })}
                </motion.div>
            </main>
        </>

    )
}

const Dots = styled(motion.span)`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({active}) => (active ? "#ffa500" : "#4B5563")}
`

export default Referencje