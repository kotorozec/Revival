import {useState} from "react";
import {Modal} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {motion, AnimatePresence} from "framer-motion";

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
                <Modal onClose={handleModal} isOpen={showModal}>
                    {locale === 'pl' && prices.contentPl || locale !== 'pl' && prices.content}
                </Modal>
            </AnimatePresence>

        </div>
    );
}

export default ModalElement