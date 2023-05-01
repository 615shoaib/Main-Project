import { Box, Button, TextField, Typography, styled } from "@mui/material"
import { useContext } from "react"
import { Edit } from '@mui/icons-material'
// components
import Data from "./Data"
import { AppProvider } from "./services"

// styled components
const Components = styled(Box)`
        display:flex;
        justify-content:center;
        align-items:space-between;
        `
const Input = styled(TextField)`
        width:30%;
        height:50px;
        `
const Main = styled(Box)`
        display:flex;
        justify-content:center;
        `


const Todo = () => {
    const { item, setItem, setShow, show, toggle,edit,setToggle,setEdit} = useContext(AppProvider);


    const editvalue=(index)=>{
        const updateEdit=show.find((item)=>{
            return item.id === index;
        })
        setItem(updateEdit)
        setEdit(index)
        setToggle(true)
      }

    const handleClick = (e) => {
        if (!item) {
            alert("Are you sure") 
        }
        else if(item && toggle){
            setShow(
                show.map((item)=>{
                    if(item.id === edit){
                        return[...item]
                    }
                    return item;
                })
            )    
            setItem("")
        setEdit(null)
        setToggle(false)
        }
    
    
        else {
            const InputValue = {
                id: new Date().getTime().toString(),
                name: item,
            }
            setShow([...show, InputValue])
            setItem("")
        }

    }
  
    
  
    

// clear
const clearValue = () => {
        setShow([]);
    }

 



    return (
        <>
            <Components>
                <Typography variant="h2" color="blue" mb={5} mt={3}>Todo App</Typography>
            </Components>
            <Components>
                <Input placeholder="Enter you value" name="input" sx={{ borderRadius: "none" }} value={item} onChange={(e) => setItem(e.target.value)} />
                {

                       toggle ? <Edit sx={{ width: "100px", backgroundColor:"blue",color:"white", height: "55px", marginLEft: "-10px" }} onClick={()=>editvalue(item.id)}/> : <Button disableFocusRipple variant="contained" sx={{ width: "100px", height: "55px", marginLEft: "-10px" }} onClick={handleClick}>Add</Button>
                       }

            </Components>

            <Data id="id" />
            <Main mt={2}>
                <Button variant="contained" onClick={clearValue} >Remove All</Button>
            </Main>


        </>
    )
}

export default Todo