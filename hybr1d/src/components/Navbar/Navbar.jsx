import React from 'react'
import "./Navbar.css"
import { FaLinkedin } from "react-icons/fa"




const Navbar = () => {



    return (
        <>

            <nav className='main-nav'>

                {/*  1st  logo part  */}
                <div className='logo'>
                    <h1>Hybr1d</h1>

                </div>
                {/* 2nd  menu part */}
                <div className='menu-link'>
                    <ul>

                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">contact</a>
                        </li>

                    </ul>

                </div>

                {/*  3rd social media links */}

                <div className='socila-media'>

                    <ul className='socila-media-destop'>
                        <li>
                            <a href="https://portfolio2-ten-chi.vercel.app/" target="_anil">

                                <img src="./portfolio.png" alt="portfoliologo" className='potfilioimg' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/anil-kumar-7311a3211/" target="_anil">

                                <img src="./linkedin.png" alt="linkedinlogo" className='potfilioimg'/>

                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/anil843324" target="_anil">

                                <img src="./github.png" alt="githublogo" className='potfilioimg' />

                            </a>
                        </li>

                    </ul>

                </div>




            </nav>

            {/* hero section */}

            <section className='hero-section'>


           <h1>hi hybrid</h1>



            </section>




        </>
    )
}

export default Navbar