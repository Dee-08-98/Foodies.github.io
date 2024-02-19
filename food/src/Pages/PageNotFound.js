import React from 'react';

function PageNotFound(props) {
    return (
        <div>
            <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                <h3 style={{color:'black',fontWeight:'900'}}>Error : 404 </h3>
                <h2 style={{color:'black',fontWeight:'900'}}>Page Not Found</h2>
                <button className='mt-3' style={{color:'white',fontWeight:'900',backgroundColor:'black',border:'none',padding:'7px 15px',letterSpacing:'1px'}} > Home_Page </button>
            </div>
        </div>
    );
}

export default PageNotFound;