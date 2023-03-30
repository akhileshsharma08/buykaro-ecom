import '../App.css'
import SingleProd from "./SingleProd";
import 'react-loading-skeleton/dist/skeleton.css'
import React, { useState }  from 'react'
import { CartData } from '../Context/Context';
import {Triangle} from 'react-loader-spinner'
import Carausel from './Carausel';

const Home = () => {
  const { products,loading } = CartData()
  const [sorted,setSorted] = useState([])
  
  const HandleSorted=(CateItem)=>{
   let updatedItem=products.filter((curElement)=>{
    return curElement.category ===CateItem
  })
  setSorted(updatedItem)
  }
 

  return (
    <div className='my-5 py-2 '>   
     {/* <h1 className='text-center capitalize '> Store Clearance Sale is Live </h1> */}
     <Carausel/>
     <h4 className=' my-2 mx-5'> Most Trending Products</h4>
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
  )
}

export default Home
