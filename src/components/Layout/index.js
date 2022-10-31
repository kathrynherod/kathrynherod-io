import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './index.scss';

class Layout extends React.Component {
    render() {
        return (
            <div className='app'>
                <Navbar/>
                    <main>{this.props.children}</main>
                <Footer/>
            </div>
        )
    }
}

export default Layout;