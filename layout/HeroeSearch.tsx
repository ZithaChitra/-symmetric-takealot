import React from 'react'
import Link from 'next/link'

import ImageWrapper from '../components/ImageWrapper'
import Departments from '../components/Departments'

import menu from '../public/icons/header/menu-white.svg'
import search from '../public/icons/header/search-white.svg'




/**
 * Ok i could have named this component better.
*/


const HeroeSearch = () => {

  return (
    <div className='bg-tal-blue py-[8px] px-3 hidden md:block'>
      <div className='lg:max-w-7xl lg:mx-auto px-[8px]'>
        <div className='flex lg:gap-5'>

          <div className='hidden lg:block'> 
            <Departments />
          </div>

          <div className='grow'>

            <div className='flex gap-5 mb-2'>
              <div className='lg:hidden'>
                <ImageWrapper src={menu} />
              </div>

              <div className='grow'>
                <form action="#" method="post" className='rounded-md overflow-hidden'>

                  <div className='flex rounded-md overflow-hidden'>

                    <input type="text" placeholder='Search for products, brands'
                      className='grow h-[30px] py-2 pl-[13px] pr-2 focus:outline-none text-[13px]' />

                    <div>
                      <select name="Department" className='h-[30px] text-[13px] pl-[13px] bg-light-gray'>
                        {departments.map(dep => {
                          return (
                            <option value={dep.value} key={dep.value}>
                              {dep.title}
                            </option>
                          )
                        })}
                      </select>
                    </div>

                    <button className='flex justify-center items-center bg-dark-gray-extra w-[50px] h-[30px]'>
                        <ImageWrapper src={search} width='w-4' height='h-4'/>
                    </button>
                  </div>


                </form>
              </div>
            </div>


            <div>
              <ul className='flex h-7 bg-light-gray text-[13px] rounded-md overflow-hidden'>
                {sec_navlinks.map((link, index) => {
                  return (
                    <li key={index}
                      className='grow flex justify-center items-center last:border-0 border-r-gray-800 cursor-pointer hover:text-tal-blue'>
                      {link}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroeSearch




const sec_navlinks = [

  'Fresh Fashion',
  'Homemade',
  'Thanksalot Sale',
  'Winter',
  'Exclusive To Takealot',
  'New to Takealot',
  'Brands Store',
  'Clearance'

]


const departments = [
  {
    title: 'All Departments',
    value: 'all'
  },
  {
    title: 'Baby & Toddler',
    value: '10'
  },
  {
    title: 'Beauty',
    value: '29'
  },
  {
    title: 'Books',
    value: '3'
  },
  {
    title: 'Cameras',
    value: '14'
  },
  {
    title: 'Camping & Outdoors',
    value: '21'
  },
  {
    title: 'Cellphones and Wearables',
    value: '16'
  },
  {
    title: 'Computers & Tablets',
    value: '13'
  },
  {
    title: 'Fashion',
    value: '25'
  },
  {
    title: 'Gaming',
    value: '2'
  },
  {
    title: 'Garden, Pool & Patio',
    value: '23'
  },
  {
    title: 'Health',
    value: '28'
  },
  {
    title: 'Home & Kitchen',
    value: '12'
  },
  {
    title: 'Luggage and Travel',
    value: '19'
  },
  {
    title: 'Movies & Series',
    value: '1'
  },
  {
    title: 'Music',
    value: '5'
  },
  {
    title: 'Office & Stationery',
    value: '18'
  },
  {
    title: 'Pets',
    value: '17'
  },
  {
    title: 'Sport',
    value: '11'
  },
  {
    title: 'TV, Audio & Video',
    value: '15'
  },
  {
    title: 'Toys',
    value: '7'
  },
  {
    title: 'Vouchers',
    value: '9'
  },

]


