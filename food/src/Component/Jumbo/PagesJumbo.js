import React from 'react';
import '../Jumbo/PagesJumbo.css'
import { Link } from 'react-router-dom'
import '../Navbar/Head'
function PagesJumbo(props) {
    return (
        <>
            <div className="container-fluid active   bg-primary p-5" id="parent">
                <div className="container mt-5 mb-5" id='innerContent'>
                    <h2> Feel The Difference <br /> Feel The Taste</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus nisi blanditiis id quos sit
                        saepe quae repellendus quasi maxime.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus nisi blanditiis id quos sit
                        saepe quae repellendus quasi maxime.</p>
                    <br />
                    <p id='abou'>
                        <Link to='/'><span id='hom'> Home </span></Link> <span id='abou' > / {props.title}</span>
                    </p>
                </div>

            </div>
        </>
    );
}

export default PagesJumbo;