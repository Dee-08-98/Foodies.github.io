import React from 'react';
import { Link } from 'react-router-dom';
import '../Dinner1/Dinner1.css';
import Dinr from '../ProductDinner'
function Dinner1(props) {
    return (
        <>
      <div className='container mt-4'>
                <div className='row' id='Dinner1'>
                    <h2>Our Dinner Menu</h2>

                    {
                        Dinr.map((itmsdnr) => {
                            return (<>
                                <div className='col-lg-4 col-md-6 col-sm-6'>

                                    <div className='ad'>
                                        <img src={itmsdnr.image}></img>
                                    </div>
                                    <div className='bd'>
                                        <h6>{itmsdnr.title}</h6>
                                        <p>{itmsdnr.about}</p>
                                        <h5>{itmsdnr.price}</h5>
                                        <Link to=''> <button className='btn mb-5'>Add to Cart</button></Link>

                                    </div>
                                </div>
                            </>)
                        })
                    }


                </div>
            </div>
      </>
    );
}

export default Dinner1;