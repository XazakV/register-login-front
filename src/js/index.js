import axios from 'axios';
import hash from './Helper';

const URL = 'http://localhost:5010';

const logIn = async (data) =>{
    let uri = URL+'/users/login'
    const {userName, password} = data;
    const hashPwd = hash(password);
    return new Promise( (resolve,reject)=> axios.post(uri,{userName,hashPwd})
    .then(res=>{
        resolve(res);
    })
    .catch(err=>{
        console.log('Error en logIn');
        reject(err);
    }));
}

export {logIn};