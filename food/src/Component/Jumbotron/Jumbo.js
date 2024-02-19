import React from 'react';
import '../Jumbotron/Jumbo.css'
import { Link } from 'react-router-dom';
function Jumbo(props) {
    return (
        <>
            <div className="container-fluid active  bg-warning text-white-rounded  p-5" id="jumbo">
                <div className="container mt-5 mb-5">
                    <h2> Good Food Choices are <br /> Good Investment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus nisi blanditiis id quos sit
                        saepe quae repellendus quasi maxime.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus nisi blanditiis id quos sit
                        saepe quae repellendus quasi maxime.</p>
                        
                   
                   <Link to='/table'><button className="btn" id="btnhome">Book Table</button></Link> 
                    <br/>
                    <Link to=''> <span className='fa fa-facebook mx-1'></span></Link>
                    <Link to=''><span className='fa fa-instagram mx-2'></span></Link>
                    <Link to=''><span className='fa fa-youtube mx-2'></span></Link>
                    <Link to=''><span className='fa fa-whatsapp mx-2'></span></Link>

                </div>

            </div>
        </>
    );
}

export default Jumbo;