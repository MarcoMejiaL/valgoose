import React from 'react'

import AloneCard from '@components/AloneCard'

import izq from '@img/w-left-techture.png'
import right from '@img/w-right-techture.png'
import Getpastelitos from '../hooks/Getpastelitos';


const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=10';
const FeaturedCardsContainer =()=>{
const pastelitos = Getpastelitos(API)
    return(
            


<section className="cards__container">
        <div className="card__imgl">
            <img src={izq} alt=""/>
        </div>
        <div className="container__cards">
            <div className="cards__titles">
                <h2>Productos destacados </h2>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="aother__container">

            {pastelitos.map(pastelito => (
					<AloneCard/>
				))}
               
               
            
        </div>
        </div>
        <div className="card__imgl">
            <img src={right} alt=""/>

            </div>
    </section>

    )
}
export default FeaturedCardsContainer



