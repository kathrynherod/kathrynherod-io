
import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import WorkHistory from './WorkHistory';
import './index.scss';

const Home = () => {
    return (
        <div className='app'>
            <Navbar/>
            <WorkHistory />
            <Footer/>
        </div>
    )
}

export default Home;