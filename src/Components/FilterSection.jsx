import React from 'react'
import { getData } from '../Context/DataContext';

const FilterSection = ({ search, setSearch, brand, setBrand, priceRange, setPriceRange, category, setCategory, handleCategoryChange, handleBrandChange }) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <>
      <section className="py-5">
        <div className="bg-gray-100 container mx-auto border mt-10 p-4 rounded-md h-max">
          <input type="text" placeholder='Search....'
            value={search}
            onChange={(e) => setSearch(e.target.value)} className='bg-white p-2 rounded-md border-gray-400 border-2 ' />

          {/* category only data */}
          <h1 className='mt-5 font-semibold text-xl'>Category</h1>
          <div className="flex flex-col gap-2 my-3">
            {
              categoryOnlyData?.map((item, index) => {
                return <div key={index} className='flex gap-2'>
                  <input type="checkbox" name={item} checked={category === item} value={item} onChange={handleCategoryChange} />
                  <button className='cursor-pointer uppercase text-sm'>{item}</button>
                </div>
              })
            }
          </div>

          {/* brand data only */}
          <h1 className='mt-5 font-semibold text-xl '>Brand</h1>
          <select name="" id="" className='bg-white w-full p-2 my-4 border-gray-200 rounded-md ' value={brand} onChange={handleBrandChange} >
            {
              brandOnlyData?.map((item, index) => {
                return <option key={index} value={item}>{item.toUpperCase()}</option>
              })
            }
          </select>
          {/* price range */}
          <h1 className='mt-5 font-semibold text-xl '>Price Range</h1>

          <div className='flex flex-col gap-2 '>
            <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>

            <input type="range" min="0" max="6000" name='' id='' value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
          </div>
          <button className=" text-white bg-gradient-to-b from-red-500 to-blue-600 rounded-md px-3 py-1 mt-5 cursor-pointer" onClick={() => { setSearch(''); setCategory('All'); setBrand('All'); setPriceRange([0, 6000]) }}>Reset Filters</button>


        </div>
      </section>
    </>
  )
}

export default FilterSection
