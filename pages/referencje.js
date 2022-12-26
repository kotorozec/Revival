import Head from 'next/head'
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import {wrap} from "@popmotion/popcorn";
import styled from "styled-components";
import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion";
import pl from "../locales/pl";
import en from "../locales/en";
import testimonials from "../locales/testimonials";

const Referencje = () => {
    const [[slide, direction], setSlide] = useState([0, 0])
    const slideIndex = wrap(0, testimonials.length, slide);
    const paginate = newDirection => {setSlide([slide + newDirection, newDirection]);};
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const t = locale === 'pl' ? pl : en;
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
                    <p className="mt-4 text-center text-md text-gray-600 font-semibold dark:text-white max-w-2xl">{t.TestimonialsIntroText}
                    </p>
                </div>

                <SliderWrapper>
                    {testimonials.filter((_, iterator) => iterator === slideIndex)
                        .map(el => {
                            return (
                                <Slider key={el.id}>
                                    <AnimatePresence initial={false} custom={direction}>
                                        <div>
                                            <div className={"flex justify-between items-center"}>
                                                <div className={"rounded-full"}>
                                                    {el.avatar}
                                                </div>
                                                <div>
                                                    {el.name}
                                                </div>

                                            </div>
                                            <p>{el.testimonialsPl}</p>
                                        </div>
                                    </AnimatePresence>
                                </Slider>
                            )
                        })}
                    <div className={"flex justify-center items-center"}>
                        <div onClick={() => paginate(-1)}>Arrow 1</div>
                        <div onClick={() => paginate(1)}>Arrow 2</div>
                    </div>
                </SliderWrapper>
            </main>
        </>

    )
}

const SliderWrapper = styled(motion.div)`
  width: 100%;
`

const Slider = styled(motion.div)`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  padding: 2rem;
`

export default Referencje