import React from 'react';
import Appbar from './Principal/Appbar';

export default function Estructura({data}){

    const usuario = data[0].split(' ')[0];
    const rol = data[1].toLowerCase();

    return(
        <div>
            <Appbar data={{usuario,rol}}/>
            <h1>{`Bienvenid@ ${usuario}`}</h1>
            <h3>{`Tu rol es ${rol}`}</h3>
        </div>
    );
}