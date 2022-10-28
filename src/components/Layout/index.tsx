
import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './index.scss';

const Layout = () => {
    return (
        <div className='app'>
            <Navbar/>
            <section className='intro'>
                <div className='container'>
                    <h4>Hey Y'all! I'm</h4>
                    <h2 className='name'>Kathryn Herod</h2>
                    <h3>a <span className='dev'>Front End Developer</span></h3>
                    <p>with expertise in code quality, user experience, accessibility, testing, and maintenance of Enterprise and Legacy software systems. I excel in collaborating with product managers, designers, and stakeholders to understand user needs and build software to meet those needs.
                        </p>
                </div>

            </section>
            <Footer/>
        </div>
    )
}

export default Layout;