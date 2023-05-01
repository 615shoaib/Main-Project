import { Box,  Divider, Typography, styled} from "@mui/material"
import {useEffect } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material'
import { useContext } from "react"

// compontents
import { AppProvider } from "./services"


//styled components 
const Components = styled(Box)`
     max-width:50vw;
     box-shadow:0 0 10px 0 #000;
 `
const Make = styled(Box)`
    width:45% !important;
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:100vw;
   & > p {
    display:inline-block !important;
    font-size:20px !important;
    text-align:center !important;
    display:flex;
    align-items:center !important;
    justify-content:center;
    width:30px
   }
    `
  
const Data = ({id}) => {
const { show, item ,setItem ,setShow,setEdit,setToggle,edit,toggle} = useContext(AppProvider)




     
    // Edit Value
  const editvalue=(index)=>{
    const updateEdit=show.find((item)=>{
        return item.id === index;
    })
    setItem(updateEdit.name)
    setEdit(index)
    setToggle(true)
  }
    // Delet Items Value 
    const deltevalue=(index)=>{
        const UpdateItem=show.filter((item)=>{
            return item.id !== index;
        })
        setShow(UpdateItem)
    }
    // Localstorage date
    useEffect(()=>{
        localStorage.setItem("Main App",JSON.stringify(show))
    },[show])
    return (
        <>
        <Box ml={40} sx={{dispaly:"flex",justifyContent:"center !important"}}>
            <Components mt={8} >
                {
                    show.map((item,index) => {
                        return (
                            <>
                                <Make key={item.id} >
                                    <Typography ml={5} mt={2} mb={5}>{item.name}</Typography>
                                    <DeleteIcon sx={{ marginLeft: "350px", fontSize: "30px !important", color: "blue", cursor: "pointer" }} onClick={()=>deltevalue(item.id)} />
                                   <Edit sx={{ marginLeft: "35px !important", fontSize: "30px !important", color: "blue", cursor: "pointer" }} onClick={()=>editvalue(item.id)} />
                                </Make>
                                <Divider variant="left" sx={{width:"100%"}} />
                            </>
                        )
                    })
                }


            </Components>
            </Box>
        </>
    )
}

export default Data;