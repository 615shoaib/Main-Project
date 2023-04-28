import { createContext, useState } from "react";

export const AppProvider=createContext(null)


const Provider=({children})=>{
    const [item,setItem]=useState("")
    const [show,setShow]=useState([])
    return(
        <>
        <AppProvider.Provider value={{
            item,
            setItem,
            show,
            setShow,
        }}>
            {children}
        </AppProvider.Provider>
        
        </>
    )
}

export default Provider;