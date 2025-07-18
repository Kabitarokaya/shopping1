import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../assets/Loading4.webm'
import Breadcrums from '../Components/Breadcrums'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../Context/CartContext'

function SingleProduct() {
  const [SingleProduct, setSingleProduct] = useState('')
  const params = useParams()
  const {addToCart} = useCart()
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`)
      const product = res.data.product;
      setSingleProduct(product)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  const OriginalPrice = Math.round(SingleProduct.price + (SingleProduct.discount / 100))

  return (
    <>
      {
        SingleProduct ? <div className='px-4 pb-4 md:px-0 '>
          <Breadcrums title={SingleProduct.title} />

          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
            {/* products image */}
            <div className="w-full">
              <img src={SingleProduct.image} alt={SingleProduct.title} className='rounded-2xl w-full object-cover' />
            </div>
            {/* product detail */}
            <div className="flex flex-col gap-6">
              <h1 className='md:text-3xl font-bold text-gray-800'>{SingleProduct.title}</h1>
              <div className="text-gray-700">{SingleProduct.brand?.toUpperCase()}/{SingleProduct.category?.toUpperCase()}/{SingleProduct.model}</div>
              <p className='text-xl text-red-600 font-bold '>${SingleProduct.price} <del className='text-gray-600'>${OriginalPrice}</del> <span className='bg-red-500 text-white p-2 px-4 rounded-2xl'>{SingleProduct.discount}% discount</span></p>

              <p className='text-gray-600 '>{SingleProduct.description}</p>

              {/* quantity selector */}
              <div className="flex items-center gap-4">
                <label htmlFor="" className='text-sm font-medium text-black'>Quantity:</label>
                <input type="number" min={1} value={1} className='w-20  border border-gray-400 rounded-lg px-4 py-1 focus:outline-none focus:ring-2 text-black focus:ring-blue-500' />

              </div>

              <div className="flex items-center gap-4 mt-4">
                <button onClick={()=> addToCart(SingleProduct)} className='px-6 gap-4  py-2 flex items-center  rounded-md last: text-white text-lg bg-red-600 '> <IoCartOutline className='w-6 h-6'/>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
          :
          <div className='flex items-center justify-center h-screen'>
            <video muted autoPlay loop>
              <source src={Loading} type='video/webm' />
            </video>
          </div>
      }

    </>
  )
}

export default SingleProduct
