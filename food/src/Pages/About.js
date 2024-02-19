import React from 'react';
import PagesJumbo from '../Component/Jumbo/PagesJumbo';
import AboutFoodies from '../Component/AboutFoodies/AboutFoodies';
import Info from '../Component/AboutInfo/Info';
import Services from '../Component/Services/Services';
import MasterChef from '../Component/MasterChef/MasterChef';
import Footer from '../Component/Footer/Footer';


function About(props) {
    return (
        <div>
           <PagesJumbo title='About'></PagesJumbo> 
           <AboutFoodies></AboutFoodies>
           <Info></Info>
           <Services></Services>
           <MasterChef></MasterChef>
           <Footer></Footer>
        </div>
    );
}

export default About;