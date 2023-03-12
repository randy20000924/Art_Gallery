import React  from "react";
import Header from './components/header/Header'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'


const App = () => {
    return(
        <>
            <Header />
            <About />
            <Nav />
            <Footer />
        </>
    )
}

export default App