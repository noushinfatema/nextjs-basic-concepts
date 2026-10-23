'use client' ;
import { useState } from "react";

import { Children, createContext } from "react";

export const CounterContext = createContext()

export default function CounterProvider({children}){
    const [count, setCount] = useState(0) ;
    return (
        // we want to share a state...
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    )
}