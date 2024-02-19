import React from 'react';
import Jumbo from '../Component/Jumbotron/Jumbo';
import SpecialItem from '../Component/SpecialItem/SpecialItem';
import Footer from '../Component/Footer/Footer';
import HappyCustomers from '../Component/HappyCustomers/HappyCustomers';
import { useLocation } from 'react-router-dom';

function Home(props) {

    const location = useLocation()
    return (
        <div>
            <Jumbo></Jumbo>
            <SpecialItem></SpecialItem>
            <HappyCustomers></HappyCustomers>

            <Footer></Footer>
            
        </div>
    );
}

export default Home;