import React, { useState, useEffect, createContext } from 'react';


export const DataContext = createContext();
export const DataProvider = ({children}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/data')
            .then(response => response.json())
            .then(data => setData(data));
           // console.log(data);

    }, []);
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}

