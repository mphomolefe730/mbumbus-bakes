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
                    <a className='navTitle InactiveButton' href='/shop'>shop</a>
                    <a className='navTitle' href='/offerings'>offerings</a>
                    <a className='navTitle' href='/buckets'>buckets</a>
                    <a className='navTitle logo' href='/'><img src="/src/assets/logos/mbumbus_bakes_logo.jpeg"/><small style={{display: "block"}}>mbumbus bakes</small></a>
                    <a className='' href='/packets'>packets</a>
                    <a className='InactiveButton' href='/custome-order'>custom order</a>
                    <a className='' href='/account'><FontAwesomeIcon icon={faUser}/></a>
                    <a className='' href='/checkout'><FontAwesomeIcon icon={faCartShopping}/></a>
                </div>
            </div>
            <div className="mobileNav">
                <div style={{ display:  "flex", width:"100%", justifyContent: "space-between", marginBottom: "2rem", padding: "0px"}}>
                    <img style={{ maxWidth: "30px", marginLeft:"1rem", backgroundColor: "white", padding: "10px", borderRadius: "1rem" }} src="https://raw.githubusercontent.com/mphomolefe730/portfolio-website/refs/heads/main/src/assets/icons/menu-burger-horizontal-svgrepo-com.svg" onClick={()=> showNav()}/>
                    <a className='navTitle' href='/checkout'><FontAwesomeIcon size="2x" icon={faCartShopping} /></a>
                </div>
                <div style={{ display: (open) ? "grid": "none", backgroundColor: "black", padding: "10px", height: "100%", width: "70%", zIndex: 99, position: "absolute", gridTemplateColumns: "2fr 4fr"}}>
                        <a className='navTitle' href='/'>home</a>
                        <a className='navTitle InactiveButton' href='/shop'>shop</a>
                        <a className='navTitle InactiveButton' href='/box-set'>box set</a>
                        <a className='navTitle' href='/buckets'>buckets</a>
                        <a className='navTitle' href='/packets'>packets</a>
                        <a className='navTitle InactiveButton' href='/custome-order'>custom order</a>
                        
                </div>
            </div>
        </nav>
    );
}

export default NavBar;