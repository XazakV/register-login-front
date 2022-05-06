import React, {useState, useEffect} from 'react';
import {Button, TextField, Divider} from '@mui/material';
import { logIn } from '../../js';

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
}

export default function Login(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const [logado, setLogado] = useState(false);

    useEffect(()=>{
        logado ? console.log('Logado') : console.log('Deslogado');
    },[logado]);


    const handleClick = (e) => {
        e.preventDefault();
        //console.log(`Nombre de usuario: ${userName} - Password ${password}`);
        metodoLogin();
    }

    const metodoLogin = async ()=>{
        const token = await logIn(userName,password);
        console.log('token: ',token);
        if(!token.data){
            console.log('Error axios.');
            return false;
        };
        setLogado(true);
        return true;
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
        </div>
    );
}
