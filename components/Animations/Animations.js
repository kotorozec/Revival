export const pageAnimations = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 1
        }
    }
}


export const backDrop = {
    show: {
        opacity: 1,
        transition: {
            delay: 0.5
        }
    },
    hidden: {
        opacity: 0,
    },
    exit: {
        opacity: 0,
    }
}

export const modalShown = {
    show: {
        position: "absolute",
        top: "50%",
        left: "50%",
        opacity: 1,
        transition: {
            delay: 0.5
        }

    },
    exit: {
        top: "-100%",
    }
}

export const ModalCircle = {
    show: {
        clipPath: "circle(100%)",
        zIndex: "-1",
        transition: {
            duration: 1.5,
        }
    },
    hidden: {
        opacity: 0,
    },
}

export const ModalText = {
    show: {
        opacity: 1,
        transition: {
            delay: 1.5
        }
    },
    hidden: {
        opacity: 0,
    },
}

export const StarBox = {
    show: {
        x: [0, 100, 0],
        boxShadow:"20px 20px 20px 0 #1F2937",
        transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 0.5
        }
    },
    hidden: {
        x: [null,0,0],
        transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 1
        }
    },
}

export const Star = {
    show: {
        pathLength: 1,
        pathOffset: 0,
        fill:"#fff",
        transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 0.8
        }
    },
    hidden: {
        pathLength: 0,
        pathOffset: 1,
        fill:"#ffa500",
    },
}