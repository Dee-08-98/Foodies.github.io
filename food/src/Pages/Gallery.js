import React from 'react';
import PagesJumbo from '../Component/Jumbo/PagesJumbo';
import OurGallery from '../Component/Gallery/OurGallery';
import Footer from '../Component/Footer/Footer';

function Gallery(props) {
    return (
        <div>
            <PagesJumbo title='Gallery'></PagesJumbo>
            <OurGallery></OurGallery>
            <Footer></Footer>
        </div>
    );
}

export default Gallery;