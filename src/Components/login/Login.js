import React, {useState} from 'react';
import {Button, TextField, Divider, Backdrop, CircularProgress} from '@mui/material';
import { logIn } from '../../js';

import Principal from '../Structure/Index';
import Alerta from './Alerta';

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
    slide:{
        position: 'absolute',
        top: '0.5%',
        left: '41%',
    },
}

export default function Login({root}){

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [logado, setLogado] = useState(false);
    const [validacion, setValidacion] = useState({state:false, message:''});

    const handleClick = (e) => {
        e.preventDefault();
        setLogado(true);
        if(!userName || !password){
            setLogado(false);
            setValidacion({
                state:true, 
                message:'Los campos no pueden estar vacíos'
            });
            return false; 
        }
        //console.log(`Nombre de usuario: ${userName} - Password ${password}`);
        metodoLogin();
    }

    const metodoLogin = async ()=>{
        try{
            
            const token = await logIn({userName,password});
            console.log('token: ',token);
            if(!token.data){
                setLogado(false);
                setValidacion({
                    state:true, 
                    message:'Nombre de usuario o contraseña incorrecto'
                });
                return false;
            };
            setLogado(false);
            root.render(<Principal data={token.data}/>);
        }catch(err){
            console.log(err);
            setLogado(false);
            setValidacion({
                state:true, 
                message:err.message
            });
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
            <Button style={{marginBottom:'8px'}} variant="outlined" onClick={handleClick}>Login</Button> 
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={logado}
            >
                <CircularProgress size='200px' color="inherit" />
            </Backdrop>
            <Alerta validacion={validacion} setValidacion={setValidacion}/>
        </div>
    );
}
