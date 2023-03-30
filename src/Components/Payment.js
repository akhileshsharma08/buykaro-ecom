import React from 'react'
import { CartData } from '../Context/Context';
import Swal from 'sweetalert2'

const Payment = () => {
    const {total,cart} = CartData()

    // console.log(cart,"carttt")
    const HandlePayment =()=>{
        setTimeout(()=>{
            Swal.fire(
                'Payment Done!',
                'Your Order is Placed!',
                'success'
              )
        },1500)
    }

  return (
    <>
      <div className="container my-5 py-5 d-flex justify-content-center align-items-center">
        <div className="paymentDetailbox w-50 card rounded shadow-lg p-5 d-flex justify-content-center align-items-center">
            <img src="/img/rpay.png" alt="payment gateway"  width={250} height={80}/>
            <hr />
            {cart.map((item,index)=>{
                return(
                <div className="detail"key={item.id} >
                    <h5 >{item.title.substring(0, 12)} <span>Price: ${item.price}</span></h5><hr />
                </div>
                )
            })}
            <div className="btnbox   ">
            <h3>Grand Total: ${total}</h3>
                <button className='btn btn-warning btn-lg ' onClick={HandlePayment}> Pay Now</button>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Payment
