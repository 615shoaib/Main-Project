import { Box, Button, TextField, Typography, styled } from "@mui/material"
import { useContext } from "react"
// components
import Data from "./Data"
import { AppProvider } from "./services"

    // styled components
        const Components=styled(Box)`
        display:flex;
        justify-content:center;
        align-items:space-between;
        `
        const Input=styled(TextField)`
        width:30%;
        height:50px;
        `
        const Main=styled(Box)`
        display:flex;
        justify-content:center;
        `
    

const Todo=()=>{
    const {item,setItem,setShow,show}=useContext(AppProvider);

    const handleClick=(e)=>{
        if(!item){
            alert("Are you sure")
        }
        else{
           const InputValue={
            id:new Date().getTime().toString(),
            name:item,
           }
            setShow([...show,InputValue]) 
            setItem("")
        }
     
    }  
    const clearValue=()=>{
        setShow([]);
    }
    

    return(
        <>
        <Components>
            <Typography variant="h2" color="blue" mb={5} mt={3}>Todo App</Typography>
        </Components>
        <Components>
        <Input placeholder="Enter you value" type="text" name="text" sx={{borderRadius:"none"}} value={item} onChange={(e)=>setItem(e.target.value)} />
        <Button disableFocusRipple variant="contained" sx={{width:"100px",height:"55px"}} onClick={handleClick}>Add</Button>
        
        </Components>
      
        <Data id="id"/>  
        <Main mt={2}>
        <Button variant="contained" onClick={clearValue}>Remove All</Button>
         </Main>

       
        </>
    )
}

export default Todo