import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import DepartmentSideModal from './DepartmentSideModal'
import ImageWrapper from './ImageWrapper'

import daily_deals from '../public/images/daily_deals.svg'



const Departments = () => {

    const [isSideModal, setIsSideModal] = useState(false)
    const [activeDep, setActiveDep] = useState<null | any>(null)

    function onHoverHandler(id: number) {


        // alter to use map for constant lookup time
        const dep = departments.filter(dep => {
            if (dep.id == id) return true
        })

        console.log(dep[0])
        setActiveDep(dep[0])
        setIsSideModal(true)
        return
    }

    return (
        <div className=''>
            <button className='w-[200px] bg-dark-gray-extra h-8 pl-[13px] rounded-md text-white text-left text-[14px]'>
                Shop by Department
            </button>
            <div className='relative'>
                <div className='z-20 absolute w-full drop-shadow'>
                    <div className='bg-white flex min-h-[395px]'>
                        <div>
                            <ul className='min-w-[200px] bg-white py-2'>
                                {departments.map((dep, index) => {
                                    return (
                                        <li key={index} onMouseOver={() => onHoverHandler(dep.id)} onMouseLeave={() => setIsSideModal(false)}
                                            className='h-[20px] cursor-pointer hover:bg-tal-blue hover:text-white pl-[13px] text-[13px] text-dark-gray'>
                                            {dep.title}

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div onMouseOver={() => setIsSideModal(true)} onMouseLeave={() => setIsSideModal(false)}
                            className={`${isSideModal ? 'block' : 'hidden'} min-w-[600px] h-[100%]`}>
                            <DepartmentSideModal department={activeDep} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}





export default Departments





const departments = [
    {
        id: 1,
        title: 'Automotive & DIY'
    },
    {
        id: 2,
        title: 'Baby & Toddler'
    },
    {
        id: 3,
        title: 'Beauty'
    },
    {
        id: 4,
        title: 'Books & Courses'
    },
    {
        id: 5,
        title: 'Camping & Outdoor'
    },
    {
        id: 6,
        title: 'Cellphones & Smartwatches'
    },
    {
        id: 7,
        title: 'Fashion & Luggage'
    },
    {
        id: 8,
        title: 'Computers & Electronics'
    },
    {
        id: 9,
        title: 'Gaming'
    },
    {
        id: 10,
        title: 'Garden, Pool & Patio'
    },
    {
        id: 11,
        title: 'Groceries & Household'
    },
    {
        id: 12,
        title: 'Health & Personal Care'
    },
    {
        title: 'Home & Appliances'
    },
    {
        id: 13,
        title: 'Liquor'
    },
    {
        id: 14,
        title: 'Office & Stationery'
    },
    {
        id: 15,
        title: 'Pets'
    },
    {
        id: 16,
        title: 'Sport & Training'
    },
    {
        id: 17,
        title: 'Toys'
    },
    {
        id: 18,
        title: 'TV, Audio & Media'
    },
]
