import React, {useState, useEffect} from 'react';
import {FormControlLabel, Divider, Switch, Button, TextField, Alert} from '@mui/material';

const estilo ={
    text:{margin:'2px'},
    divider:{margin:'4px'},
}

export default function Register(){
    
    const [values, setValues] = useState({userName:'',email:'',password:'',cPassword:'',acept:false})
    const [validacion, setValidacion] = useState(false);

    useEffect(()=>{
        //console.log('Obj values: ', values)
    },[values]);

    const onNameChanged = (e)=>{
        const {name,value } = e.target;
        setValues( (prev)=>({  ...prev, [name]:value}));
        console.log(values.userName);
    }

    const onMailChanged = (e)=>{
        setValues((prev)=>({ ...prev, email:e.target.value}));
        console.log(values.email);
    }

    const onPasswordChange = (e) => {
        setValues((prev)=>({ ...prev, password:e.target.value}));
    }

    const onCPasswordChange = (e) =>{
        setValues((prev)=>({ ...prev, cPassword:e.target.value}));
    }

    const onAceptChange = (e) => {
        setValues((prev)=>({ ...prev, acept:e.target.checked}));
    }

    const onHandleClick = (e) =>{
        e.preventDefault();
        console.log('Click');
        const chkPwd = checkPassword();
        if(chkPwd){
            setValidacion(true);
        }
    }
/*
    function checkAcept(acept){
        if(acept) return true
    }
*/
    function checkPassword(){
        if(values.password.localeCompare(values.cPassword) === 0){
            console.log('Iguales');
            return true
        }else{
            console.log('No iguales');
            return false
        }
    }


    return(
        <div style={{margin:'8px'}}>
            
                <TextField
                    name='userName'
                    style={estilo.text}
                    label="Name"
                    value={values.userName}
                    onChange={onNameChanged}
                />
                <TextField
                    style={estilo.text}
                    label="E-mail"
                    value={values.email}
                    onChange={onMailChanged}
                />
                <TextField
                    style={estilo.text}
                    type='password'
                    label="Password"
                    value={values.password}
                    onChange={onPasswordChange}
                />
                <TextField
                    style={estilo.text}
                    type='password'
                    label="Confirm Password"
                    value={values.cPassword}
                    onChange={onCPasswordChange}
                />
                <FormControlLabel control={<Switch checked={values.acept} onChange={onAceptChange}/>}  label="Acepto los terminos de privacidad"/>
                <Divider style={estilo.divider}/>
                <Button style={{margin:'8px'}} variant="outlined" onClick={onHandleClick}>Register</Button>
               {
                   validacion ?<Alert variant="filled" severity="success">Datos Validos</Alert> :<Alert variant="filled" severity="error">Datos incorrectos</Alert>
               }
        </div>
    );
}