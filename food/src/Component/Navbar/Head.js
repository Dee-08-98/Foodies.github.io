import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Navbar/Head.css'
import { Link } from 'react-router-dom';
import '../Jumbo/PagesJumbo'

function Head({ size , login}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-body-tertiary">
                <div className="container">

                    <a className="navbar-brand " ><span>Food</span>ies

                    </a>
                    <button className="navbar-toggler shadow-none border-0 text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offnavlabel">
                        <div className="offcanvas-header text-dark border-bottom">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Food<span>ies</span></h5>
                            <button type="button" className="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center align-items-center  flex-grow-1 pe-3">
                                <Link to='/'><li className="nav-item">
                                    <a className="nav-link active" aria-current="page" >Home</a>
                                </li></Link>
                                <Link to='/menu'> <li className="nav-item">
                                    <a className="nav-link mx-2" >Menu</a>
                                </li></Link>
                                <Link to='/about'> <li className="nav-item">
                                    <a className="nav-link mx-2" >About</a>
                                </li></Link>
                                <Link to='contact'>
                                    <li className="nav-item">
                                        <a className="nav-link mx-2">Contact</a>
                                    </li>
                                </Link>
                                <Link to='/table'>
                                    <li className="nav-item">
                                        <a className="nav-link mx-2">Table</a>
                                    </li>
                                </Link>

                                <Link to='/Gallery'>
                                    <li className="nav-item">
                                        <a className="nav-link mx-2">Gallery</a>
                                    </li>
                                </Link>

                                <Link to='/cart'>
                                    <li className="nav-item">
                                        <a className="nav-link mx-2">Cart
                                            <sup className='mx-1' id='supp'>{size}</sup>
                                        </a>
                                    </li>
                                </Link>

                            </ul>
                            <hr className='d-lg-none' />

                            <div className='d-flex justify-content-center align-items-center gap-3'>
                                <Link to='/login'><a className='text-black' id='login'>{login}</a></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Head;

