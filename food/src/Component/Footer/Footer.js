import React from 'react';
import '../Footer/Footer.css'
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <>
            <div className='container-fluid ' id='foodFooter'>
                <div className='row'  id='fotr4'>
                    <div className='col-lg-6 col-md-6 col-sm-6 mb-5'id='fotr'>
                        <h3>Address</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elitlorem Lorem ipsum dolor sit.
                        </p>
                        <h6><i className="fa fa-home"></i> Badarpur Border Near toll plaza besides Bharat Petroleum</h6>
                        <h6><i className="fa fa-phone"></i> +1222 4545 / +91 8709345623</h6>
                        <h6><i className="fa fa-envelope-open"></i> Foodies108@gmail.com</h6>

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 mb-5' id='fotr1'>
                        <h3>Open Hours</h3>
                        <p id='fotrp'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elitlorem Lorem ipsum dolor sit.
                        </p>
                        <h6> <span>Monday - Friday</span> :- 08 AM - 11 PM</h6>
                        <h6> <span>Saturday - Sunday</span> :- 09 AM - 02 PM</h6>
                        <h6><span>Free Home Delivery</span> :- In Radius of 5 Km </h6>

                    </div>
                    <div className='col-lg-12' id='fotr2'>
                        <h2><span>Stay</span>Connected</h2>
                        <div class="row">
                            <div class="footer">
                                <p>
                                   <Link> <i className="fa fa-facebook mx-3" id='fa1'></i></Link>
                                    <Link><i className="fa fa-instagram mx-3" id='fa2'></i></Link>
                                  <Link><i className="fa fa-twitter mx-3"id='fa3'></i></Link>
                                   
                                   <Link> <i className="fa fa-whatsapp"id='fa4'></i></Link>
                                </p>
                            </div>
                            <h5 className="fa fa-copyright" id="copy"> All Copyright Reserved Foodies </h5>

                            <h6 id='footerDesign'> Designed By :- Deepak Kumar</h6><br />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;