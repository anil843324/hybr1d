import React, { createContext, useState} from "react";

export const  DataContext = createContext();

export function DataContextProvider({ children }) {

    const [inputData, setInputData] = useState("");
    

  return (
    <DataContext.Provider value={
      {
        
        inputData,
        setInputData
    }
    }>
      {children}
    </DataContext.Provider>
  );
}

