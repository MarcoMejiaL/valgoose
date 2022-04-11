import React from 'react'
import Layout from '@containers/Layout';
import '@styles/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home'
import OurCakes from '@pages/OurCakes'
import OurPrices from '@pages/OurPrices'

const App = ()=>{
    return(
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/cakes' element={<OurCakes/>}/>
                <Route exact path='/prices' element={<OurPrices/>}/>
                
            </Routes>
        </Layout>
        </BrowserRouter>
    )
}

export default App;