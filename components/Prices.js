import prices from "../locales/prices";
import ModalElement from "./Modal";

const Prices = () => {
    return <div className="articles">
        {prices.map(el => (
            <ModalElement prices={el} key={el.id}/>
        ))}
    </div>

}

export default Prices