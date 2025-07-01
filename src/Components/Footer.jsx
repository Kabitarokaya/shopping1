import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

            <footer className="py-5 bg-[#101828] ">
                <div className='text-gray-50/80 container mx-auto'>
                    <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                        <div className='max-w-80 '>
                            <Link to={'/'}> <h1 className='font-bold text-3xl py-4 text-white'><span className='text-blue-600  font-serif'>S</span>hopping</h1></Link>

                            <p className='text-sm pb-3'>Powering Your World with the Best in Electronics.
                            </p>
                            <p className='text-sm'>

                                123 Electronics St, Style City, NY 10001
                                <br />

                                Email: support@Zaptro.com
                                <br />

                                Phone: (123) 456-7890                            </p>

                        </div>
                        <div>
                            <p className='text-2xl font-bold'>Customer Service</p>
                            <ul className='mt-3 flex flex-col gap-2 text-sm'>
                                <li> <a href="#">Contact Us</a> </li>
                                <li> <a href="#">Shipping & Returns </a></li>
                                <li> <a href="#">FAQs </a></li>
                                <li> <a href="#">Order Tracking </a></li>
                                <li> <a href="#">Size Guide </a></li>
                            </ul>
                        </div>

                        <div>
                            <p className='text-2xl font-bold'>Follow Us
                            </p>
                            <div className=' py-4 mt-3 flex items-center gap-5 '>
                                <FaFacebook className='size-[20px]' />
                                <FaInstagram className='size-[20px]' />
                                <FaTwitter className='size-[20px]' />
                                <FaPinterest className='size-[20px]' />
                            </div>
                        </div>

                        <div className='max-w-80'>
                            <p className='text-2xl font-bold'>Stay in the Loop</p>
                            <p className='mt-3 text-sm'>
                                Subscribe to our newsletter for inspiration and special offers.
                            </p>
                            <div className='flex items-center mt-4'>
                                <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email address' />
                                <button className='flex items-center justify-center bg-red-600 text-white font-semibold  h-9 px-4 aspect-square rounded-r'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* bottom section */}
                    <div className="mt-8 border-t py-5  border-gray-700 pt-6 text-center text-[18px]">
                        <p>&copy; {new Date().getFullYear()} <span className='text-blue-600' >Shopping</span>. All rights reserved</p>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer
