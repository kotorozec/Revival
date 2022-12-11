import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import styled from "styled-components";
import {MdKeyboardArrowUp} from "react-icons/md";

const BackToTopButton = () => {
    const [backToTheTop, setBackToTheTop] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setBackToTheTop(true) : setBackToTheTop(false)
        })
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            {backToTheTop && (
                <ButtonToTop onClick={scrollToTop} whileHover={{scale: 1.2,}} whileTap={{scale: 0.8, borderRadius: "50%"}}>
                    <MdKeyboardArrowUp className={"text-4xl text-white"}/></ButtonToTop>
            )}
        </>

    )

}
const ButtonToTop = styled(motion.button)`
  position: fixed;
  bottom: 50px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #ffa500;
`
export default BackToTopButton