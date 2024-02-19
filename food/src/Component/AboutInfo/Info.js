import React from 'react';
import '../AboutInfo/Info.css'
function Info(props) {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6  mt-5'>
                        <p className='InfoPara'><span>18</span> <br/> YEARS OF EXPERIENCED</p>
                        <p className='InfoPara'><span>50</span>  <br/> STAFF</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6 mt-5'>
                    <p className='InfoPara'><span>100</span> <br/> MENUS / DISHES</p>
                        <p className='InfoPara'><span>15,000</span>  <br/> HAPPY CUSTOMERS </p>
                    </div>
                    <div className='col-lg-4 col-md-12 mt-5 col-sm-12' id='infoPara'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore dolor
                    explicabo voluptas, dolorum assumenda cum aut numquam harum delectus quo eveniet sit nostrum quos 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;