import {  ThemeProvider, createTheme,styled } from '@mui/material/styles';
import { Box,Paper } from '@mui/material';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import "./Todo.css"
import Animation from "react-animated-cursor"



// Components
import Todo from './TodoApp'

const Main=()=>{
    const [mode,setMode]=useState(false)
    const theme=createTheme({
        palette:{
            mode : mode ? "light" : "dark"
        }
    })
    const Item =styled(Paper)`
    width:98.7vw;
    margin-top:-5px;
    height:100vh;
    margin-left:-10px;
    `
    return(
        <>
        <ThemeProvider theme={theme}>
            <Animation />
            <Item variant="elevation">
        <Box>
           <Brightness4Icon sx={{width:"50px",height:"50px",cursor:"pointer"}} onClick={()=>setMode(!mode)} />
           {mode ? "Dark Mood" : "Light Mode"}
           <Todo />
        </Box>
        </Item>
        </ThemeProvider>
        
        </>
    )
}

export default Main