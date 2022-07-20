import React, { useState, useContext, useEffect } from 'react'
import "./Navbar.css"

import { useNavigate, Link, useParams } from "react-router-dom"

import { FcSearch } from "react-icons/fc"

import { IoMdClose } from "react-icons/io"
// import { InfoData } from '../InfoData'
// import SearchData from '../SearchData'

const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false)

    const fetchData = useNavigate()
    const par = useParams()
    const [inputData, setInputData] = useState('');



   




    return (
        <>

            <nav className='main-nav'>

                {/*  1st  logo part  */}
                <div className="logo"
                    onClick={() => navigate("/")}
                >
                    <h2>
                        <span>H</span>ybr
                        <span>1</span>d
                    </h2>
                </div>
                {/* 2nd  menu part */}
                {/*  */}
                <div className={showMediaIcons ? "menu-link  mobile-menu-link" : "menu-link"} >
                    <ul>
                        <li>
                            <div className='searchdiv'>

                                <input type="text" value={inputData}

                                    placeholder="Search anythings..."
                                    onChange={(e) => { setInputData(e.target.value) }} />

                                {
                                    inputData ? <IoMdClose onClick={() => { setInputData("") }} className='searchicon' /> : <FcSearch className='searchicon' />
                                }


                            </div>


                        </li>

                    </ul>

                </div>

                {/*  3rd social media links */}

                <div className='social-media'>

                    <ul className='social-media-desktop'>


                        <li>
                            <a href="https://portfolio2-ten-chi.vercel.app/" target="_anil">

                                <img src="./portfolio.png" alt="portfoliologo" className='potfilioimg' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/anil-kumar-7311a3211/" target="_anil">

                                <img src="./linkedin.png" alt="linkedinlogo" className='potfilioimg' />

                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/anil843324" target="_anil">

                                <img src="./github.png" alt="githublogo" className='potfilioimg' />

                            </a>
                        </li>

                    </ul>


                    {/* hamburger menu start */}
                    <div className='hamburger-menu'>

                        {/* <GiHamburgerMenu
                            style={{ cursor: "pointer" }}
                            onClick={() => { setShowMediaIcons(!showMediaIcons) }}
                        /> */}
                        <div className='searchdiv'>

                            <input type="text" value={inputData}

                                placeholder="Search anythings..."
                                onChange={(e) => { setInputData(e.target.value) }} />
                            <FcSearch className='searchicon' />
                        </div>
                    </div>
                </div>
            </nav>

        

        </>
    )
}

export { Navbar }