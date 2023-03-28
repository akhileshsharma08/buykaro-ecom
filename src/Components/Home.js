import '../App.css'
import SingleProd from "./SingleProd";
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React, { useEffect, useState } from 'react'
import { CartData } from '../Context/Context';

const Home = () => {
  const { products,loading } = CartData()
  
const Loading =()=>{
  return (
    <>
   <h2>loading.....</h2>
    {/* <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div className="col-md-3"><Skeleton height={300} width={200}  /></div>
    <div className="col-md-3"><Skeleton height={300} width={200} /></div>
    <div className="col-md-3"><Skeleton height={300} width={200} /></div>
    <div className="col-md-3"><Skeleton height={300} width={200} /></div>
    </SkeletonTheme> */}
    </>
  )
}

  return (
    <div className=' mt-5 mb-5 mx-4'>   
       <div className="choosecategory d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-dark text-capitalize mx-2">men's clothing</button>
          <button className="btn btn-outline-dark text-capitalize me-2">women's clothing</button>
          <button className="btn btn-outline-dark text-capitalize me-2">jewellery </button>
          <button className="btn btn-outline-dark text-capitalize me-2">electronics </button>
        </div>
      <div className="productList d-flex justify-content-around align-self-center flex-wrap border-2 my-4 ">
        {products.map((prod) => {
          return (
            <>
            {
            loading ?
            <Loading/>:
              <SingleProd prod={prod} key={prod.id} />
             }
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Home
