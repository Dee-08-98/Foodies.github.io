import React from 'react';
import '../ContactInformation/ContactInformation.css'
function ContactInformation(props) {
    return (
       <>
        <div className='container'>
            <div className='row' id='contactInformation'>
                <h2> Contact Information </h2>
                <div className='col-lg-4'>
                    <h6 className='mt-3'>Address</h6>
                    <p>244 , Gali no. - 15 , Vinay Nagar , Faridabad , Hariyana , 121013 </p>
                </div>
                <div className='col-lg-4'>
                <h6 className='mt-3'>Email</h6>
                <p>dkkr30907@gmail.com</p>
                </div>
                <div className='col-lg-4'>
                <h6 className='mt-3'>Mobile No..</h6>
                <p>8709345623</p>
                </div>
            </div>
        </div>
       </>
    );
}

export default ContactInformation;