import {useState} from "react";
import {Modal} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {motion, AnimatePresence} from "framer-motion";
import styled from 'styled-components'
import {backDrop, ModalCircle, modalShown} from "/components/Animations";
import Link from "next/link";

const ModalElement = ({prices}) => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal)
    };

    const routerTranslation = useRouter();
    const {locale} = routerTranslation;

    return (
        <div key={prices.id}>
            <button onClick={handleModal} className={"relative"}>
                {prices.id}
            </button>
            <AnimatePresence exitBeforeEnter={true}>
                {showModal === true &&
                    <ModalBackGround variants={backDrop} exit={"exit"} animate={"show"} inital={"hidden"}
                                     onClick={handleModal}>
                        <Modal onClose={handleModal} isOpen={showModal}>
                            <ModalBody variants={modalShown} animate={"show"} inital={"hidden"} className={"group relative overflow-hidden hover:scale-110"}>
                                <ModalCircleBackground variants={ModalCircle}  animate={"show"} inital={"hidden"} >

                                </ModalCircleBackground>

                                <div className={"flex-col w-full text-left pb-4 pl-4 z-[12]"}>
                                    <h3 className={"text-gray-700 font-semibold"}> {locale === 'pl' && prices.CallToActionPL || locale !== 'pl' && prices.CallToAction}</h3>
                                    <h4 className={"text-gray-700 font-semibold"}> {locale === 'pl' && prices.CallToActionPL || locale !== 'pl' && prices.CallToAction}</h4>
                                    <h5 className={"text-gray-700 font-semibold"}> {locale === 'pl' && prices.CallToActionPL || locale !== 'pl' && prices.CallToAction}</h5>

                                </div>

                                <div className={"flex justify-center items-center w-full gap-x-3 font-semibold"}>
                                    <Link href={"/kontakt"} className={"block"}>
                                        <button
                                            className={"bg-gray-800 rounded-xl px-3 py-2 text-white duration-300  group-hover:scale-105"}>
                                            {locale === 'pl' && prices.CallToActionPL || locale !== 'pl' && prices.CallToAction}
                                        </button>
                                    </Link>
                                    <button
                                        className={"bg-gray-800 rounded-xl px-3 py-2 text-white flex justify-center item-center gap-2  duration-300"}
                                        onClick={handleModal}> {locale === 'pl' && prices.BtnClosePL || locale !== 'pl' && prices.BtnClose}
                                    </button>
                                </div>
                            </ModalBody>
                        </Modal>
                    </ModalBackGround>
                }
            </AnimatePresence>

        </div>
    );
}

const ModalBackGround = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`
const ModalBody = styled(motion.div)`
  position: absolute;
  top: -100%;
  left: 40%;
  max-width: 500px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 20px;
  text-align: center;
  z-index: 11;
`

const ModalCircleBackground = styled(motion.div)`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  position: absolute;
  inset:0;
  z-index: 0;
  clip-path: circle(10% at -50% 0%);
  transition: 0.5s;
  background: #ffa500;
`

export default ModalElement