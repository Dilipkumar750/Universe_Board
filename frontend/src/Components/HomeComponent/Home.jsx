import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Innovation from './Innovation';
import MainProducts from './MainProducts';
import Turnover from './Turnover';
import Test from './Test';



const Home = () => {

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("userInfo")) navigate("/Admindashboard");
    }, []);

    return (
        <>
        <div className='font-bold'>
            <Hero />
            <Innovation />
            
            <Turnover/>
            <Test />
            <MainProducts />
        </div>
        </>
    )
}

export default Home
