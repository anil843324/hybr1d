import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import HashLoader from "react-spinners/HashLoader";

import "./InfoData.css"


const InfoData = () => {
    // get id params
    const { id } = useParams();
    const [loading, setLoading] = React.useState(true);
    const [objData, setObjData] = useState([]);
    let [color, setColor] = useState("#36D7B7");


    useEffect(() => {

        const fetchApi = async () => {

            const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);

            const datas = await response.json();

            setObjData(datas.children);
            setLoading(!loading)
        };
        fetchApi().catch((error) => {

            console.log(error)
            setLoading(!loading)

        });
    }, [id]);

    console.log(objData);
    console.log(id);
    return (
        <>
           


            {loading ? <HashLoader color={color} loading={loading} className="loadingSpinner" size={70} /> : <div className='mainContainer'>
                {objData.length !== 0 && objData.slice(0, 20).map((ele) => {

                    return (

                        <div key={ele.id} className="childContainer">
                            <h2 >Title: {ele.title}</h2>
                             <h2>Points: {ele.points}</h2>
                            <div dangerouslySetInnerHTML={{ __html: ele.text }} />
                        </div>
                    );
                })}

            </div>}



        </>
    )
};

export {InfoData};