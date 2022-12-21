import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {backDrop, ModalCircle, modalShown, ModalText} from "/components/Animations";
import {motion, AnimatePresence} from "framer-motion";
import styled from 'styled-components'
import PopUpImg from '../assets/revival-popup-ornament-pricelist.svg'

const ModalElement = ({prices}) => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal)
    };

    const routerTranslation = useRouter();
    const {locale} = routerTranslation;

    return (

        <div key={prices.id}
             className={"h-full rounded-lg bg-white flex-col justify-center items-center relative px-4 shadow-lg dark:bg-white"}>
            <div
                className={"absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[80%] text-white font-semibold min-h-[50px] flex item-center justify-center shadow-lg rounded-lg bg-gray-600"}>
                <p className={"self-center text-center "}>{locale === 'pl' && prices.contentPl || locale !== 'pl' && prices.content}</p>
            </div>

            <div className={"flex w-full my-4 justify-center items-center px-2 cursor-pointer gap-x-3 h-full"} onClick={handleModal}>

                <div aria-label={"Zobacz nasz cennik!"} className={"w-full flex-grow text-gray-500 font-semibold"}>
                    {locale === 'pl' && prices.contentDescriptionPl || locale !== 'pl' && prices.contentDescription}
                </div>
                <div className={"w-full"}>
                    <Image src={prices.imgThumbnail} alt={locale === 'pl' && prices.contentPl || locale !== 'pl' && prices.content} width={'100%'} height={200} className={"aspect-square"}/>
                </div>
            </div>


            <AnimatePresence exitBeforeEnter={true}>
                {showModal === true &&
                    <ModalBackGround variants={backDrop} exit={"exit"} animate={"show"} inital={"hidden"}
                                     onClick={handleModal}>
                        <ModalBody variants={modalShown} exit={"exit"} animate={"show"} inital={"exit"}
                                   className={"group relative overflow-hidden"}>
                            <ModalCircleBackground variants={ModalCircle} animate={"show"} inital={"hidden"}/>
                            <div className={"w-full text-left pb-4 pl-4 z-[12] text-gray-700 gap-y-2"}>
                                <div className={"flex flex-col sm:flex-row justify-evenly items-center gap-2"}>
                                    <motion.div variants={ModalText} initial={"hidden"} animate={"show"}>
                                        <h2 className={"text-gray-700  px-1  text-center"}>
                                            {locale === 'pl' && prices.servicePl || locale !== 'pl' && prices.service}
                                            {locale === 'pl' && prices.contentPl || locale !== 'pl' && prices.content}
                                        </h2>
                                        <h4 className={"text-gray-700 px-1 mt-5 md:mt-2 text-center"}>
                                            {locale === 'pl' && prices.contentDescriptionPl || locale !== 'pl' && prices.contentDescription}
                                        </h4>
                                        <h3 className={"text-gray-700 px-1 text-center mb-5"}>
                                            {locale === 'pl' && prices.pricingPl || locale !== 'pl' && prices.pricing}
                                            {locale === 'pl' && prices.contentPriceTxtPl || locale !== 'pl' && prices.contentPriceTxt}
                                        </h3>
                                    </motion.div>
                                    <div className={"h-full px-4"}>
                                        <Image width={300} height={300} src={prices.imgThumbnail} alt={""}
                                               className={"self-center max-w-xs sm:max-w-sm md::max-w-md"}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex justify-center items-center w-full gap-x-3 font-semibold"}>
                                <Link href={"/kontakt"} className={"block"}>
                                    <button
                                        className={"bg-gray-800 rounded-xl px-3 py-2 text-white duration-100  group-hover:scale-105"}>
                                        {locale === 'pl' && prices.callToActionPL || locale !== 'pl' && prices.callToAction}
                                    </button>
                                </Link>
                                <button
                                    className={"bg-gray-800 rounded-xl px-3 py-2 text-white flex justify-center item-center gap-2  duration-300"}
                                    onClick={handleModal}> {locale === 'pl' && prices.btnClosePL || locale !== 'pl' && prices.btnClose}
                                </button>
                            </div>
                        </ModalBody>
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
  left: 50%;
  top: -50%;
  translate: -50% -50%;
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  height: fit-content;
  padding: 40px 20px;
  background: #1F2937;
  border-radius: 20px;
  text-align: center;
  z-index: 11;
`

const ModalCircleBackground = styled(motion.div)`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
  z-index: 0;
  clip-path: circle(10% at -100% 0%);
  transition: 0.5s;
  background: #fff;
`

export default ModalElement