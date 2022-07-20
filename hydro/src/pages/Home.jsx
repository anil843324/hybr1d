import React, { useEffect, useState ,useContext } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
import { DataContext } from '../context/DataContext';
//<MoonLoader />
const Home = () => {

    const [queryData, setQueryData] = useState([]);
    const [loading, setLoading] = React.useState(false);
    
    const {inputData} = useContext(DataContext)
    let [color, setColor] = useState("#36D7B7");
    


    const queryUser = async () => {

         
        try {
            setLoading(true)
            const response = await fetch(
                `https://hn.algolia.com/api/v1/search?query=${inputData}`
            );
            const data = await response.json();
            setQueryData(data.hits);
            setLoading(false)
        } catch (error) {
            console.log("anil erro",error)
           
        }
    };

    useEffect(() => {

        let timeout = setTimeout(() => {
            queryUser()
            console.log(queryData)
        }, 500)

        return () => clearTimeout(timeout)

    }, [inputData])





    return (
        <>
          {/* <SearchData/> */}
      
            {loading ? <SyncLoader color={color}  className="loadingSpinner" size={20} /> : <div className='searchContienr' >
                { queryData.length>0 && queryData.map((news) => {
                    return (
                        <>
                        { news.title &&
                        <div key={news.objectID}
                        onClick={()=> handleDiv}
                        >
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
                        </div>

                    }
                    </>
                    )
                })}

            </div>}


        </>
    )
}

export default Home