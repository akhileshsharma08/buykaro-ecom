import React, { createContext, useContext, useEffect, useState } from 'react'

 const Cart = createContext()

//  main context start 
const Context = ({ children }) => {
  const [products,setProducts]= useState([])
  const [cart,setCart] = useState([])
  const [loading,setLoading]= useState(true)

  useEffect(()=>{
    setTimeout(()=>{
  //  const fetchdata= async()=>{
      // setLoading(true)
       fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => {
            const productData =  data
           setProducts(productData)
            setLoading(false)
          })
    // }
    },2000)
 
   
// fetchdata()
  },[])
  
// console.log(products,"product context")

  return (
    <Cart.Provider value={{ products,cart,setCart,loading,setLoading }}>
      {children}
    </Cart.Provider>
  )
}

export default Context;

export function CartData(){
  return useContext(Cart)
}
