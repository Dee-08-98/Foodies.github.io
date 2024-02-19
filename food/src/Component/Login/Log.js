import React, { useState } from 'react';
import '../Login/Log.css'
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom'
function Log(props) {
    const [show, setShow] = useState(false)
    const [log, setLog] = useState({
        userLoginEmail: '',
        userLoginPassWord: ''
    })

    const handleClick = () => {
        setShow(!show)
    }

    const submitHandler = (e) => {
        setLog({ ...log, [e.target.name]: e.target.value })
    }

    const sendData = (e) => {
        e.preventDefault()

        try {
            axios.post("http://localhost:8800/login", log)
            .then((res)=>{
                if(res.data=='exist' ){
                    setLog({
                        userLoginEmail: '',
                        userLoginPassWord: ''
                    })
                    alert('Login Sucessfull')
                }
                else if(res.data=='notexist'){
                    alert('User not sign In')
                }
            })
        } 
        catch (error) {
            alert('you enter wrong details')
        }

    }

    return (
        <>
            <div className='container-fluid' id='bg'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 '></div>
                        <div className='col-lg-4 mt-5 p-5' id='logcontnr'>
                            <h2 className=' log d-flex justify-content-center'>LOGIN</h2>
                            <form onSubmit={sendData}>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input name='userLoginEmail' value={log.userLoginEmail} onChange={submitHandler} type='email' className='form-control' id='eml'></input>
                                </div>
                                <div className='form-group mt-3 mb-5'>
                                    <label>Password</label>
                                    <input name='userLoginPassWord' value={log.userLoginPassWord} onChange={submitHandler} type={show ? 'text' : 'password'} className='form-control' id='psw'  >
                                    </input>
                                    <Link><span id='show' onClick={handleClick}>{show ? 'Hide' : 'Show'}</span></Link>
                                </div>



                                <Link> <a className='text-primary text-warning text-decoration-underline '>Forgot Password</a> </Link><br />

                                <div class="col-12 mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="invalidCheck" required></input>
                                        <label class="form-check-label text-white" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>

                                    </div>
                                </div>
                                <button type='submit' className='btn btn-success mt-4 w-100' id='logg'>
                                    LOGIN HERE
                                </button>
                            </form>

                            <p className='mt-4'>Don't have an account ? <Link to='/signup'><a className='text-warning text-decoration-underline'>SignUp Now</a></Link></p>

                        </div>

                    </div>
                    <div className='col-lg-4 '></div>

                </div>
            </div>
        </>
    );
}

export default Log;