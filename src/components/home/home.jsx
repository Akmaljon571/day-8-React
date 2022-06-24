import { Outlet } from 'react-router-dom'
import LayOut from '../LayIOut/LayOut'
import './home.scss'


function Home() {
    return ( 
        <div className='Container'>
            <LayOut>
                <Outlet />
            </LayOut>
        </div>
     );
}

export default Home;