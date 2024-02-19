import React, { createContext, useState } from 'react';
import '../Specialities/Specialities.css'
import Product from '../Product'
// import Cart from '../../Pages/Cart';
import { Link } from 'react-router-dom';

function Specialities({ itm }) {

const {image , title , about , price} = itm

    return (
        <>
            <>
                <div className='container mt-4'>
                    <div className='row' id='specialitem'>
                        <div className='col-lg-4'>
                            <div className='a'>
                                <img src={image}></img>
                            </div>
                            <div className='b'>
                                <h6>{title}</h6>
                                <p>{about}</p>
                                <h5>Price : {price} /</h5>
                                <Link to=''> <button className='btn'>Add to Cart</button></Link>

                            </div>
                        </div>
                       
                    </div>
                </div>
            </>
        </>
    );
}

export default Specialities;
