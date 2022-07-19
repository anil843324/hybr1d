import React from 'react'
import "./InfoData.css"
import { useParams } from "react-router-dom"
const InfoData = () => {

    const parmas = useParams();

     const objId=parmas



    console.log(objId)

    return (
        <div>InfoData</div>
    )
}

export default InfoData