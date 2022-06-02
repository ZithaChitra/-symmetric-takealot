import Image from 'next/image'
import Link from 'next/link'

import ImageWrapper from '../components/ImageWrapper'
import HeroeSearch from './HeroeSearch'

import menuIcon from '../public/icons/header/menu.svg'
import searchIcon from '../public/icons/header/search.svg'
import cartIcon from '../public/icons/header/cart.svg'
import cartwIcon from '../public/icons/header/cart-white.svg'
import heartIcon from '../public/icons/header/heart.svg'
import logo_sm from '../public/icons/header/logo-sm.svg'





const Navbar = () => {
    return (
        <div className='bg-white'>
            <nav className="flex items-center lg:max-w-7xl lg:mx-auto h-16  px-3">
                <div className="md:hidden  flex justify-between items-center w-full h-full">

                    <div className='cursor-pointer'>
                        <ImageWrapper src={menuIcon} alt='mobile nav toggle' />
                    </div>

                    <div className='cursor-pointer'>
                        <ImageWrapper src={logo_sm} height='h-8' width='w-36' alt='mobile logo' />
                    </div>

                    <div className="flex">
                        <div className='cursor-pointer'>
                            <ImageWrapper src={searchIcon} alt='search icon' />
                        </div>
                        <div className='ml-2 cursor-pointer'>
                            <ImageWrapper src={cartIcon} alt='search icon' />
                        </div>
                    </div>

                </div>



                <div className="hidden md:flex justify-between items-center w-full h-full">

                    <div className="flex items-center">
                        <Link href='/'>
                            <div className='mr-6 cursor-pointer'>
                                <ImageWrapper src={logo_sm} height='h-9' width='w-44' alt='mobile logo' />
                            </div>
                        </Link>

                        <Link href='#'>
                            <a className='text-sm text-dark-gray hover:text-tal-blue hover:underline'>help</a>
                        </Link>

                    </div>

                    <div className="flex items-center h-full">
                        <div>
                            {pri_links.map(link => {

                                return (
                                    <Link href={link.url} key={link.title} >
                                        <a className='first:border-0 border-l h-full px-2 hover:text-tal-blue hover:underline text-sm text-dark-gray'>
                                            {link.title}
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className='flex justify-center ml-1'>
                            <div className='flex justify-center items-center h-8 w-8 bg-red-400 rounded-full cursor-pointer'>
                                <ImageWrapper src={heartIcon} />
                            </div>

                            <div className='flex justify-center items-center ml-2     h-8 w-14 bg-green-800 rounded-[16px] cursor-pointer'>
                                <ImageWrapper src={cartwIcon} />
                                <span className='text-white ml-1'>0</span>
                            </div>
                        </div>


                    </div>

                </div>
            </nav >

            <HeroeSearch />
        </div>
    )
}

export default Navbar




const pri_links = [
    {
        title: 'Login',
        url: '#'
    },
    {
        title: 'Register',
        url: '#'
    },
    {
        title: 'Orders',
        url: '#'
    },
    {
        title: 'My Account',
        url: '#',
        sec_links: [
            {
                title: 'My Account',
                url: '#'
            },
            {
                title: 'Track Order',
                url: '#'
            },
            {
                title: 'Returns',
                url: '#'
            },
            {
                title: 'Credit and Funds',
                url: '#'
            },
            {
                title: 'Product Reviews',
                url: '#'
            },
            {
                title: 'Invoices',
                url: '#'
            },
            {
                title: 'Personal Details',
                url: '#'
            },
            {
                title: 'Digital Library',
                url: '#'
            },
            {
                title: 'Help',
                url: '#'
            },
        ]
    },
]
