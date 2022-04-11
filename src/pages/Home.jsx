import React from 'react'
import FeaturedCardsContainer from '../containers/FeaturedCardsContainer'
import Services from '@containers/Services'
import Prices from '@components/Prices'
const Home = ()=>{
    return(
        <>
        <FeaturedCardsContainer/>
        <Services/>
        <Prices/>
        </>
    )
}

export default Home