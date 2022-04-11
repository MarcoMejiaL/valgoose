import React from 'react'



import pastel from '@img/c-feature-1.jpg'

const AloneCard =()=>{
    return(
        <div className="card">
        <div className="card__img">
            <img src={pastel} alt="pastelito"/>
        </div>
        
        <div className="card_name">
            
                <h4 className="circle" >$29</h4>
            
            
            
                <h3>Strawberry Cupcakes</h3>
                <button className="card__button" >Add to card</button>
            
        
        </div>
    </div>
    )
}

export default AloneCard