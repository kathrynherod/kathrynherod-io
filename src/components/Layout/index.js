
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {
    return (
        <div className='app container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Layout;