import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import LogoFooter from '../components/LogoFooter';
import Banner from '../components/Banner';
import Card from '../components/Card';




const Home = () => {
    return (
        <div>
            <div className='nav'>
                <Logo/>
                <Navigation/>

            </div>
            <div className="banner-home">
               <Banner/>
            </div>
            <div className="card-logements">
                <Card/>
            </div>
                
            <LogoFooter/>
        </div>
    );
};

export default Home;