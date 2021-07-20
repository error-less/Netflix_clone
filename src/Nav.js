import React ,{useState,useEffect} from 'react';
import './Nav.css';
function Nav() {
    const[show,setShow] =useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setShow(true);
            }
            else{
                setShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show &&  "nav_black"}`}>
            <img
            className='Nav__logo'
             src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Logo"
             />
        </div>
        );
    }

export default Nav;