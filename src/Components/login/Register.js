import React, {useState} from 'react';
import {FormControlLabel, Divider, Switch, Button, TextField} from '@mui/material';
import Alerta from './Alerta';

const estilo ={
    text:{margin:'2px'},
    divider:{margin:'4px'},
}

export default function Register(){
    
    const [values, setValues] = useState({userName:'',email:'',password:'',cPassword:'',acept:false})
    const [validacion, setValidacion] = useState({state:false, message:''});

    const onNameChanged = (e)=>{
        const {name,value } = e.target;
        setValues( (prev)=>({  ...prev, [name]:value}));
    }

    const onMailChanged = (e)=>{
        setValues((prev)=>({ ...prev, email:e.target.value}));
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
        const emptyInputs = checkEmptyInputs();
        const chkPwd = checkPassword();
        
        if(!emptyInputs){
            setValidacion({
                state:true, 
                message:'Debes rellenar todos los campos.'
            })
            
        }

        if(!chkPwd){
            setValidacion({
                state:true, 
                message:'Los campos "Password" y "Confirm Password" deben ser iguales.'
            });
        }

        if(!values.acept){
            setValidacion({
                state:true,
                message:'Debe aceptar los terminos de privacidad.'
            });
        }

        if(emptyInputs && chkPwd && values.acept){
            console.log('Logado');
        }
    }

    //Metodo que compara los campos "password" y "confirm password"
    function checkPassword(){
        if(values.password.localeCompare(values.cPassword) === 0){
            console.log('Iguales');
            return true;
        }else{
            console.log('No iguales');
            return false;
        }
    }

    //Metodo que revisa que los inputs no esten vacíos
    function checkEmptyInputs(){
        const {userName,email,password,cPassword } = values;
        if(userName.trim() === '' || email.trim() === '' || password.trim() === '' || cPassword.trim() === ''){
            return false;
        }else{return true}
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
                   <Alerta validacion={validacion} setValidacion={setValidacion}/>
               }
        </div>
    );
}