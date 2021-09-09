import React from "react";
import './Header.css';

const Header = ({black}) =>{
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"  alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                <   img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuario" />
                </a>
               
            </div> 
        </header>
    );
}

export default Header;