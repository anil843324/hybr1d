import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
//<MoonLoader />
const Home = () => {

    const [queryData, setQueryData] = useState([]);
    const [loading, setLoading] = React.useState(true);
    const [inputData, setInputData] = useState("a")
    let [color, setColor] = useState("#36D7B7");



    const queryUser = async () => {

        try {
            const response = await fetch(
                `https://hn.algolia.com/api/v1/search?query=${inputData}`
            );
            const data = await response.json();
            setQueryData(data.hits);
            setLoading(!loading)
        } catch (error) {
            console.log(error)
            setLoading(!loading)
        }
    };

    useEffect(() => {

        let timeout = setTimeout(() => {
            queryUser()
            console.log(queryData)
        }, 1000)

        return () => clearTimeout(timeout)

    }, [inputData])





    return (
        <>
        //  {/* <SearchData/> */}
      
            {loading ? <SyncLoader color={color} loading={loading} className="loadingSpinner" size={30} /> : <div className='searchContienr' >
                {queryData.map((news) => {
                    return (
                        <>
                            <Link to={`/infodata/${news.objectID}`}>
                                <div

                                    style={{
                                        width: '180px',
                                        border: '2px solid black',
                                        margin: '2rem'
                                    }} key={news.objectID}>
                                    <h3>{news.title}</h3>

                                </div>
                            </Link>
                        </>
                    )
                })}

            </div>}


        </>
    )
}

export default Home