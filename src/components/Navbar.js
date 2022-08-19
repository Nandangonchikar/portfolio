import React,{useState,useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from "@mui/icons-material/ReorderRounded"

function Navbar(){
    const [expandNavBar, setExpandNavBar]= useState(false);
    const location= useLocation();

    useEffect(() => {
        setExpandNavBar(false);
    }, [location]);
    

    return (
        <div className='navbar' id={expandNavBar? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => {
                        setExpandNavBar((prev) => !prev)
                    }}
                >
                   <ReorderIcon />
                </button>
        </div><div className='links'>
                <Link to='/'> Home</Link>
                <Link to='/Projects'> Projects</Link>
                <Link to='/Experience'> Experience</Link>
            </div>
        </div>
    )
}

export default Navbar;