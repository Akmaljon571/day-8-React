import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import {Footer, Header, Home, Main} from './components';
 
function Prive() {
     const { pathname } = useLocation()
     const navigate = useNavigate()

     useEffect(() => {
        if (pathname === '/') {
            navigate('/home')
        }
     }, []);

     return (
     <>
        <Routes>
            <Route path='/home' element = {<Home />}>
               <Route index element = {<Header />} />
               <Route path='main' element = {<Main />} />
               <Route path='footer' element = {<Footer />} />
            </Route>
               <Route path='/about' element = {<Footer />} />
               <Route path='*' element = {<>'Error'</>} />

        </Routes>
     </>
     )
}

export default Prive;