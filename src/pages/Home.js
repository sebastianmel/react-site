import React from 'react';
import DynamicText from '../components/DynamicText';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Home = () => {
    return (
        <div>
            <div className="home">
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="min-content">
                    <h1>FS AGENCY</h1>
                    <h2>
                        <DynamicText />
                    </h2>
                    <h3>test</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;