import React from 'react';
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';
import Routers from '../routes/Routers';
import Home from '../pages/Home';

const Layout = () => {
    return (
        <>
            <Header />
            <Home />
            <main>
                <Routers />
            </main>
            <Footer />
        </>
    )
}

export default Layout;
