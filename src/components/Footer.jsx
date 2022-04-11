import React from 'react';

import logo from '@img/logo.png'

const Footer = ()=>{
    return(
        <footer className="footer">
        <div className="footer__container">
            <div className="footer__tittle">
                <img src={logo} alt="logo footer"/>
                
                <h2>Cherry Bomb´n</h2>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem, rem aperiam mollitia quisquam.</p>
                <div className="footer__socialmedia">
                    
                            <a href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                       
                            <a href="">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        
                            <a href="">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                        
                            <a href="">
                                <i className="fab fa-pinterest-square"></i>
                            </a>
                       
                </div>
            </div>
                <div className="footer__menu">
                    <h3 className="footer__tittles">Quick links</h3>
                    
                    <ul>
                        <li>
                            <a href="">Your Accoutn</a>
                        </li>
                        <li>
                            <a href="">View Order</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Terms & Conditionis</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <h3 className="footer__tittles">Horarios</h3>
                    <ul>
                        <li>Lun - Vie: 8am -8pm</li>
                        <li>Sab: 9am - 9pm</li>
                        <li>Don: Cerrado</li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <h3 className="footer__tittles"> Direccion</h3>
                    <ul>
                        <li>(1800) 574 9687</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>                  
                </div>
            

        </div>
        <div className="footer__copy--container">
            <div className="footer__copy">
                <p>&copy; todos los derechos reservados</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer