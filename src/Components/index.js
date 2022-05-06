import { useState } from 'react';
import { Box } from "@mui/material";
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
}

export default function Structure(){

    const [registro, setRegistro] = useState(true);

    return(
        <Box style={estilos.container}>
            <h1>
                <span onClick={() => setRegistro(true)}>Login</span>/<span onClick={()=> setRegistro(false)}>Register</span>
            </h1>
            {registro 
             ?(<Login/>) 
             :(<Register/>)  
            }
        </Box>
    );
}
