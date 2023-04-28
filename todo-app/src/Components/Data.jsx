import { Box, Dialog, Divider, Typography, styled } from "@mui/material"
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material'
import { useContext } from "react"

// compontents
import { AppProvider } from "./services"


//styled components 
const Components = styled(Box)`

 `
const Make = styled(Box)`
    width:45% !important;
    background:black;
    display:flex;
    color:#fff;
    align-items:center;

    `
   
    const deltevalue=()=>{
        
    }

const Data = ({id}) => {
    const { show} = useContext(AppProvider)
    return (
        <>
            <Components mt={8}align="center">
                {
                    show.map((item,index) => {
                        return (
                            <>
                                <Make key={index}>
                                    <Typography ml={10} sx={{ fontSize: "15px !important",align:"inherit", fontWeight:1000,fontFamily:"Arial",textAlign:"center", textTransform:"uppercase" }}>{item.name}</Typography>
                                    <DeleteIcon sx={{ marginLeft: "250px", fontSize: "30px !important", color: "blue", cursor: "pointer" }} onClick={()=>deltevalue(id)} />
                                    <Edit sx={{ marginLeft: "25px !important", fontSize: "30px !important", color: "blue", cursor: "pointer" }} />
                                    <br />
                                </Make>
                                <Divider variant="middle" sx={{width:"40%"}} />
                            </>
                        )
                    })
                }


            </Components>
        </>
    )
}

export default Data;