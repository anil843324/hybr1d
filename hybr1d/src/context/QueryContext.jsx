import { createContext, useEffect, useState } from 'react';
export const QueryContext = createContext();

export const QueryContextProvider = ({ children }) => {

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
        }, 1000)

        return () => clearTimeout(timeout)

    }, [inputData])



    return (
        <QueryContext.Provider
            value={{
                queryData,
                inputData,
                setInputData,
                queryUser,


            }}
        >
            {children}
        </QueryContext.Provider>
    );
};