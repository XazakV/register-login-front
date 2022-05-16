import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import Login from './login/Login';
import Register from './login/Register';


const estilos = {
    container:{
        margin: 'auto',
        width: '50%',
        backgroundColor:"#AAAAAA",
        border: '1px solid #000000',
        borderRadius: '20px',
        textAlign:'center',
    },
    div:{
        justifyContent:'center',
        display:'flex',
        flexDirection:'row',
    },
    textOptions:{
        cursor:'pointer',
    },
}

export default function Structure({root}){

    const [registro, setRegistro] = useState(true);

    return(
        <Box style={estilos.container}>
            <div style={estilos.div}>
                <Typography variant='h4' style={estilos.textOptions} onClick={() => setRegistro(true)}>Login</Typography>
                <Typography variant='h4'>/</Typography>
                <Typography variant='h4' style={estilos.textOptions} onClick={()=> setRegistro(false)}>Register</Typography>
            </div>
            {registro 
             ?(<Login root={root}/>) 
             :(<Register/>)  
            }
        </Box>
    );
}
