import React from 'react';
import '../MasterChef/MasterChef.css'
import chef from '../Asset/chef.webp'
import chef2 from '../Asset/manager.avif'
import chef3 from '../Asset/c4.avif'
import chef4 from '../Asset/ch2.webp'
import { Link } from 'react-router-dom';


function MasterChef(props) {
    return (
        <>
            <div className='container mt-5' >
                <div className='row'id='chef'>
            <h3> Our Master Chef</h3>
                    <div className='col-lg-3 col-md-6 col-sm-6' id='mst'>
                    <div className='card'>
                            <div className='card-body'>
                            <img src={chef2}></img>
                            </div>
                            <div className='card-title'>
                                <h6>Tom Cook</h6>
                              <Link to=''> <span className='fa fa-facebook mx-1'></span></Link> 
                                <Link to=''><span className='fa fa-instagram mx-2'></span></Link>
                                <Link to=''><span className='fa fa-youtube mx-2'></span></Link>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6' id='mst1'>
                    <div className='card'>
                            <div className='card-body'>
                            <img src={chef}></img>
                            </div>
                            <div className='card-title'>
                                <h6>Stephen</h6>
                                <Link to=''> <span className='fa fa-facebook mx-1'></span></Link> 
                                <Link to=''><span className='fa fa-instagram mx-2'></span></Link>
                                <Link to=''><span className='fa fa-youtube mx-2'></span></Link>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6' id='mst2'>
                    <div className='card'>
                            <div className='card-body'>
                            <img src={chef3}></img>
                            </div>
                            <div className='card-title'>
                                <h6>Tim David</h6>
                                <Link to=''> <span className='fa fa-facebook mx-1'></span></Link> 
                                <Link to=''><span className='fa fa-instagram mx-2'></span></Link>
                                <Link to=''><span className='fa fa-youtube mx-2'></span></Link>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6' id='mst3'>
                        <div className='card'>
                            <div className='card-body'>
                            <img src={chef4}></img>
                            </div>
                            <div className='card-title'>
                                <h6>Harry</h6>
                                <Link to=''> <span className='fa fa-facebook mx-1'></span></Link> 
                                <Link to=''><span className='fa fa-instagram mx-2'></span></Link>
                                <Link to=''><span className='fa fa-youtube mx-2'></span></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default MasterChef;