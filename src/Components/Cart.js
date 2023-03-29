import { useState, useEffect } from "react";
import { CartData } from "../Context/Context";
import { BsTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

const Cart = () => {
  const { cart, setCart, products ,loading} = CartData();
  const [total, setTotal] = useState();




  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <>
 
    {
    loading ?
    (<div className="loadingbox d-flex justify-content-center align-items-center my-5">
      <Triangle
    height="100"
    width="100"
    color="#4fa94d"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
    </div>)
    : 
  (<div className="container mb-4">
        <h4 className="mycart mt-4"> Cart Details </h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <>
                  <tr key={item.id}>
                    <th scope="row" >{index + 1}</th>
                    <td><img src={item.image} alt={item.title} width={60} height={60} className="rounded-circle border border-secondary mb-2" />
                    </td>
                    <td>{item.title.substring(0, 12)}</td>
                    <td>${Math.round(item.price)}</td>
                    <td><Link><BsTrashFill onClick={() => setCart(cart.filter((c) => c.id !== products.id))} className="fs-2 text-danger" /></Link></td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
        <div className="d-flex carttotalbox justify-content-end mb-4 mx-4">
          <div >
            <h3 className="flex-col">Total: <span>${total}</span> </h3>
            <button className="add btn btn-warning btn-lg" onClick={() => alert("payment done")}>
              Pay Now
            </button>
          </div>
        </div>
      </div>)
    }
     
    </>
  )
}

export default Cart
