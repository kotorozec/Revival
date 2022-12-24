import '../styles/main.scss'
import Layout from "../components/Layout/Layout";
import {ThemeProvider} from "next-themes";
import {pageAnimations} from "../components/Animations/Animations";
import {motion, AnimatePresence} from "framer-motion";
import styled from "styled-components";
import {useRouter} from 'next/router'

function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <ThemeProvider attribute="class">
            <Layout>
                <AnimatePresence mode='wait'>
                    <MotionWrapper key={router.route} exit={"exit"} variants={pageAnimations} initial={"hidden"}
                                   animate={"show"}>
                        <Component {...pageProps} />
                    </MotionWrapper>
                </AnimatePresence>
            </Layout>
        </ThemeProvider>
    )
}

const MotionWrapper = styled(motion.div)`

`

export default MyApp
