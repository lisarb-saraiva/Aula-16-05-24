import React, { createContext, useState} from "react";

const CarContext = createContext ();

export default function CarProvider ( { children }){
    const [carros, setCarros] = userState([]);

    return (
        <CarContext.Provider value={{ carros, setCarros }}>
            {children}
        </CarContext.Provider>
    )
}

export { CarContext }