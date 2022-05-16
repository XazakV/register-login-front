import React from 'react';
import ReactDOM from "react-dom/client";
import Structure from './Components'

const root = ReactDOM.createRoot(document.getElementById("principal"));

root.render(
  <Structure root={root}/>,
);