import Head from 'next/head'
import Image from "next/image";
import {wrap} from "@popmotion/popcorn";
import {motion} from "framer-motion";
import {useState} from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import pl from "../locales/pl";
import en from "../locales/en";
import testimonials from "../locales/testimonials";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import intro from '../assets/testimonials/undraw_to_the_moon_re_q21i.svg'


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

            <main className={"container max-w-screen-xl mx-auto px-5"}>
                <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                    <h1 className={"dark:text-white"}>{t.TestimonialsTitlePart1}<span
                        className={"text-[#ffa500]"}>{t.TestimonialsTitlePart2}</span></h1>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-2xl pb-5">
                    <p className="my-4 text-center text-md text-gray-600 font-semibold dark:text-white max-w-2xl">
                        {t.TestimonialsIntroText}
                    </p>
                </div>

                <div className="pt-10 lg:py-14">
                    <div className="bg-gray-600 pb-16 lg:relative lg:z-10 lg:pb-0 rounded-2xl shadow-2xl">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <div className="relative lg:-my-8">
                                <div aria-hidden="true"
                                     className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
                                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                                    <div
                                        className="relative -top-5 aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                        <Image src={intro} className={"object-cover object-top lg:h-full lg:w-full bg-gray-600"} width={693} height={616} alt={""}/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                                <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                                    <blockquote>
                                        <div>
                                            <svg className="h-12 w-12 text-white " fill="#fff" viewBox="0 0 32 32" aria-hidden="true">
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                            </svg>
                                            {testimonials.filter((_, index) => index === slideIndex).map(testimonial => {
                                                return (
                                                    <motion.div key={testimonial.id} className={"px-2 h-full w-full"} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.8}}>
                                                        <p className="mt-6 text-lg font-medium text-white">{locale === 'pl' && testimonial.testimonialsPl || locale !== 'pl' && testimonial.testimonials}</p>
                                                        <p className="text-base font-semibold text-white pt-2">{testimonial.name}</p>
                                                        <div className={"flex justify-center items-center gap-x-2 py-2 md:pt-6"}>
                                                            <motion.div onClick={() => pagination(-1)} className={"bg-[#ffa500] rounded-lg duration-300 cursor-pointer"}>
                                                                <MdKeyboardArrowLeft className={"text-3xl text-white"}></MdKeyboardArrowLeft>
                                                            </motion.div>
                                                            {testimonials.map((el, index) =>
                                                                (<Dots active={index === slideIndex ? 1 : 0} key={el.idPag}></Dots>
                                                            ))}
                                                            <motion.div onClick={() => pagination(1)} className={"bg-[#ffa500] rounded-lg duration-300 cursor-pointer"}>
                                                                <MdKeyboardArrowRight className={"text-3xl text-white cursor-pointer"}></MdKeyboardArrowRight>
                                                            </motion.div>
                                                        </div>
                                                    </motion.div>
                                                )
                                            })}
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

const Dots = styled(motion.span)`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({active}) => (active ? "#ffa500" : "#fff")}
`

export default Referencje