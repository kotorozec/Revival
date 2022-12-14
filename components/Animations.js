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
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        opacity: 1,
        transition: {
            delay: 0.5
        }

    },
    hidden: {
        opacity: 0,
    },
    exit: {
        top: "-100%",
        opacity: 0,
    }
}

export const ModalCircle = {
    show: {
        clipPath: "circle(100%)",
        zIndex:"-1",
        transition: {
            duration: 2
        }
    },
    hidden: {
        opacity:0,

    },
}