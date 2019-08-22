import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

  
const Navbar = () => {
    
    const navbar = 
        <React.Fragment>
            <div className="flex flex-jus-center flex-ali-center title" >ToDo List</div>
                <ul className="flex flex-child-align-self-end flex-ali-center link">
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/notstarted">Not Started</Link></li>
                    <li><Link to="/completed">Completed</Link></li>
                </ul>
        </React.Fragment>;
    return <div className="navbar flex flex-jus-space-btw">{navbar}</div>;
}

export default Navbar;