import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router'
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import ToggleButton from "./ToggleButton";
import {motion} from "framer-motion"
import styled from 'styled-components';
import {MdMenu, MdClose} from "react-icons/md";
import {FaLinkedinIn, FaTwitter, FaInstagram} from "react-icons/fa";
import menuPng from '../assets/logo-revival.png'
import pl from "../locales/pl";
import en from "../locales/en";

const Navbar = () => {
    const routerTranslation = useRouter();
    const { locale } = routerTranslation ;
    const t = locale === 'pl' ? pl : en;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        routerTranslation.push(routerTranslation.pathname, routerTranslation.asPath, { locale });
    };

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };
    const {defaultTheme, theme, setTheme} = useTheme();
    const [mount, setMount] = useState(false)
    useEffect(() => {
        setMount(true)
    }, [])
    const renderTheme = () => {
        if (!mount) return null;
        const currentTheme = theme === "system" ? defaultTheme : theme;
        if (currentTheme === "dark") {
            return (
                <ToggleButton className={"flex items-center justify-center bg-[#3871c1] hover:bg-white"}
                              onClick={() => setTheme("light")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:fill-[#ffa500] duration-300">
                        <path
                            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                    </svg>
                </ToggleButton>
            )
        } else {
            return (
                <ToggleButton className={"flex items-center justify-center bg-[#3871c1] hover:bg-gray-900"}
                              onClick={() => setTheme("dark")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-6 h-6 fill-white hover:fill-[#ffa500] duration-300">
                        <path fillRule="evenodd"
                              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                              clipRule="evenodd"/>
                    </svg>
                </ToggleButton>
            )
        }
    }
    const router = useRouter()
    return (
        <div>
            <div className={"sticky w-full h-20 shadow-xl z-10 rounded-xl"}>

                <div className={"flex justify-between items-center w-full h-full px-2 2xl:px-16"}>
                    <Link href={"/"}>
                        <Image
                            src={menuPng}
                            alt={"Revival Logo"}
                            width={60}
                            height={60}
                            className={"hover:scale-110 transition rounded-full"}
                        />
                    </Link>
                    <div>
                        <ul className={"hidden md:flex px-4 justify-center items-center"}>
                            <Link href={"/"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 hover transition text-gray-500 font-semibold dark:text-white"}>
                                    {t.MenuHome}
                                </li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/" ? '100%' : '0%'}}/>
                            </Link>
                            <Link href="/uslugi" className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-gray-500 font-semibold dark:text-white"}>{t.MenuServices}</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/uslugi" ? '100%' : '0%'}}/>
                            </Link>
                            <Link href={"/cennik"} className={"ml-10"}>
                                <li className={" text-sm uppercase hover:scale-110 transition relative text-gray-500 font-semibold dark:text-white"}>{t.MenuPricing}</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/cennik" ? '100%' : '0%'}}/>
                            </Link>
                            <Link href={"/galeria"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-gray-500 font-semibold dark:text-white"}>{t.MenuGallery}</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/galeria" ? '100%' : '0%'}}/>
                            </Link>
                            <Link href={"/referencje"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-gray-500 font-semibold dark:text-white"}>{t.MenuReviews}</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/referencje" ? '100%' : '0%'}}/>
                            </Link>
                            <Link href={"/kontakt"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-gray-500 font-semibold dark:text-white"}>{t.MenuContact}</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/kontakt" ? '100%' : '0%'}}/>
                            </Link>
                            <Link href={"/blog"} className={"ml-10"}>
                                <li className={"text-sm uppercase hover:scale-110 transition relative text-gray-500 font-semibold dark:text-white"}>Blog</li>
                                <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                      animate={{width: router.asPath === "/blog" ? '100%' : '0%'}}/>
                            </Link>
                            <li className={"ml-5"}>{renderTheme()}</li>
                            <select
                                onChange={changeLanguage}
                                defaultValue={locale}
                                className="ml-5 text-center bg-transparent max-w-[72px] text-[12px] text-gray-500 font-bold rounded-full border-2 border-gray-400 dark:text-white"
                            >
                                <option value="pl">PL</option>
                                <option value="en">EN</option>
                            </select>
                        </ul>
                        <motion.div onClick={handleNav} className={"md:hidden"} whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.75}}>
                            <MdMenu size={25} color={"#ffa500"} className={"dark:fill-white"}/>

                        </motion.div>
                    </div>
                </div>
                <div className={nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                    <div
                        className={nav
                            ? "fixed transform translate-x-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e3e3e3] ease-in duration-500 p-4 dark:bg-gray-800"
                            : "fixed translate-x-[-100%] top-0 ease-in duration-500  p-4"}>
                        <div>
                            <div className={"flex w-full items-center justify-between"}>
                                <Image
                                    src={menuPng}
                                    alt={"Revival Logo"}
                                    width={50}
                                    height={50}
                                    className={"hover:scale-110 transition mt-2 rounded-full"}
                                />
                                <select
                                    onChange={changeLanguage}
                                    defaultValue={locale}
                                    className="text-center bg-transparent max-w-[80px] text-[12px] text-gray-500 font-bold rounded-full border-2 border-gray-400 dark:text-white"
                                >
                                    <option value="pl">PL</option>
                                    <option value="en">EN</option>
                                </select>

                                <motion.div onClick={handleNav}
                                            className={"rounded-full shadow-md shadow-gray-600 p-1 cursor-pointer dark:bg-white dark:shadow-none"}
                                            whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}>
                                    <MdClose size={25} color={"#ffa500"} className={"dark:fill-gray-800"}/>
                                </motion.div>
                            </div>
                        </div>
                        <div className={"py-6"}>
                            <ul className={"flex flex-col w-full items-center justify-around h-[400px]"}>
                                <Link href={"/"}>
                                    <li className={"text-md text-gray-500 font-semibold uppercase py-1 dark:text-white"}>{t.MenuHome}
                                    </li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/uslugi"}>
                                    <li className={"text-md text-gray-500 font-semibold uppercase py-1 dark:text-white"}>{t.MenuServices}</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/uslugi" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/cennik"}>
                                    <li className={"text-md text-gray-500 font-semibold uppercase py-1 dark:text-white"}>{t.MenuPricing}</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/cennik" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/galeria"}>
                                    <li className={"text-md text-gray-500 font-semibold uppercase py-1 dark:text-white"}>{t.MenuGallery}</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/galeria" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/referencje"}>
                                    <li className={"text-md text-gray-500 font-semibold uppercase py-1 dark:text-white"}>{t.MenuReviews}</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/referencje" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/kontakt"}>
                                    <li className={"text-md text-gray-500 font-semibold uppercase py-1 dark:text-white"}>{t.MenuContact}</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/kontakt" ? '100%' : '0%'}}/>
                                </Link>
                                <Link href={"/blog"}>
                                    <li className={"text-md text-gray-500 font-semibold uppercase py-1 dark:text-white"}>Blog</li>
                                    <Line transition={{duration: 0.75}} initial={{width: "0"}}
                                          animate={{width: router.asPath === "/blog" ? '100%' : '0%'}}/>
                                </Link>
                                {renderTheme()}
                            </ul>
                            <div className={"pt-10"}>
                                <p className={"uppercase text-md text-gray-500 font-semibold text-center dark:text-white"}>{t.MenuMobileCallToAction}</p>
                                <div className={"flex item-center justify-center my-4 w-full sm:w-[85% gap-x-4"}>
                                    <div
                                        className={" flex item-center justify-center rounded-full shadow-lg shadow-gray-600 py-2 cursor-pointer hover:scale-110 ease-in duration-300 w-1/5 dark:shadow-none dark:bg-white"}>
                                        <FaLinkedinIn size={15} color={"#3871c1"}/>
                                    </div>
                                    <div
                                        className={" flex item-center justify-center rounded-full shadow-lg shadow-gray-600 py-2 cursor-pointer hover:scale-110 ease-in duration-300 w-1/5 dark:shadow-none dark:bg-white"}>
                                        <FaTwitter size={15} color={"#3871c1"}/>
                                    </div>
                                    <div
                                        className={" flex item-center justify-center rounded-full shadow-lg shadow-gray-600 py-2 cursor-pointer hover:scale-110 ease-in duration-300 w-1/5 dark:shadow-none dark:bg-white"}>
                                        <FaInstagram size={20} color={"#3871c1"}/>
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
  background: #ffa500;
`

export default Navbar;