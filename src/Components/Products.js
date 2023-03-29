import '../App.css'
import SingleProd from "./SingleProd";
import 'react-loading-skeleton/dist/skeleton.css'
import React, { useState }  from 'react'
import { CartData } from '../Context/Context';
import {Triangle} from 'react-loader-spinner'

const Products = () => {
  const { products,loading } = CartData()
  // const [loading] = useState(true)
  const [sorted,setSorted] = useState([])
  
  const HandleSorted=(CateItem)=>{
   let updatedItem=products.filter((curElement)=>{
    return curElement.category ===CateItem
  })
  setSorted(updatedItem)
  }
 
  return (
    <>
    <div className=' mt-5 mb-5 mx-4 pb-4'>   
       <div className="choosecategory d-flex justify-content-center align-items-center">
          <button onClick={()=>HandleSorted("men's clothing")} className="btn btn-outline-dark text-capitalize mx-2">men's clothing</button>
          <button onClick={()=>HandleSorted("women's clothing")} className="btn btn-outline-dark text-capitalize me-2">women's clothing</button>
          <button onClick={()=>HandleSorted("jewelery")} className="btn btn-outline-dark text-capitalize me-2">jewellery </button>
          <button onClick={()=>HandleSorted("electronics")} className="btn btn-outline-dark text-capitalize me-2">electronics </button>
        </div>
      <div className="productList d-flex justify-content-around align-self-center flex-wrap border-2 my-4 ">
        
        {products.map((prod) => {
          return (
            <>
             {     loading ?
           ( <div className="loadingbox d-flex justify-content-center align-items-center my-5">
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
             ( <SingleProd prod={prod} key={prod.id} />)
             }
            </>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Products
