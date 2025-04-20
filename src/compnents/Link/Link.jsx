import PropTypes from "prop-types";

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-6 p-1 hover:bg-green-600 rounded-lg" >
                    <a href={route.path}>{route.name}
                </a></li>
        </div>
    );
};
Link.PropTypes={route:PropTypes.object}
export default Link;