import React from 'react'
import { useCart } from '../Context/CartContext'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuNotebookText } from 'react-icons/lu'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { GiShoppingBag } from 'react-icons/gi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import emptyCart from '../assets/empty-cart.png'
const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart()
  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0)
  const navigate = useNavigate()
  const { user } = useUser()
  return (
    <>
      <section className="py-5">
        <div className="container mt-10 mb-5 mx-auto">
          {
            cartItem.length > 0 ? <div>
              <h1 className="font-bold text-2xl">My Cart ({cartItem.length})</h1>
              <div>
                <div className="mt-10">
                  {cartItem.map((item, index) => {
                    return <div key={index} className='bg-gray-300/50 p-5 rounded-md flex items-center justify-between mt-3 w-full'>
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.title} className='w-[100px] object-cover h-[100px] rounded-md' />
                        <div>
                          <h1 className='w-[300px] line-clamp-2'>{item.title}</h1>
                          <p className='text-red-600 font-semibold text-lg'>${item.price}</p>
                        </div>

                      </div>
                      <div className="bg-red-700 text-white flex gap-4 p-2 rounded-md font-bold text-2xl ">
                        <button onClick={() => updateQuantity(cartItem, item.id, "decrease")} className="cursor-pointer"><FiMinus /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(cartItem, item.id, "increase")} className="cursor-pointer"><FiPlus /></button>
                      </div>
                      <span onClick={() => deleteItem(item.id)} className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'>
                        <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer' />
                      </span>

                    </div>
                  })}
                </div>
                <div className="grid grid-cols-2 gap-20">
                  <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
                    <h1 className="text-gray-800 font-bold text-xl">
                      Delivery Information
                    </h1>
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="">Full Name</label>
                      <input type="text" placeholder='Enter Your Name' className='p-2 rounded-md 'value={user?.fullName || ""} />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="">Address</label>
                      <input type="text" placeholder='Enter Your Address' className="p-2 rounded-md" value={location?.country} />

                    </div>
                    <div className="flex w-full gap-5">
                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">State</label>
                        <input type="text" placeholder='Enter Your State.' className='p-2 rounded-md w-full' value={location?.state} />
                      </div>
                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">PostCode</label>
                        <input type="text" placeholder='Enter Your PostCode.' className='p-2 rounded-md w-full' value={location?.postcode} />
                      </div>
                    </div>
                    <div className="flex w-full gap-5">

                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">Country</label>
                        <input type="text" placeholder='Enter Your Country.' className='p-2 rounded-md w-full' value={location?.country} />
                      </div>
                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" placeholder='Enter Your Phone Number.' className='p-2 rounded-md w-full' />
                      </div>
                    </div>


                    <button type='submit' className='bg-gradient-to-t from-blue-500 to-pink-500 mt-5 rounded-md py-1 px-4 cursor-pointer text-white'>Submit</button>

                    <div className="flex items-center justify-center w-full text-gray-700">
                      --------OR---------
                    </div>
                    <div className="flex justify-center">
                      <button type='submit' className="bg-gradient-to-t from-blue-500 to-pink-500 text-white px-3 py-2 rounded-md">
                        Detect Location
                      </button>
                    </div>
                  </div>


                  <div className="border bg-white border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                    <h1 className="text-gray-800 font-bold text-xl">Bill Details</h1>
                    <div className="flex justify-between items-center">
                      <h1 className='flex gap-1 items-center text-gray-700'><span><LuNotebookText />Items Total</span></h1>
                      <p>${totalPrice}</p>
                    </div>
                    <div className="flex justifu-between items-cente">
                      <h1 className="flex items-center text-gray-700">
                        <span><MdOutlineDeliveryDining /></span>Delivery Charge
                      </h1>
                      <p className='text-red-500 font-semibold '><span className='text-gray-600 line-through'>$25</span>Free</p>
                    </div>
                    <div className="flex justifu-between items-cente">
                      <h1 className="flex items-center text-gray-700">
                        <span><GiShoppingBag /></span>Handling Charge
                      </h1>
                      <p className='text-red-500 font-semibold '>$5</p>
                    </div>
                    <div className="flex justify-between mt-3.5 items-center">
                      <h1 className="text-lg  flex items-center font-bold text-gray-700">
                        <span><MdOutlineDeliveryDining /></span>Grand Total
                      </h1>
                      <p className='font-semibold text-lg '>${totalPrice + 5}</p>

                    </div>
                    <div>
                      <h1 className='font-semibold text-gray-700 mt-7'>Apply Promo Code</h1>
                      <div className="flex gap-3 my-5">
                        <input type="text" placeholder='Enter Code' className='p-2 rounded-md w-full ' />
                        <button className='bg-white text-black border border-grat-200 px-4 cursor-pointer py-1 rounded-md '>Apply</button>
                      </div>
                    </div>
                    <button className="bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3">Proceed to CheckOut</button>

                  </div>
                </div>
              </div>
            </div> :
              <div className='flex flex-col gap-4 justify-center items-center h-[600px]'>
                <h1 className="text-red-600/80 font-bold text-5xl ">Oh no! Your Cart is empty.
                  <img src={emptyCart} alt="" className='w-[400px]' />
                  <button onClick={() => navigate('/')} className="bg-red-600 text-white px-4 text-2xl  py-2 rounded-md cursor-pointer">Continue Shopping</button>
                </h1>
              </div>

          }
        </div>
      </section>
    </>
  )
}

export default Cart
