import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Innovation from './Innovation';
import MainProducts from './MainProducts';
import Turnover from './Turnover';



const Home = () => {

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("userInfo")) navigate("/Admindashboard");
    }, []);

    return (
        <>
            <Hero />
            <Innovation />
            <Turnover/>
            <MainProducts />
        </>
    )
}

export default Home
