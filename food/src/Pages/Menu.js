import React from 'react';
import PagesJumbo from '../Component/Jumbo/PagesJumbo';
import Footer from '../Component/Footer/Footer';
import List from '../Component/Product';

import '../Pages/Menu.css'


import { Link } from 'react-router-dom';
import { useState } from 'react';


function Menu({addToCart}) {

    const [trending, setTrending] = useState(List)

    const filtercate = (x) => {
        const fltcat = List.filter((pro) => {   
            return pro.category === x
        })
        setTrending(fltcat)
    }

    return (
        <>
            <PagesJumbo title='Menu'></PagesJumbo>

                <div className='container' id='menu'>
                    <div className='row'>
                        <div className='col-lg-12 text-center' id='menubutton'>
                            <button className='btn mb-2 mx-2' onClick={() => filtercate('breakFast')}>Breakfast</button>
                            <button className='btn mb-2 mx-2' onClick={() => filtercate('lunch')}>Lunch</button>
                            <button className='btn mb-2 mx-2' onClick={() => filtercate('dinner')}>Dinner</button>
                            <button className='btn mb-2 mx-2' onClick={() => filtercate('drinks')}>Drinks</button>
                            <button className='btn mb-2 mx-2' onClick={() => filtercate('dessert')}>Dessert</button>
                            <button className='btn mb-2 mx-2' onClick={() => filtercate('sweets')}>Sweets</button>
                            <button className='btn mb-2 mx-2' onClick={() => filtercate('wine')}>Wine</button>

                        </div>
                        <div className='container mt-4'>
                            <div className='row' id='Dessert1'>
                                {
                                    trending.map((items, i) => {
                                        return (
                                        <>
                                            <div className='col-lg-4 col-md-6 col-sm-6' key={i}>

                                                <div className='ads' id='ads'>
                                                    <img src={items.image}></img>
                                                </div>
                                                <div className='bds'>
                                                    <h6>{items.title}</h6>
                                                    <p>{items.about}</p>
                                                    <h5> <span style={{color:'black',fontWeight:'700'}}>Rs :- </span> {items.price} /</h5>
                                                    
                                                    <button className='mb-5 ' onClick={()=> addToCart(items)} id='btn'>Add to Cart</button>
                                                </div>
                                            </div>
                                        </>
                                        )
                                    })
                                }
                            </div>
                        </div>


                    </div>
                </div>
            <Footer></Footer>


        </>
    );
}

export default Menu;