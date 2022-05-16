import React, {useState, useEffect} from 'react';
//import ReactDOM from "react-dom/client";
import {Button, TextField, Divider, Alert, Snackbar, Slide} from '@mui/material';
import { logIn } from '../../js';

import Principal from '../Structure/Principal';

//const root = ReactDOM.createRoot(document.getElementById("principal"));

const estilos = {
    form:{
        margin:'8px',
    },
    campos:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:'8px',
        
    },
    slideError:{
        position: 'absolute',
        top: '0.5%',
        left: '41%',
    },
}

export default function Login({root}){

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [openError, setOpenError] = useState(false);
    const [logado, setLogado] = useState(false);

    useEffect(()=>{
        logado ? console.log('Logado') : console.log('Deslogado');
    },[logado]);

    useEffect(()=>{
        if(openError){
            setTimeout(()=>{setOpenError(false)},[5000]);
        }
    },[openError]);

    const handleCloseError = () =>{
        setOpenError(false);
    }
    

    const handleClick = (e) => {
        e.preventDefault();
        //console.log(`Nombre de usuario: ${userName} - Password ${password}`);
        metodoLogin();
    }

    const metodoLogin = async ()=>{
        try{
            const token = await logIn({userName,password});
            console.log('token: ',token);
            if(!token.data){
                console.log('Login incorrecto');
                return false;
            };
            console.log('Login correcto');
            setLogado(true);
            root.render(<Principal/>);
        }catch(err){
            console.log(err);
            setError(err.message);
            setOpenError(true);
        }
    }

    const onNameChange = (e) =>{
        setUserName(e.target.value)
    }

    const onPasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    return(
        <div>
            <div style={estilos.campos}>
                <TextField  label="Name" 
                onChange={onNameChange}
                value={userName}
                variant="outlined" />
                <TextField  label="Password" 
                onChange={onPasswordChange}
                value={password}
                variant="outlined" />
            </div>
            <Divider style={{margin:'8px'}}/>
            {
                logado
                ? (<Button style={{marginBottom:'8px'}} variant="outlined" onClick={()=>setLogado(false)} >LogOut</Button>)
                : (<Button style={{marginBottom:'8px'}} variant="outlined" onClick={handleClick} >Login</Button> )
            }
            <Slide style={estilos.slideError} in={openError} direction="down" mountOnEnter unmountOnExit onClose={handleCloseError}>
                <Alert style={{justifyContent:'center'}} variant="filled" severity="error">Error:  {error}</Alert>
            </Slide>
        </div>
    );
}
