import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
            <Menu/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;