import React from 'react'

import logo from '@img/logo.png'
const Menu =()=>{
    return(
        <header className="navbar__main--container">
    
        <div className="navba__socialmedia">
            <div className="socialMeadia--mail">
                <p>
                    <i className="fas fa-phone-alt"></i>
                    +(255) 735 146 
                </p>
                <p>
                    <i className="far fa-envelope"></i>
                    example@expamle.com
                </p>
            </div>
            <div className="navbar__socialmeadia">
                <ul>
                    <li>
                        <a href="">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>


        <div className="navbar__navegationContainer">
            <div className="navbar__logo">
                <a href="">
                    <img src={logo} alt="logo"/> 
                </a>
                
            </div>


            <nav className="navabr__menu">
                <ul className="navbr__menu--grid">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/cakes">Nuestros Pasteles</a>
                    </li>
                    <li>
                        <a href="/prices">Menu</a>
                    </li>
                    <li>
                        <a href="">Acerca de Nosotros</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </nav>

        </div>
    
    </header>
    )
}

export default Menu