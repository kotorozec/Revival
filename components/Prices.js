import prices from "../locales/prices";
import ModalElement from "./Modal";

const Prices = () => {
    return <div className={"gap-10 md:grid md:grid-cols-2 md:gap-y-10 lg: grid lg:grid-cols-3 gap-x-5 gap-y-10 mt-12"}>
        {prices.map(el => (
            <ModalElement prices={el} key={el.id}/>
        ))}
    </div>

}

export default Prices