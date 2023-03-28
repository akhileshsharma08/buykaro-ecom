import { useState, useEffect } from "react";
import { CartData } from "../Context/Context";
import {BsTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart,setCart,products } = CartData();
  const [total, setTotal] = useState();
 



  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <>
      <div className="container mb-4">
        <h4 className="mycart mt-4"> Cart Details </h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <><tr key={item.id}>
                  <th scope="row">1</th>
                  <td><img src={item.image} alt={item.title} width={60} height={60} className="rounded-circle border border-secondary mb-2" />
                  </td>
                  <td>{item.title.substring(0, 12)}</td>
                  <td>${item.price}</td>
                  <td><Link><BsTrashFill onClick={() => {setCart(cart.filter((c) => c.id !== products.id)) }} className="fs-2 text-danger"/></Link></td>
                </tr> </>)
            })}
          </tbody>
        </table>
        <div className="d-flex carttotalbox justify-content-end mb-4">
          <div >
            <h3 className="flex-col">Total: <span>${Math.floor(total)}</span> </h3>
            <button className="add btn btn-warning btn-lg" onClick={() => alert("payment done")}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
