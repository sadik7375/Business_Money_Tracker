import React from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Overview from '../component/Overview';
import Charts from '../component/Charts';

const Home = () => {
    return (
        <div>
              <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Overview></Overview>
            <Charts></Charts>
            
        </div>
    );
};

export default Home;