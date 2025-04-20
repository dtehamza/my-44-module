import { useState } from "react";
import Link from "../Link/Link";
import { TfiAlignLeft, TfiClose } from "react-icons/tfi";
import logo from '../../assets/images.jpg';



const Navbar = () => {
    const routes = [
        {id:1, path:"/",         name:"Home"},
        {id:2, path:"/about",    name:"About"},
        {id:3, path:"/services", name:"Services"},
        {id:4, path:"/contact",  name:"Contact"},
        {id:5, path:"/login",    name:"Login"}
    ];

    const [open, setOpen]= useState(false)

    return (
        <nav className="text-black bg-yellow-300 p-6 flex items-center">
            <div className="w-20 h-20 ">
                <img src={logo} alt="" />
            </div>

            <div className="md:hidden" onClick={()=>setOpen(!open)}>
            {
                open === true ? <TfiClose className="text-xl "/>  : <TfiAlignLeft className="text-xl "/>
            }
            
            </div>

            <ul className={`md:flex absolute duration-1000
                md:static
                ${ open ? 'top-14': '-top-60'}
                bg-yellow-300 px-8`}>

          
            {
                routes.map( route => <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;