import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router'
import {useState} from "react";
import {motion} from "framer-motion"
import styled from 'styled-components';
import {MdMenu, MdClose} from "react-icons/md";
import {FaLinkedinIn, FaTwitter, FaInstagram} from "react-icons/fa";
import {BsFillMoonStarsFill} from "react-icons/bs";
import menuPng from '../assets/bubbles-menu.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

    const [darkMode, setDarkMode] = useState(false)

    const router = useRouter()
    return (
        <div className={darkMode ? "dark" : ""}>
            <div className={"fixed w-full h-20 shadow-xl z-10 dark:bg-[#222831]"}>

                <div className={"flex justify-between items-center w-full h-full px-2 2xl:px-16"}>
                    <Link href={"/"}>
                        <Image
                            src={menuPng}
                            alt={"Revival Logo"}
                            width={60}
                            height={60}
                            className={"hover:scale-110 transition dark:hidden"}
                        />
                    </Link>
                    <div>
                        <ul className={"hidden md:flex px-4"}>
                            <Link href={"/"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 hover transition text-[#233142] dark:text-white"}>Strona
                                    Główna
                                </li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/" ? '100%' : '0%'}} className={"dark:bg-white"}/>
                            </Link>
                            <Link href="/uslugi" className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-[#233142] dark:text-white"}>Usługi</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/uslugi" ? '100%' : '0%'}} className={"dark:bg-white"}/>
                            </Link>
                            <Link href={"/cennik"} className={"ml-10"}>
                                <li className={" text-sm uppercase hover:scale-110 transition relative text-[#233142] dark:text-white"}>Cennik</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/cennik" ? '100%' : '0%'}} className={"dark:bg-white"}/>
                            </Link>
                            <Link href={"/galeria"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-[#233142] dark:text-white"}>Galeria</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/galeria" ? '100%' : '0%'}} className={"dark:bg-white"}/>
                            </Link>
                            <Link href={"/referencje"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-[#233142] dark:text-white"}>Opinie</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/referencje" ? '100%' : '0%'}} className={"dark:bg-white"}/>
                            </Link>
                            <Link href={"/kontakt"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-[#233142] dark:text-white"}>Kontakt</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/kontakt" ? '100%' : '0%'}} className={"dark:bg-white"}/>
                            </Link>
                            <Link href={"/blog"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-[#233142] dark:text-white"}>Blog</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/blog" ? '100%' : '0%'}} className={"dark:bg-white"}/>
                            </Link>
                            <li className={"ml-10"} onClick={()=> setDarkMode(!darkMode)}>
                                <BsFillMoonStarsFill
                                    className={"cursor-pointer text-lg fill-[#233142] transition hover:fill-[#455d7a] hover:scale-110 dark:fill-amber-400" }/>
                            </li>
                        </ul>
                        <motion.div onClick={handleNav} className={"md:hidden"} whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.75}}>
                            <MdMenu size={25} color={"#455d7a"}/>
                        </motion.div>
                    </div>
                </div>
                <div className={nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                    <div
                        className={nav
                            ? "fixed transform translate-x-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e3e3e3] ease-in duration-500 p-4"
                            : "fixed translate-x-[-100%] top-0 ease-in duration-500  p-4"}>
                        <div>
                            <div className={"flex w-full items-center justify-between"}>
                                <Image
                                    src={menuPng}
                                    alt={"Revival Logo"}
                                    width={50}
                                    height={50}
                                    className={"hover:scale-110 transition mt-2"}
                                />

                                <motion.div onClick={handleNav}
                                            className={"rounded-full shadow-md shadow-[#455d7a] p-1 cursor-pointer"}
                                            whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}>
                                    <MdClose size={25} color={"#455d7a"}/>
                                </motion.div>
                            </div>
                        </div>
                        <div className={"py-6"}>
                            <ul className={"flex flex-col w-full items-center justify-around h-[400px]"}>
                                <Link href={"/"}>
                                    <li className={"text-md text-[#233142] uppercase py-1"}>Strona Główna</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/uslugi"}>
                                    <li className={"text-md text-[#233142] uppercase py-1"}>Usługi</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/uslugi" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/cennik"}>
                                    <li className={"text-md text-[#233142] uppercase py-1"}>Cennik</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/cennik" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/galeria"}>
                                    <li className={"text-md text-[#233142] uppercase py-1"}>Galeria</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/galeria" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/referencje"}>
                                    <li className={"text-md text-[#233142] uppercase py-1"}>Opinie</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/referencje" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/kontakt"}>
                                    <li className={"text-md text-[#233142] uppercase py-1"}>Kontakt</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/kontakt" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/blog"}>
                                    <li className={"text-md text-[#233142] uppercase py-1"}>Blog</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/blog" ? '100%' : '0%'}}/>
                                </Link>
                            </ul>
                            <div className={"pt-10"}>
                                <p className={"uppercase text-md text-[#233142] text-center"}>Pozostańmy w
                                    kontakcie!</p>
                                <div className={"flex item-center justify-center my-4 w-full sm:w-[85% gap-x-4"}>
                                    <div
                                        className={" flex item-center justify-center rounded-full shadow-lg shadow-[#455d7a] py-2 cursor-pointer hover:scale-110 ease-in duration-300 w-1/6"}>
                                        <FaLinkedinIn size={15} color={"#455d7a"}/>
                                    </div>
                                    <div
                                        className={" flex item-center justify-center rounded-full shadow-lg shadow-[#455d7a] py-2 cursor-pointer hover:scale-110 ease-in duration-300 w-1/5"}>
                                        <FaTwitter size={15} color={"#455d7a"}/>
                                    </div>
                                    <div
                                        className={" flex item-center justify-center rounded-full shadow-lg shadow-[#455d7a] py-2 cursor-pointer hover:scale-110 ease-in duration-300 w-1/5"}>
                                        <FaInstagram size={20} color={"#455d7a"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Line = styled(motion.div)`
  position: relative;
  bottom: -5%;
  left: 0;
  width: 0;
  height: 0.2rem;
  background: #455d7a;
`

export default Navbar;