import {motion} from "framer-motion";
import testimonials from "../../locales/testimonials";
import {useRouter} from "next/router";
import {AnimatePresence} from "framer-motion";
import SliderWrapper from "./SliderWrapper";
import Slide from "./Slide";
import {useState} from "react";
import {wrap} from "@popmotion/popcorn";

const Slider = () => {
    const routerTranslation = useRouter();
    const {locale} = routerTranslation;
    const [[slide, direction], setSlide] = useState([0, 0])
    const slideIndex = wrap(0, testimonials.length, slide)
    const pagination = (newDirection) => {
        setSlide([slide + newDirection, direction])
    }
    return (
        <>

            <SliderWrapper>
                <AnimatePresence initial={false} custom={direction}>
                    {testimonials
                        .filter((_, el) => el === slideIndex)
                        .map((el) => {
                            return (
                                <Slide key={el.id}>
                                    <div>
                                        <h2 onClick={() => pagination(-1)}>{el.name}</h2>
                                        <h3 onClick={() => pagination(1)}> {el.avatar}</h3>
                                    </div>
                                    <div className={"max-w-fit"}>
                                        {el.testimonialsPl}
                                    </div>
                                </Slide>
                            )
                        })}
                </AnimatePresence>
            </SliderWrapper>


        </>
    )
}

export default Slider