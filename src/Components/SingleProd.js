import React from 'react'
import { CartData } from '../Context/Context'
import { Link } from 'react-router-dom';

const SingleProd = ({ prod }) => {
  const { cart, setCart } = CartData()
  // console.log(cart,"cartdata formproduct")
 
  const HandleAddItem=(e)=>[
e.preventDefault(),
setCart([...cart, prod]),

  ]

  return (

    <div className="mybox1 shadow-lg my-2 p-4 justify-content-center align-items-center min-h-32" key={prod.id} style={{ width: "17rem" }}>
      <img src={prod.image} alt='product name' className='' width={200} height={200} />
      <h5 className='text-muted text-center'>{prod.title.substring(0, 12)}</h5>

      <div className="pricebox  d-flex justify-content-center align-items-center">
        <p className='text-center badge bg-secondary mx-2'> {prod.category}</p>
        <p className='text-center badge bg-secondary'>Stocks:{prod.rating.count}</p>
      </div>
        <h5 className='price  text-muted text-center '>Price: <span className=''>${prod.price}</span>
      <div className="priceandbtn d-flex justify-content-around align-items-center mt-2">
          <span className='mx-2'>
            {cart.includes(prod) ? (
              <button
                className="add remove btn btn-primary"
                onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
              >
                Remove
              </button>
            ) : (
              <button className="add btn btn-outline-dark" onClick={HandleAddItem}>
                Add
              </button>
            )}
            <Link to={`/product/${prod.id}`}>
            <button className="add btn btn-outline-dark mx-1" >
              View
            </button>
            </Link>
            
          </span>
      </div>
        </h5>

    </div>


  )
}

export default SingleProd
