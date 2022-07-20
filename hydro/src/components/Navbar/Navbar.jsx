import React, { useState, useContext, useEffect } from 'react'
import "./Navbar.css"

import { useNavigate, Link } from "react-router-dom"

import { FcSearch } from "react-icons/fc"

import { IoMdClose } from "react-icons/io"
// import { InfoData } from '../InfoData'
// import SearchData from '../SearchData'

const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false)

    const fetchData = useNavigate()

    const [inputData, setInputData] = useState('');

    const [queryData, setQueryData] = useState([]);



    const queryUser = async () => {

        try {
            const response = await fetch(
                `https://hn.algolia.com/api/v1/search?query=${inputData}`
            );
            const data = await response.json();
            setQueryData(data.hits);

        } catch (error) {
            console.log(error)

        }
    };

    useEffect(() => {

        let timeout = setTimeout(() => {
            queryUser()
            console.log(queryData)
        }, 1000)

        return () => clearTimeout(timeout)

    }, [inputData])

    const handleEventid = (newsid) => {
        console.log(newsid)
       
        
    }




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

          {/* <SearchData/> */}
                        <div style={{
                            display: 'flex',
                            flexWrap:'wrap',
                            justifyContent:'space-evenly',
                            gap: '1.3rem',
                            cursor: 'pointer'

                        }}>
                        {queryData.map((news) => {
                            return(
                              <div 
                              onClick={() => handleEventid(news.objectID)}
                              style={{width:'180px', 
                              border:'2px solid black', 
                              margin:'2rem'}} key={news.objectID}>
                                <h3>{news.title}</h3>
                                <Link to={`/infodata/${news.objectID}`}>more info</Link>
                              </div>
                            )
                        })}
                        </div>



        </>
    )
}

export {Navbar}