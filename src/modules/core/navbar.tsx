import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';
import { useState } from 'react';

function NavBar(){
    let [open, setOpen] = useState(false);
    let showNav = () => {
        setOpen(!open);
    };
    
    return(
        <nav>
            <div className="desktopNav">
                <div className='navContainer'>
                    <a className='navTitle' href='/shop'>shop</a>
                    <a className='navTitle' href='/box-set'>box set</a>
                    <a className='navTitle' href='/buckets'>buckets</a>
                    <a className='navTitle logo' href='/'><img src="/src/assets/logos/mbumbus_bakes_logo.jpeg"/></a>
                    <a className='' href='/packets'>packets</a>
                    <a className='' href='/custome-order'>custom order</a>
                    <a className='' href='/account'><FontAwesomeIcon icon={faUser}/></a>
                    <button className=''><FontAwesomeIcon icon={faCartShopping}/></button>
                </div>
            </div>
            <div className="mobileNav">
                <div style={{ display:  "flex", width:"100%", justifyContent: "space-between", padding: "0 10px"}}>
                    <img style={{ maxWidth: "50px", backgroundColor: "white", padding: "10px", borderRadius: "50%" }} src="https://raw.githubusercontent.com/mphomolefe730/portfolio-website/refs/heads/main/src/assets/icons/menu-burger-horizontal-svgrepo-com.svg" onClick={()=> showNav()}/>
                    <a className='navTitle' href='/account'><FontAwesomeIcon icon={faCartShopping} /></a>
                </div>
                <div style={{ display: (open) ? "grid": "none", height: "98svh", width: "100%", zIndex: 99, position: "absolute", gridTemplateColumns: "2fr 4fr"}}>
                   
                    <div style={{ backgroundColor: "rgba(255,255,255,1)", padding: "10px"}}>
                    <a className='navTitle' href='/shop'>shop</a>
                    <a className='navTitle' href='/box-set'>box set</a>
                    <a className='navTitle' href='/buckets'>buckets</a>
                    <a className='navTitle' href='/packets'>packets</a>
                    <a className='navTitle' href='/custome-order'>custom order</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;