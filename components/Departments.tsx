import React from 'react'

import DeptmentSideModal from './DeptmentSideModal'

const Departments = () => {
    return (
        <div className='w-[200px] '>
            <button className='bg-dark-gray-extra h-8 w-full pl-[13px] rounded-md text-white text-left text-[14px]'>
                Shop by Department
            </button>
            <div className='relative'>
                <ul className='z-20 absolute w-full drop-shadow bg-white py-2'>
                    {departments.map((dep, index) => {
                        return (
                            <li key={index}className='h-[20px] cursor-pointer hover:bg-tal-blue hover:text-white pl-[13px] text-[13px] text-dark-gray'>
                                {dep.title}

                                {/* <div className='hidden absolute'>
                                    <DeptmentSideModal />
                                </div> */}
                            </li>   
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Departments





const departments = [
    {
        title: 'Automotive & DIY'
    },
    {
        title: 'Baby & Toddler'
    },
    {
        title: 'Beauty'
    },
    {
        title: 'Books & Courses'
    },
    {
        title: 'Camping & Outdoor'
    },
    {
        title: 'Cellphones & Smartwatches'
    },
    {
        title: 'Fashion & Luggage'
    },
    {
        title: 'Computers & Electronics'
    },
    {
        title: 'Gaming'
    },
    {
        title: 'Garden, Pool & Patio'
    },
    {
        title: 'Groceries & Household'
    },
    {
        title: 'Health & Personal Care'
    },
    {
        title: 'Home & Appliances'
    },
    {
        title: 'Liquor'
    },
    {
        title: 'Office & Stationery'
    },
    {
        title: 'Pets'
    },
    {
        title: 'Sport & Training'
    },
    {
        title: 'Toys'
    },
    {
        title: 'TV, Audio & Media'
    },
]