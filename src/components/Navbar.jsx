// Modules
import React, { useRef } from 'react'

// Source Files
import barIcon from '../assets/bars-icon.svg'
import xIcon from '../assets/x-mark.svg'
import logo from '../assets/logo.svg'

const Navbar = () => {
    // ===========================================================================
    // -- Navbar height change functionality
    // ===========================================================================

    const navbar = useRef(null)

    window.onscroll = function changeHeight() {
        if(navbar.current) {
        
        if(document.documentElement.scrollTop > 20) {
            navbar.current.classList.add("sticky-nav")
        } else {
            navbar.current.classList.remove("sticky-nav")
        }

        }
    }


    // ===========================================================================
    // -- Nav Menu Items color change functionality
    // ===========================================================================

    const liElements = useRef([])

    function changeColors() {
        liElements.current.forEach((element, index) => {
            if(element) {
                element.classList.toggle("red")
            }
        })
    }

    // ===========================================================================
    // -- Mobile Nav open and close functionality
    // ===========================================================================

    const mobileNav = useRef(null)

    function openNav() {
        if(mobileNav.current) {
            mobileNav.current.style.left = "0"
        }
    }

    function closeNav() {
        if(mobileNav.current) {
            mobileNav.current.style.left = "-100%"
        }
    }


    // ===========================================================================
    // -- Nav Menu Data
    // ===========================================================================

    const navItems = [
        {
        label: "home",
        link: "#home",
        className: "nav-link"
        },
        {
        label: "about",
        link: "#about",
        className: "nav-link"
        },
        {
        label: "services",
        link: "#services",
        className: "nav-link"
        },
        {
        label: "reviews",
        link: "#reviews",
        className: "nav-link"
        },
        {
        label: "contact",
        link: "#contact",
        className: "nav-link"
        },
    ]

    return (
        <>
            <header ref={ navbar }>
                <div className="container">
                    <nav>
                        <div className='logo'>
                            <div>
                                <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 35.166L25.1156 10.0456V0L0 25.1236V35.166Z" fill="#6A4DF4"/>
                                    <path d="M10.8812 35.1658L36 10.0454V1.60449L10.8812 26.7281V35.1658Z" fill="#6A4DF4"/>
                                    <path d="M22 35.1658L47.1188 10.0454V1.60449L22 26.7281V35.1658Z" fill="#6A4DF4"/>
                                </svg>
                            </div>

                            <h1>Brand Logo</h1>
                        </div>

                        <ul className='desktop-nav-list'>
                            { navItems.map(({ label, link, className }, key) => (
                                <li key={ key } id={ `link-${key + 1}` }>
                                    <a href={ link } className={ className } ref={ (el) => (liElements.current[key] = el) }>
                                        { label }
                                    </a>
                                </li>
                            )) 
                            }
                        </ul>

                        <button className='nav-btn' onClick={ changeColors }>Browse More</button>
                        
                        <div className="mobile-menu-btn" onClick={ openNav }>
                            {/* <img className='bars-icon' src={ barIcon } alt="bars-icon"/> */}

                            {/* <div className="hamburger-icon">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div> */}

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20">
                                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </div>
                    </nav>
                </div>

                <div className="mobile-nav" ref={ mobileNav }>
                    <div className="close-btn" onClick={ closeNav }>
                        <img className='x-icon' src={ xIcon } alt="x-icon"/>
                    </div>

                    <ul className='mobile-nav-list'>
                        { navItems.map(({ label, link, className }, key) => (
                            <li key={ key } id={ `link-${key + 1}` }>
                                <a href={ link } className={ className } onClick={ closeNav }>
                                    { label }
                                </a>
                            </li>
                        )) 
                        }
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar