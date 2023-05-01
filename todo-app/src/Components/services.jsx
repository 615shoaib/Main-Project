import { createContext, useState } from "react";

export const AppProvider=createContext(null)

// Data jsx file is update in getItem
const getUpdate=()=>{
    const lists=localStorage.getItem("Main App")

    if(lists){
        return JSON.parse(lists)
    }
    else{
        return []
    }
   }

const Provider=({children})=>{
    const [item,setItem]=useState("")
    const [show,setShow]=useState(getUpdate())
    const [edit,setEdit]=useState(" ")
    const [toggle,setToggle]=useState(false);
    return(
        <>
        <AppProvider.Provider value={{
            item,
            setItem,
            show,
            setShow,
            edit,
            setEdit,
            toggle,
            setToggle,
        }}>
            {children}
        </AppProvider.Provider>
        
        </>
    )
}

export default Provider;