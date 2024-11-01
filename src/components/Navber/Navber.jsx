import React, { useState } from 'react';
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from '../Link/Link';

const Navber = () => {

    const[open,setOpen]=useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" }
      ];

    return (
        <div className='text-black bg-yellow-200 p-6'>
            <div className='md:hidden' onClick={()=>setOpen(!open)}>
            
            {
                open?<IoClose />:<CgMenuLeftAlt />
            }
            </div>
            <ul className={`absolute md:static md:flex duration-1000 ${open?'top-12':'-top-60'} bg-yellow-200 p-3 shadow-lg`}>
                {
                    routes.map(route=><Link route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navber;