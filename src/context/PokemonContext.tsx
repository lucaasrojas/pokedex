import { createContext, useState } from "react";
import { Pokemon } from "interfaces";

export const PokemonContext = createContext(undefined)

export const PokemonProvider = ({children}) => {
    const [list, setList] = useState<Pokemon[]>([])
    const [myList, setMyList] = useState<Pokemon[]>([])
    return (
        <PokemonContext.Provider value={{list, myList, setList, setMyList}}>
            {children}
        </PokemonContext.Provider>
    )
}
