import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';
import { getData } from '../Context/DataContext';
const Carousel = () => {
    const { data, fetchAllProducts } = getData()
    console.log(data)
    useEffect(() => {
        fetchAllProducts()
    }, [])

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
                <AiOutlineArrowLeft className='h-[40px] w-[40px] m-[1px]' style={{ ...style, display: "block", borderRadius: "50px", background: "#505050", color: 'white', position: 'absolute', padding: '2px', left: '50px' }} onMouseOver="this.style.backgroundColor= '#555'" />
            </div>
        )
    }

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
                <AiOutlineArrowRight className='h-[40px] w-[40px] m-[1px]' style={{ ...style, display: "block", borderRadius: "50px", background: "#000", color: 'white', position: 'absolute', padding: '2px', right: '50px' }} onMouseOver="this.style.backgroundColor= '#555'" />
            </div>
        )
    }
    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
    };
    return (
        <>
            <Slider {...settings}>
                {
                    data?.slice(0, 20).map((item, index) => {
                        return <div key={index} className='bg-gradient-to-r py-5 from-[#0f0407] via-[#c52191] to-[#c3a9c0] -z-10'>
                            <div className="flex  gap-10 justify-center h-[600px] items-center px-4">
                                <div className='space-y-6 '>
                                    <h3 className='text-orange-500 font-semibold font-sans text-sm '>Powering Your World with the Best in Electronics</h3>
                                    <h1 className='text-4xl font-bol uppercase md:w-[500px] text-white line-clamp-3'>{item.title}</h1>
                                    <p className='md:w-[500px] line-clamp-3 text-gray-200 pr-7 '>{item.description}</p>
                                    <button className='bg-gradient-to-r from-red-500 to-purple-600 txt-white px-4 rounded-md cursor-pointer mt-2 py-2'>Shop Now</button>
                                </div>

                                <div>
                                    <img src={item.image} alt={item.title} className='rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-orange-400' />
                                </div>
                            </div>
                        </div>
                    })
                }
              

            </Slider>  
            <Category/> 
             </>
    )
}

export default Carousel
