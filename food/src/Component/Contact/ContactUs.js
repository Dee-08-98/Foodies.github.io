import React, { useState } from 'react';
import axios from 'axios'
import Asset from '../Asset/b6.jpeg'
import '../Contact/ContactUs.css'
function ContactUs(props) {

    const [getData, setData] = useState({
        usrName: "",
        usrEmail: "",
        usrContact: "",
        usrMessage: ""
    })
    const handleData = (e) => {
        setData({ ...getData, [e.target.name]: e.target.value })

    }
    const submitForm = (e) => {
        e.preventDefault()
       
        try {
            const postData = axios.post("http://localhost:8800/contact", getData)

            if (postData) {
                //    setInterval(() => {
                //     alert('message sent sucessFull')
                //    }, 2000);
                alert('message sent sucessFull')
                setData({
                    usrName: "",
                    usrEmail: "",
                    usrContact: "",
                    usrMessage: ""
                })

            }
            else {
                alert('message sent UnsucessFull')          
                console.log('Message not sent');
            }
        } catch (error) {
            console.log('Something went wromg');
        }

    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6' id='img'>
                        <img src={Asset}></img>
                    </div>
                    <div className='col-lg-6' id='contact'>
                        <h2 >Contact Us</h2>
                        <form>
                            <input type='text' name='usrName' value={getData.usrName} className='form-control  mb-4 mt-5' placeholder='Name' onChange={handleData} required='required'></input>
    
                          

                            <input type='email' name='usrEmail' value={getData.usrEmail} className='form-control mb-4' placeholder='Email' onChange={handleData} required='required'></input>

                            <input type='number' name='usrContact' value={getData.usrContact} className='form-control mb-4' placeholder='Contact' onChange={handleData} required='required'></input>

                         

                            <textarea class="form-control" name='usrMessage' value={getData.usrMessage} placeholder="Write Message" onChange={handleData} rows="5" required='required' >
                            </textarea>
                            <button className='btn btn-danger mt-4' id='msg' onClick={submitForm}>Send Message</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;