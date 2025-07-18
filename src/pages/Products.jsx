import React, { useEffect, useState } from 'react'
import FilterSection from '../Components/FilterSection';
import Loading from '../assets/Loading4.webm'
import ProductCart from '../Components/ProductCart';
import Pagination from '../Components/Pagination';
import Lottie from 'lottie-react';
import notfound from "../assets/notfound.json"
import { getData } from '../Context/DataContext';
const Products = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 6000])
  const [page, setPage] = useState(1)


  useEffect(() => {
    fetchAllProducts()
    window.scrollTo(0,0)
  }, [])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    
  }
  const handleBrandChange = (e) => {
    setBrand(e.target.value)
    
  }

  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
  }


  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toUpperCase()) &&
    (category === "All" || item.category === category) &&
    (brand === "All" || item.brand === brand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]

  )
  const dynamicPage = Math.ceil(filteredData?.length / 8)

  return (
    <>
      <section className="py-5">
        <div className="container px-4 mb-10 mx-auto">
          {
            data?.length > 0 ? (
              <div>
                <div className='flex gap-8 '>
                  <FilterSection search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />

                  {
                    filteredData?.length > 0 ? (
                      <div className='flex flex-col justify-center items-center'>
                        <div className='grid md:grid-cols-2 w-full sm:grid-cols-1 lg:grid-cols-4 gap-7 mt-10 '>
                          {
                            filteredData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                              return <ProductCart key={index} product={product} />
                            })
                          }
                        </div>
                        <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage} />
                      </div>
                    ) : (
                      <div className='flex justify-center items-center md:h-[600px] md:w-[900px] mt-10'>
                        <Lottie animationData={notfound} classID='w-[500px] ' />

                      </div>
                    )
                  }

                </div>


              </div>
            ) : (
              <div className='flex items-center justify-center h-[400px]'>
                <video muted autoPlay loop>
                  <source src={Loading} type='video/webm' />
                </video>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Products
