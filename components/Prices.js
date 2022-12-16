import prices from "../locales/prices";
import ModalElement from "./Modal";

const Prices = () => {
    return <div className={"flex xs:flex-com sm:flex-row justify-center items-center gap-x-3 flex-wrap"}>
        {prices.map(el => (
            <ModalElement prices={el} key={el.id}/>
        ))}
    </div>

}

export default Prices