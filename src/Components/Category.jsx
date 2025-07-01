import React, { useContext, useEffect } from 'react'
import { getData } from '../Context/DataContext';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const { categoryOnlyData } = getData();
 const navigate = useNavigate()
    // useEffect(() => {
    //     fetchAllProducts()
    // }, [])

    return (
        <>
            <section className="bg-[#101829]">
                <div className="container flex  lg:gap-7 gap-3.5 items-center justify-center py-7 px-4 mx-auto">
                    {
                        categoryOnlyData?.map((item, index) => {
                            return <div key={index}>
                                <button onClick={()=>navigate(`/category/${item}`)} className='bg-gradient-to-r from-pink-500 to-blue-500 px-3 py-2 rounded-md cursor-pointer uppercase  text-white '>{item}</button>
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Category
