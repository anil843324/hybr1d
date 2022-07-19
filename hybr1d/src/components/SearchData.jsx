import React, { useContext } from 'react'
import { QueryContext } from '../context/QueryContext'
import "./SearchData.css"
const SearchData = () => {

  const { queryData, queryUser, error, inputData } = useContext(QueryContext)





  return (
    <div className='showData'>

      {queryData.length !== 0 && (
        <div className="dataResult">
          {queryData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href="/" target="_blank" key={value.id} >
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}

    </div>
  )
}

export default SearchData