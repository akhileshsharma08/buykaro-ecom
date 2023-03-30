import React, { createContext, useContext, useEffect, useState } from 'react'

 const Cart = createContext()

//  main context start 
const Context = ({ children }) => {
  const [products,setProducts]= useState([])
  const [cart,setCart] = useState([])
  const [loading,setLoading]= useState(true)
  const [total,setTotal] = useState("")

  useEffect(()=>{
 
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
 
 
   
// fetchdata()
  },[])
  
console.log(products,"product context")

  return (
    <Cart.Provider value={{ products,cart,setCart,loading,setLoading,total,setTotal }}>
      {children}
    </Cart.Provider>
  )
}

export default Context;

export function CartData(){
  return useContext(Cart)
}
