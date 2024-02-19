import React from 'react';
import '../AboutFoodies/AboutFoodies.css'
import Asset from '../Asset/ch2.webp'
import Assets from '../Asset/f8.jpeg'

function AboutFoodies(props) {
    return (
       <>
       <div className='container'>
        <div className='row' >
            <div className='col-lg-3  d-none d-lg-block'>
                <img src={Asset}></img>
            </div>
            <div className='col-lg-3   col-md-6'>
            <img src={Assets} className=''></img>
            </div>
            <div className='col-lg-6 col-md-6'>
                <h3 className='head3 mt-3'><span>About</span> <br/> Foodies</h3>
                <p className='para1 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore dolor
                    explicabo voluptas, dolorum assumenda cum aut numquam harum delectus quo eveniet sit nostrum quos
                    iste quod iusto voluptates non velit rerum odio! Incidunt commodi odit quia quasi ullam voluptatem.
                </p>
                <p className='para2 mt-4'><span>Mon - Fri </span> 8 AM - 11 PM</p>

                <p className='para3 mt-4'> 8521589940 <br/> 8709345623</p>
            </div>
        </div>
       </div>
       </>
    );
}

export default AboutFoodies;