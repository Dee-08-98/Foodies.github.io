import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Component/AddressSec/AddressSec.css'
function AddressSec(props) {
    const [add, setAddMob] = useState(false)
    const [Land, setAddLand] = useState(false)
    const addone = () => {
        setAddMob(!add)
    }
    const addtwo = () => {
        setAddLand(!Land)
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-6 ">
                            <label id='hl' for="validationCustom01" class="form-label mx-3">Full Name (Required)*</label>
                            <input type="text" class="form-control " id="validationCustom01" placeholder='Enter Name' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-6">
                            <label for="validationCustom02" class="form-label mx-3"> Mobile Number</label>
                            <input type="number" class="form-control" id="validationCustom02" placeholder='Mobile Number ' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-6 mt-4">
                            <label for="validationCustom02" class="form-label mx-3">House No.,Building Name (Required)*</label>
                            <input type="text" class="form-control" id="validationCustom02" placeholder='House No. , Building Name' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-6 mt-4">
                            <label for="validationCustom02" class="form-label mx-3">Road name , Area, Colony (Required)*</label>
                            <input type="text" class="form-control" id="validationCustom02" placeholder='Area , Colony' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-4 mt-4">
                            <label for="validationCustom04" class="form-label mx-3">Choose City</label>
                            <select class="form-select" id="validationCustom04" required>
                                <optgroup label='Your City...'>
                                    <option>Delhi</option>
                                    <option>Noaida</option>
                                    <option>Greater Noaida</option>
                                    <option>Faridabad</option>
                                    <option>NCR</option>
                                </optgroup>
                            </select>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-4 mt-4">
                            <label for="validationCustom05" class="form-label mx-3">Pin Code</label>
                            <input type="Number" class="form-control" id="validationCustom05" placeholder='Pin Code' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-4 mt-4">
                            <label for="validationCustom05" class="form-label mx-3">State</label>
                            <input type="text" class="form-control" id="validationCustom05" placeholder='Your State' required></input>

                        </div>
                        {/* ========================= */}
                        {
                            add ? <div class="col-md-6 mt-4">
                                <label for="validationCustom02" class="form-label mx-3">Alternate Mobile Number</label>
                                <input type="text" class="form-control" id="validationCustom02" placeholder='Alternate Mobile' required></input>

                                <Link> <span onClick={() => addone()}> - Cancle this</span> </Link>

                            </div>

                                : <Link> <span id='plus' className='mt-4' onClick={() => addone()}> + <span id='alt1' className='mx-2' > Add Alternate Phone Number </span></span> </Link>
                        }
                        {/* ========================= */}
                        {
                            Land ? <div class="col-md-6 mt-4">
                                <label for="validationCustom02" class="form-label mx-3"> Add Nearby Famous Shop / Mall / Landmark </label>
                                <input type="text" class="form-control" id="validationCustom02" placeholder='LandMark' required></input>

                                <Link> <span onClick={() => addtwo()}> - Cancle this </span> </Link>

                            </div>

                                : <Link> <span id='plus' className='mt-4' onClick={() => addtwo()}> + <span id='alt' className='mx-2' >Add Nearby Famous Shop / Mall / Landmark </span></span> </Link>

                        }
                        {/* ========================= */}
                        <div class="col-12 mt-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                <label id='check' class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>

                            </div>
                        </div>
                        {/* ========================= */}
                        <div class="col-12 mt-4">
                            <button class="btn btn-primary" type="submit"> Next .....</button>
                        </div>
                        {/* ========================= */}
                        <div class="col-12 mt-4">
                            <Link to='/cart'><button class="btn btn-primary" >.....Go Back </button></Link>
                        </div>
                        {/* ========================= */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddressSec;