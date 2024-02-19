import React from 'react';
import PagesJumbo from '../Component/Jumbo/PagesJumbo';
import ContactUs from '../Component/Contact/ContactUs';
import ContactInformation from '../Component/ContactInformation/ContactInformation';
import Footer from '../Component/Footer/Footer';
function Contact(props) {
    return (
        <div>
           <PagesJumbo title='Contact'></PagesJumbo>
           <ContactUs></ContactUs>
           <ContactInformation></ContactInformation>
           <Footer></Footer>
        </div>
    );
}

export default Contact;