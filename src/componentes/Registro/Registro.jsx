import React from 'react';
import SocialButton from "../SocialButton/SocialButton";
import Formulario from "../Formulario/Formulario.jsx";
import Alert from '../Alert/Alert.jsx';

export default function Registro({ onAlert }) {

return (
    <> 
        <h1>Crea una cuenta </h1>
        <p>Puedes usar email para registrarse.</p>
        <Formulario addAlert={onAlert} />
    </>
    );
}