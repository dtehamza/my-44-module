import PropTypes from "prop-types";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Feature = ({feature}) => {
    return (
        <div className=" flex items-center gap-4  ">
            <span><TfiArrowCircleRight className=" text-gray-950" /></span>
            <p>{feature}</p>
        </div>
    );
};

Feature.PropTypes={ feature:PropTypes.string}

export default Feature;