import React from 'react';
import '../Dessert1/Dessert1.css'
import { Link } from 'react-router-dom';
import Dessert from '../ProductDessert'
function Dessert1(props) {
    return (
        <>
      <div className='container mt-4'>
                <div className='row' id='Dessert1'>
                    <h2>Our Awsome Dessert</h2>

                    {
                        Dessert.map((items) => {
                            return (<>
                                <div className='col-lg-4 col-md-6 col-sm-6'>

                                    <div className='ads'>
                                        <img src={items.image}></img>
                                    </div>
                                    <div className='bds'>
                                        <h6>{items.title}</h6>
                                        <p>{items.about}</p>
                                        <h5>{items.price}</h5>
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

export default Dessert1;