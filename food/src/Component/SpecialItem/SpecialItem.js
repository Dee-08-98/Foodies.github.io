import React from 'react';
import '../SpecialItem/SpecialItem.css'
import one from '../Asset/ch12.jpeg'
import two from '../Asset/m8.jpeg'
import three from '../Asset/b7.jpeg'
import { Link } from 'react-router-dom';


function SpecialItem(props) {
    return (
        <>
            <div className='container mt-4'>
                <div className='row' id='specialitem'>
                    <h2>Our Special Dishes</h2>
                    <div className='col-lg-4'>
                        <div className='a'>
                            <img src={one}></img>
                        </div>
                        <div className='b'>
                            <h6>Fish Fry</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus nisi blanditiis id quos sit
                                saepe quae repellendus quasi maxime.</p>
                            <h5>500 Rupees Only /</h5>
                            <Link to='/menu'> <button className='btn'> Shop Now </button></Link>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='a'>
                            <img src={two}></img>
                        </div>
                        <div className='b'>
                            <h6>Mutton Fry</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus nisi blanditiis id quos sit
                                saepe quae repellendus quasi maxime.</p>
                            <h5>700 Rupees Only /</h5>
                            <Link to='/menu'> <button className='btn'> Shop Now </button></Link>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='a'>
                            <img src={three}></img>
                        </div>
                        <div className='b'>
                            <h6>Burger</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus nisi blanditiis id quos sit
                                saepe quae repellendus quasi maxime.</p>
                            <h5>200 Rupees Only /</h5>
                            <Link to='/menu'> <button className='btn'> Shop Now </button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SpecialItem;