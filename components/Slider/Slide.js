import {motion} from "framer-motion";

const Slide = ({children}) => {
    return (
        <motion.div className={"w-full relative mx-auto h-full break-words"}>
            {children}
        </motion.div>
    )
}

export default Slide