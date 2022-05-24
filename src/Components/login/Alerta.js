import React from 'react';
import {Slide, Snackbar, Alert} from '@mui/material';

const estilos={
  top:'-93%',
  left:'41%',
}

export default function Alerta({validacion, setValidacion}){

  const handleClose = () => {
    setValidacion( {...validacion, state:false});
  };

    return(
        <Slide style={estilos} direction="down" in={validacion.state} mountOnEnter unmountOnExit>
        <Snackbar open={validacion.state} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            {validacion.message}
          </Alert>
        </Snackbar>
      </Slide>
    );
}