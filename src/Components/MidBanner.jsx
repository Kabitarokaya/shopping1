import React from 'react'

function MidBanner() {
    return (
        <>
            <section className="py-5 bg-gray-100 md:py-24">
                <div className="container relative md:rounded-2xl bg-cover bg-center h-[600px]  mx-auto">
                  <img src="https://zaptro.netlify.app/assets/banner1-DnQF7_gI.jpg" alt=""  className='w-full object-cover h-[600px]  bg-center bg-fixed'/>   <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex h-[600px]  items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"> 
                                Next-Gen Electronics at Your Fingertips
                            </h1>
                            
                            <p className="text-lg md:text-xl  font-bold mb-4">
                                Discover the latest tech innovation with unbeatable with prices and free shipping on all orders.
                            </p>
                            <button className='bg-orange-500 hover:bg-blue-500 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBanner
