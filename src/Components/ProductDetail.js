import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CartData } from '../Context/Context';
import { AiFillStar } from 'react-icons/ai'
import { FaShippingFast } from 'react-icons/fa'
import ReactImageMagnify from 'react-image-magnify';


const ProductDetail = () => {
  const [detailProduct, setDetailProduct] = useState([])
  const { cart, setCart } = CartData()

  // const {products}= CartData()
  const { id } = useParams()
  useEffect(() => {
    const fetchdata = async () => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
          const productData = data
          setDetailProduct(productData)
        })
    }

    fetchdata()
  }, [])
  const ProductImage = detailProduct.image
  return (
    <div className=''>

      <div className="container my-4">
        <div className="row  d-flex flex-nowrap  justify-content-center align-items-center shadow-lg">
          <div className="col-lg-4 col-sm-4">
            <div className="image p-2">
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: ProductImage
                },
                largeImage: {
                  src: ProductImage,
                  width: 1200,
                  height: 1800
                }
              }} />
            </div>
          </div>
          <div className="col-lg-7 col-sm-7 shadow-lg mx-2 ">
            <div className="description p-2">
              <p className='text-center badge bg-secondary mx-2 mb-1'> {detailProduct.category}</p>
              <h2>{detailProduct.title}</h2>
              <p>{detailProduct.description}</p>
              <p className='my-1 outline-dark'> <span className='badge bg-success'>{Math.floor(Math.random() * 5) + 1}/5 &nbsp;<AiFillStar className='text-warning' /></span>   <span className='text-muted fw-bold'>Rating:{Math.floor(Math.random() * 10000) + 1}</span> <span><img src="https://i1.wp.com/iastoday.in/wp-content/uploads/2017/10/premium-quality.jpg?fit=585%2C527&ssl=1" alt="assured logo" width={50} height={40} /></span></p>

              <h5 className='price fs-2 text-muted'><span>${detailProduct.price}</span><span className='text-danger px-4 fs-4'>{Math.floor(Math.random() * 50) + 1}% Off</span></h5>

              <div className="offerbox">
                <h6> <span className='text-danger fw-bold'>Save Extra with</span>&nbsp;Available Offers</h6>
                <p className="fs-6 text-dark mb-0"> Available offers
                  Bank Offer10% off on ICICI Bank Credit Card Transactions, up to ₹750, on orders of ₹5,000 and above <span className='text-primary fw-bold'>T&C</span></p>
                <p className="fs-6 text-dark mb-0">Bank Offer10% off on ICICI Bank Credit Card EMI Transactions, up to ₹750, on orders of ₹5,000 and above <span className='text-primary fw-bold'>T&C</span></p>
              </div>
              <span>
                {cart.includes(detailProduct) ? (
                  <button
                    className="add remove btn btn-danger btn-lg"
                    onClick={() => setCart(cart.filter((c) => c.id !== detailProduct.id))}
                  >
                    Remove Item
                  </button>
                ) : (
                  <button className="add btn btn-outline-dark btn-lg" onClick={() => setCart([...cart])}>
                    Add Item
                  </button>
                )}
              </span>
              <p className='text-success text-capitalize mt-2'><span><FaShippingFast className='text-success fs-3' /></span>&nbsp;free delivery available <span><FaShippingFast className='text-success fs-3' /></span></p>



            </div>
          </div>

        </div>

      </div>



    </div>
  )
}

export default ProductDetail
