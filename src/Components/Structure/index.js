import React from 'react';

export default function Estructura(user){

    console.log('Usuario: ',user)

    return(
        <div>
            <span>{`Bienvenid@ ${user.name}`}</span>
        </div>
    );
}