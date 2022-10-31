
import * as React from 'react';
import Navbar from '../Navbar';
import Intro from './Intro';
import Footer from '../Footer';
import './index.scss';

const Home = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Intro/>
            <Footer/>
        </div>
    )
}

export default Home;