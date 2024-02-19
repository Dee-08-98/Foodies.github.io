import React, { useEffect, useState ,} from 'react';
import Footer from '../Component/Footer/Footer';
// import { data } from '../Component/Specialities/Specialities';
import '../Pages/Cart.css'
import { Link } from 'react-router-dom';

function Cart({ cart }) {
    const [CART, setCART] = useState([])
  
    
    useEffect(() => {
        setCART(cart)
        
    }, [cart])

    return (
        <div>

            {
                CART.length === 0 ?
                    <>
                        <div className="container" id='shopcon'>
                            <div className="a">
                                <h2 id='shop'>
                                    Your Shopping Cart is Empty.
                                </h2>
                                <Link to='/menu'> <button className='shopbtn '> Shop Now </button></Link>
                            </div>
                        </div>
                    </>
                    : <div className="container">
                        <div className="row">
                            {
                                CART.map((itm, itmIndex) => {
                                    return (
                                        <>
                                            <div className="container" key={itmIndex}>
                                                <div className="row" id='sec'>
                                                    <div className="col-lg-12">
                                                        <img src={itm.image} alt="..." />

                                                        <span className='title'>{itm.title}</span>
                                                        <span className='title'>{itm.quantity}</span>

                                                        <span className='butn'>
                                                            <button className='minus'onClick={() => {
                                                                    const _CART = CART.map((item, indx) => {
                                                                        return itmIndex === indx ? { ...item , quantity : item.quantity > 0 ? item.quantity - 1 :0 } : item

                                                                    })
                                                                    setCART(_CART)
                                                                }}>-</button>
                                                            <button className='plus'
                                                                onClick={() => {
                                                                    const _CART = CART.map((item, indx) => {
                                                                        return itmIndex === indx ? { ...item , quantity : item.quantity + 1 } : item

                                                                    })
                                                                    setCART(_CART)
                                                                }}>+</button>

                                                        </span>
                                                        <span className='price'> <span style={{ color: 'green' }}> Rs. </span> {itm.price * itm.quantity}</span>
                                                        <span className=' fa fa-remove' style={{ color: 'red', fontWeight: '900' }}></span>
                                                    </div>


                                                </div>

                                            </div>


                                        </>
                                    )
                                })
                            }
                            <hr className='mt-5'></hr>
                            <div className="col-lg-12 " id='total'>
                                <span className='pt-5'> Total :- {CART.map((total)=>{
                                    return total.price * total.quantity
                                }).reduce((a,b)=>{
                                    return a+b
                                },0)} Only / </span>
                            </div>
                            <div className="col-lg-12 " id='Total'>
                                <Link to='/address'> <button > Next... </button> </Link>
                            </div>
                            <div className="col-lg-12 mt-3 " id='Total2'>
                                <Link to='/menu'> <button  > Shop_More.. </button> </Link>
                            </div>

                        </div>
                    </div>

            }

            <Footer></Footer>

        </div >

    );
}

export default Cart;