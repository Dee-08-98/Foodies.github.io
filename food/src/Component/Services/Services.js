import React from 'react';
import '../Services/Services.css'
function Services(props) {
    return (
        <>
            <div className='container mt-5'>
                <div className='row mt'id='Services'>
                    <h3 id='headServices'>Catering Services</h3>
                    <div className='col-lg-4 col-md-6 mt-5' >
                        <span className='fa fa-birthday-cake'></span>
                        <h5>Birthday Party</h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore dolor
                            explicabo voluptas, dolorum assumenda cum aut numquam harum delectus quo eveniet sit nostrum quos</p>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-5'>
                        <span className='fa fa-handshake-o'></span>
                        <h5>Buisness Meetings</h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore dolor
                            explicabo voluptas, dolorum assumenda cum aut numquam harum delectus quo eveniet sit nostrum quos</p>
                    </div>
                    <div className='col-lg-4 col-md-12 mt-5'>
                        <span className='fa fa-cutlery'></span>
                        <h5>Weeding Party</h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore dolor
                            explicabo voluptas, dolorum assumenda cum aut numquam harum delectus quo eveniet sit nostrum quos</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;