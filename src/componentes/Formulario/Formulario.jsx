import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario({ addAlert }) {
  const [inputs, setInputs] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    password1: '',
  });

  function inputsHandler(e) {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: value });
  }

  function validacionInputs(e) {
    e.preventDefault();

    const isValidNombre = ""
    const isValidApellido = ""
    const isValidEmail = ""
    const isValidPassword = ""

    if (
      inputs.nombre.trim() === '' ||
      inputs.apellido.trim() === '' ||
      inputs.email === '' ||
      inputs.password === '' ||
      inputs.password1 === ''
    ) {
      addAlert({
        texto: 'Debes completar todos los campos!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidNombre.test(inputs.nombre)) {
      addAlert({
        texto: 'El Nombre debe tener mínimo 4 caracteres y no se permiten caracteres especiales!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidApellido.test(inputs.apellido)) {
      addAlert({
        texto: 'El Apellido debe tener mínimo 4 caracteres y no se permiten caracteres especiales!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidEmail.test(inputs.email)) {
      addAlert({
        texto: 'Formato de email incorrecto!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidPassword.test(inputs.password)) {
      addAlert({
        texto: 'La contraseña debe tener mínimo 8 caracteres, una letra mayúscula, una letra minúscula y un número!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (inputs.password !== inputs.password1) {
      addAlert({
        texto: 'Ambas contraseñas deben ser iguales!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else {
      addAlert({
        texto: 'Registro creado exitosamente!',
        tipo: 'alert-success',
        estado: true,
      });
    }
  }

  return (
    <>
      <Form onSubmit={(e) => validacionInputs(e)}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="nombre"
            name="Nombre"
            type="text"
            placeholder="Nombre"
            className="text-blue"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="apellido"
            name="Apellido"
            type="text"
            placeholder="Apellido"
            className='text-blue'
             
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="email"
            name="Email"
            type="email"
            placeholder="tu.email@ejemplo.com"
            className='text-blue'

          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            className='text-blue'
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="password1"
            name="password1"
            type="password"
            placeholder="Confirme contraseña"
            className='text-blue'

          />
        </Form.Group>

        <Button variant="warning w-100" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}

export default Formulario;