import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./InfoData.css"
const InfoData = () => {
  // get id params
  const { id } = useParams();

  const [objData, setObjData] = useState([]);

  useEffect(() => {

    const  fetchApi = async () => {
    
      const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);

      const datas = await response.json();

      setObjData(datas.children);
      
    };
      fetchApi().catch((error) => {
     
         console.log(error) 
      
    });
  }, [id]);

  console.log(objData);
  console.log(id);
  return (
    
        <div className='mainContainer'>
          { objData.length!==0 && objData.slice(0, 15).map((ele) => {
           
            return (
              
                <div key={ele.id} className="childContainer">
                <h1 >Item : {ele.author}</h1>
                <h3 >points: {ele.text}</h3>
              
                </div>
            );
          })}
          
        </div>
  )
};

export default InfoData;