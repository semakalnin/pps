import React, { useEffect, useState } from 'react'
import logoMobile from '../../assets/imgs/fav.png'
import logo from '../../assets/imgs/fav.png'
import './Navbar.css'

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        let scroll

        const handleScroll = () => {
            cancelAnimationFrame(scroll)

            scroll = requestAnimationFrame(() => {
                const scrolled = window.scrollY > 0
                setIsScrolled(scrolled)
            })
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
            cancelAnimationFrame(scroll)
        }
    }, [])

    useEffect(() => {
        const navbar = document.querySelector('.navbar')

        if (isScrolled) {
            navbar?.classList.add('bg-black')
        } else {
            navbar?.classList.remove('bg-black')
        }
    }, [isScrolled])

    return (
        <nav
            className='navbar navbar-expand-md fixed-top px-2 px-md-5'
            id='navbar'
        >
            <div className='container-fluid px-0'>
                <a href='/'>
                    <img
                        className='navbar-brand d-md-none'
                        style={{ width: '50px' }}
                        src={logoMobile}
                        alt='logo'
                    />
                    <img
                        className='navbar-brand d-none d-md-block'
                        style={{ width: '50px' }}
                        src={logo}
                        alt='logo'
                    />
                </a>
                <a
                    className='btn btn-primary btn-sm ms-md-x1 mt-lg-0 order-md-1 ms-auto p-2'
                    href='#'
                >
                    Get Started Now{' '}
                </a>
                <button
                    className='navbar-toggler border-0 pe-0'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbar-content'
                    aria-controls='navbar-content'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-md-end'
                    id='navbar-content'
                    data-navbar-collapse='data-navbar-collapse'
                >
                    <ul
                        className='navbar-nav gap-md-2 gap-lg-3 pt-x1 pb-1 pt-md-0 pb-md-0'
                        data-navbar-nav='data-navbar-nav'
                    >
                        <li className='nav-item'>
                            {' '}
                            <a
                                className='nav-link lh-xl text-light'
                                href='#home'
                            >
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            {' '}
                            <a
                                className='nav-link lh-xl text-light'
                                href='#about'
                            >
                                About us
                            </a>
                        </li>
                        <li className='nav-item'>
                            {' '}
                            <a
                                className='nav-link lh-xl text-light'
                                href='#service'
                            >
                                Support
                            </a>
                        </li>
                        <li className='nav-item'>
                            {' '}
                            <a
                                className='nav-link lh-xl text-light'
                                href='#pricing'
                            >
                                Pricing
                            </a>
                        </li>
                        <li className='nav-item'>
                            {' '}
                            <a
                                className='nav-link lh-xl text-light'
                                href='#contact'
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
