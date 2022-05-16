import axios from 'axios';

const URL = 'http://localhost:5010';

const logIn = async (data) =>{
    let uri = URL+'/users/login'
    return new Promise( (resolve,reject)=> axios.post(uri,data)
    .then(res=>{
        resolve(res);
    })
    .catch(err=>{
        console.log('Error en logIn');
        reject(err);
    }));
}

export {logIn};