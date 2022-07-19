import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
     const [inputData, setInputData] = useState('')

    return <AuthContext.Provider value={
        {
            inputData,
            setInputData
        }
    }>
        {children}
    </AuthContext.Provider>
}