import {motion} from "framer-motion";
import {Star, StarBox} from "./Animations/Animations";

const SvgStar = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
            <g stroke="orange" strokeWidth="1">
                    <motion.path variants={StarBox} initial={"hidden"} animate={"show"} d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"></motion.path>
                    <motion.path variants={Star} initial={"hidden"} animate={"show"} d="M11.572 7.712a.5.5 0 01.856 0l1.108 1.841a.5.5 0 00.316.23l2.094.484a.5.5 0 01.265.815l-1.41 1.623a.5.5 0 00-.12.371l.186 2.141a.5.5 0 01-.693.504l-1.979-.838a.5.5 0 00-.39 0l-1.979.838a.5.5 0 01-.693-.504l.186-2.14a.5.5 0 00-.12-.372l-1.41-1.623a.5.5 0 01.265-.815l2.094-.484a.5.5 0 00.315-.23l1.109-1.841z"></motion.path>
            </g>
        </svg>
    );
}

export default SvgStar