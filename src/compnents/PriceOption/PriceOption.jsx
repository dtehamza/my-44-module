import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {

    const {name, price, features}=option;

    return (
        <div className="bg-sky-500  flex flex-col rounded-lg p-4 text-white">

           <h2 className="text-center">
            <span className="text-6xl">{price}</span>
            <span className="text-2xl">$/month</span>
           </h2>
           <h3 className="text-xl font-sans font-bold text-center my-5">{name}</h3>
                      
            <div className="pl-6 py-4 flex-grow">
            {
             features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)   
            }
            </div>
            <button className="font-extrabold rounded-xl w-full h-8 bg-lime-600 hover:bg-yellow-300">Buy Now</button>
        </div>
    );
};
PriceOption.PropTypes={option: PropTypes.object}
export default PriceOption;