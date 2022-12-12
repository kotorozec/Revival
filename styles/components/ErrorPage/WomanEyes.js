import {motion} from "framer-motion";

const blinkEyes = {
    hidden: {
        opacity: 0.3
    },
    show:{
        opacity: 1,
        transition:{
            duration:1.5,
            repeat: Infinity,
            ease:"easeInOut",
            repeatType: "reverse",
        }
    },
}

const WomanEyes = () => {
    return (
        <motion.path fill="#263238" variants={blinkEyes} initial={"hidden"} animate={"show"}
              d="M393.77 193.51a1.37 1.37 0 101.47-1.33 1.4 1.4 0 00-1.47 1.33zM384.5 192.92a1.26 1.26 0 001.16 1.37 1.2 1.2 0 001.33-1.21 1.25 1.25 0 10-2.49-.16z">

        </motion.path>
    )
}

export default WomanEyes