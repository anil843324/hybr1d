import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { DataContext } from "../context/DataContext";
//<MoonLoader />
const Home = () => {
  const [queryData, setQueryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { inputData } = useContext(DataContext);
  const [color, setColor] = useState("#36D7B7");
  const [isError,setIsError]=useState(false);

  const queryUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${inputData}`
      );
      const data = await response.json();
      setQueryData(data.hits);
      setLoading(false);
    } catch (error) {
      console.log("anil erro", error);
      setIsError(!isError)
      setLoading(false);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      queryUser();
     
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputData]);

  return (
    <>
      {/* <SearchData/> */}

      {loading ? (
        <SyncLoader color={color} className="loadingSpinner" size={20} />
      ) :  isError ? (
        <div className="loadingSpinner">
          <h1>Not Found 😢</h1>
       
        </div>
      ) : (
        <div className="searchContienr">
          {queryData.length > 0 &&
            queryData.map((news) => {
              return (
                <div key={news.objectID}>
                  {news.title && (
                    <div  onClick={() => handleDiv}>
                      <Link to={`/infodata/${news.objectID}`}>
                        <div
                          style={{
                            width: "180px",
                            borderRadius: "10px",
                            margin: "2rem",
                            padding: "2rem",
                            backgroundColor: "#8EC5FC",
                            backgroundImage:
                              "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
                            fontSize: "16px",
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                          }}
                         
                        >
                          <h3>{news.title}</h3>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Home;
