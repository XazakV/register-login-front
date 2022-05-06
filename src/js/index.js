import axios from 'axios';

const URL = 'http://localhost:5010';

const logIn = async (data) =>{
    let uri = URL+'/users/login'
    const respuesta = await axios.post(uri,data)
    .then(res=>{
        return res;
    })
    .catch(err=>{
        return err;
    });

    return respuesta;
}

export {logIn};