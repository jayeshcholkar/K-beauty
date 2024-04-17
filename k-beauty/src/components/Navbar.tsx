"use client"
import Image from 'next/image'
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import BannerImage from './BannerImage';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

function Navbar() {
    let isLoggedIn = true
    let routes = usePathname()
    let protectedRoutes = ['/']
    const [scrollEffect, setScrollEffect] = useState('')
    function isScrolledStart() {
        const scrollTop = document.documentElement.scrollTop;
        return scrollTop > 99;
    }

    function handleScroll() {
        if (isScrolledStart()) {
           setScrollEffect('nav-section-scroll-effect');
        } else {
            setScrollEffect('');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`main-section ${isLoggedIn && protectedRoutes.includes(routes) ? "" : '!relative'}`}>
                <div className='nav-offer'>
                    <div className='container'>
                        <p>FREE, FAST SHIPPING FOR ALL UAE ORDERS OVER AED 100</p>
                    </div>
                </div>
                <div className='nav-section'>
                    <div className='container'>
                        <div className={`flex justify-between pt-4 px-2 ${scrollEffect}`}>
                            <div className='w-[153px] md:flex hidden'>
                            </div>
                            <div>
                                {/* logo */}
                                <Link href={'/'}>
                                <Image placeholder='blur' blurDataURL='/logo.svg' className='logo' src={'/logo.svg'} alt={'logo'} width={216} height={59} />
                                </Link>
                            </div>
                            <div className='nav-icon'>
                                {/* icons */}
                                <div>
                                <Link href='/login'>
                                    <Image src={'/profile.svg'} alt='' height={27} width={27} />
                                </Link>
                                </div>
                                <div>
                                    <Image src={'/search.svg'} alt='' height={27} width={27} />
                                </div>
                                <div>
                                    <Image src={'/heart.svg'} alt='' height={27} width={27} />
                                </div>
                                <div>
                                    <Image src={'/cart.svg'} alt='' height={27} width={27} />
                                </div>
                            </div>
                        </div>
                        <div className='nav'>
                            <ul className='flex nav-links'>
                                <li className={`nav-links-text ${isLoggedIn && protectedRoutes.includes(routes) ? "" : 'hover:text-[#FF9966]'}`}>
                                    SHOP ALL
                                </li>
                                <li className={`nav-links-text ${isLoggedIn && protectedRoutes.includes(routes) ? "" : 'hover:text-[#FF9966]'}`}>
                                    NEW
                                </li>
                                <li className={`nav-links-text ${isLoggedIn && protectedRoutes.includes(routes) ? "" : 'hover:text-[#FF9966]'}`}>
                                    BRANDS
                                </li>
                                <li className={`nav-links-text ${isLoggedIn && protectedRoutes.includes(routes) ? "" : 'hover:text-[#FF9966]'}`}>
                                    VALUE SETS
                                </li>
                                <li className={`nav-links-text ${isLoggedIn && protectedRoutes.includes(routes) ? "" : 'hover:text-[#FF9966]'}`}>
                                    BLOGS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
         {isLoggedIn && protectedRoutes.includes(routes) && <BannerImage/>}
        </div>
    )
}

export default Navbar
