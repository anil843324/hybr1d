import React, { useContext } from 'react'
import { QueryContext } from '../context/QueryContext'
import {Link} from "react-router-dom"
import "./SearchData.css"
const SearchData = () => {

  const { queryData, queryUser, error, inputData } = useContext(QueryContext)





  return (
    <div className='showData'>

      {queryData.length !== 0 && (
        <div className="dataResult">
          {queryData.slice(0, 15).map((value, key) => {
            return (
              <Link className="dataItem" to={`/infoData/${value.objectID}`}   >
                <p>{value.title} </p>
              </Link>
            );
          })}
        </div>
      )}

    </div>
  )
}

export default SearchData