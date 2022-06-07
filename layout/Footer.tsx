import React from 'react'
import Link from 'next/link'

import ImageWrapper from '../components/ImageWrapper'

import a_express from '../public/icons/footer/american_express.svg'
import d_club from '../public/icons/footer/diners_club_international.svg'
import m_card from '../public/icons/footer/mastercard.svg'
import ozow from '../public/icons/footer/ozow.svg'
import payfast from '../public/icons/footer/payfast.svg'
import visa from '../public/icons/footer/visa.svg'
import play_store from '../public/icons/footer/app_store.svg'
import app_store from '../public/icons/footer/play_store.svg'
import facebook from '../public/icons/footer/icons8-facebook.svg'
import twitter from '../public/icons/footer/icons8-twitter-circled.svg'
import instagram from '../public/icons/footer/icons8-instagram.svg'



const paymentIcons = [a_express, d_club, m_card, ozow, payfast, visa]

const Footer = () => {

    return (
        <div className='mt-5 bg-white pt-5'>

            <div className='lg:flex lg:justify-center mb-5'>

                {footerLinks.map((link, index) => {

                    return (
                        <div className='hidden lg:block w-44' key={index}>
                            <h3 className='h-10 font-bold text-[15px]'>{link.title}</h3>

                            <ul>
                                {link.subcategories.map((subcat, index) => {
                                    return (
                                        <li key={index} className='h-5 mb-1 text-dark-gray hover:underline hover:text-tal-blue text-sm'>
                                            <Link href='#'>
                                                {subcat}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}


                <div className='md:flex justify-around lg:flex-col lg:justify-start'>

                    <div className='pb-5'>
                        <h3 className='text-center lg:h-10 mb-3 font-bold text-sm md:text-left lg:text-left lg:text-[15px]'>Download Our Apps</h3>

                        <div className='flex justify-center gap-2'>
                            <ImageWrapper src={play_store} width='w-[135px]' height='h-10' />
                            <ImageWrapper src={app_store} width='w-[135px]' height='h-10' />
                        </div>
                    </div>


                    <div className='lg:flex lg:flex-col lg:justify-start lg:items-start'>
                        <div>
                            <h3 className='text-center md:text-left mb-1 font-bold text-sm lg:text-[15px]'>Follow Us</h3>
                            <div className='flex justify-center md:justify-start mb-4'>
                                <ImageWrapper src={facebook} width='w-[25px]' height='h-[25px]' />
                                <ImageWrapper src={twitter} width='w-[25px]' height='h-[25px]' />
                                <ImageWrapper src={instagram} width='w-[25px]' height='h-[25px]' />
                            </div>
                        </div>

                        <div>
                            <h3 className='text-center mb-1 font-bold text-sm lg:text-[15px]'>Takealot.group</h3>
                            <Link href='#'>
                                <span className='block text-center md:text-left md:text-sm md:mb-1 text-dark-gray hover:underline hover:text-tal-blue text-xs'> Superbalist </span>
                            </Link>
                            <Link href='#'>
                                <span className='block text-center md:text-left md:text-sm text-dark-gray hover:underline hover:text-tal-blue text-xs'> Mr D Food </span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


            <div className='py-5 h-40 lg:h-20 bg-tal-blue w-full flex flex-col items-center justify-center'>
                <div className='flex mb-3'>
                    {paymentIcons.map((icon, index) => {
                        return (
                            <div className='mx-3' key={index}>
                                <ImageWrapper src={icon} key={index} width='w-11' height='h-3.5' />
                            </div>
                        )
                    })}

                </div>
                <div className='flex justify-center'>
                    <span className='text-gray-rgba'>&copy; demo-site 2022</span>
                </div>
            </div>
        </div>
    )
}

export default Footer



const footerLinks = [
    {
        title: 'Shop',
        subcategories: [
            'Daily Deals',
            'App Only Deals',
            'Clearance Sale',
            'Gift Vouchers',
        ]
    },
    {
        title: 'Help',
        subcategories: [
            'Help',
            'Contact Us',
            'Submit an Idea',
            'Suggest a Product',
            'Shipping & Delivery',
            'Takealot Pickup Points',
            'Returns',
        ]
    },
    {
        title: 'Account',
        subcategories: [
            'My Account',
            'Track Order',
            'Returns',
            'Personal Details',
            'Invoices',
            'Digital Library',
        ]
    },
    {
        title: 'Company',
        subcategories: [
            'About Us',
            'Careers',
            'Sell on Takealot',
            'Deliver for Takealot',
            'Press & News',
            'Competitions',
            'Terms and Conditions',
            'Privacy Policy',
            'Human Rights Statement',
            'Speak Up Process',
        ]
    },
]




