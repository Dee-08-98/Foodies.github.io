import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../SignUp/Sign.css'
import axios from 'axios';
function Sign(props) {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [sign, setSign] = useState({
        userLoginName: '',
        userLoginEmail: '',
        userLoginPassWord: '',
        userLoginConfPassWord: ''

    })

    const handleClick = () => {
        setShow(!show)
    }
    const handleClick2 = () => {
        setShow2(!show2)
    }

    const submitHandler = (e) => {
        setSign({ ...sign, [e.target.name]: e.target.value })
    }

    const sendData = (e) => {
        e.preventDefault()

        try {
            if (sign.userLoginConfPassWord === sign.userLoginPassWord) {
                axios.post("http://localhost:8800/signup", sign)
                    .then((res) => {
                        if (res.data == 'exist') {
                            alert('user already exist')
                        }
                        else if (res.data == 'notexist') {
                            alert('Registration sucessfull')
                            setSign({
                                userLoginName: '',
                                userLoginEmail: '',
                                userLoginPassWord: '',
                                userLoginConfPassWord: ''
                            })

                        }
                    })
            }
            else {
                alert('Password and confirmPassword are not matched . Please try again . ')
            }

        } catch (error) {
            alert('you enter wrong details')
        }
    }
    return (
        <div id='bg'>
            <div className='container ' >
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4 p-5 ' id='contnr'>
                        <h2 className='signn d-flex justify-content-center'>SIGN UP</h2>

                        <form onSubmit={sendData}>

                            <div className='form-group'>
                                <label>User Name</label>
                                <input type='text' className='form-control ' id='one2' name='userLoginName' value={sign.userLoginName} onChange={submitHandler} ></input>
                            </div>
                            <div className='form-group mt-2'>
                                <label>Email</label>
                                <input type='email' className='form-control ' id='one3' name='userLoginEmail' value={sign.userLoginEmail} onChange={submitHandler}  ></input>
                            </div>
                            <div className='form-group mt-2'>
                                <label>Password</label>
                                <input type={show ? 'text' : 'password'} className='form-control ' id='one4' name='userLoginPassWord' value={sign.userLoginPassWord} onChange={submitHandler} ></input>
                                <Link to=''><p id='show1' onClick={handleClick}>{show ? 'Hide' : 'Show'}</p></Link>

                            </div>
                            <div className='form-group mt-2'>
                                <label> Confirm Password</label>
                                <input type={show2 ? 'text' : 'password'} className='form-control ' id='one5' name='userLoginConfPassWord' value={sign.userLoginConfPassWord} onChange={submitHandler} ></input>
                                <Link><span id='show2' className='pt-0' onClick={handleClick2}>{show2 ? 'Hide' : 'Show'}</span></Link>
                            </div>

                            <div class="col-12 mt-5">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                    <label class="form-check-label text-white" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>

                                </div>
                            </div>

                            <button type='submit' className='btn btn-success mt-4 w-100' id='sign'>
                                SIGN UP NOW
                            </button>

                        </form>
                        <p className='mt-4'>Have an Account ? <Link to='/login'><a className='text-warning text-decoration-underline' >Login Here</a></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign;