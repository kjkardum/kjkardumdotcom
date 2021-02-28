import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const NavBar = (props) => {
    const [open, toggle] = React.useState(false);
    return (
        <div className="mynavbar">
            <div className="nv-item nv-hamburger shadow1" onClick={()=>(toggle(!open))}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={"hidden"+ (open ? " active" : "")}>
                <a href="#start" onClick={()=>(toggle(false))} className="nv-item shadow1">Home</a>
                <Link href="#projects"><a onClick={()=>(toggle(false))} className="nv-item shadow1">Main projects</a></Link>
                <a href="#smallprojects" onClick={()=>(toggle(false))} className="nv-item shadow1">Other projects</a>
                <a href="#contact" onClick={()=>(toggle(false))} className="nv-item shadow1">Contact</a>
            </div>
        </div>
    )
}
export default NavBar;