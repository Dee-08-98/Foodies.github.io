import React from 'react';

function Validation(getData) {

    let errors = {}

    if(!getData.usrName){
        errors.usrName = "Name Required"
    }
    else if(getData.usrName.length < 5){
        errors.usrName = "Name must be more than 5 charaacter"
    }
    else if(!getData.usrContact){
        errors.usrContact = "Contact number Required"
    }
    else if(getData.usrContact.length < 10){
        errors.usrContact = "Contact number must be more 10 charaacter"
    }

    return (
        <div>
            
        </div>
    );
}

export default Validation;