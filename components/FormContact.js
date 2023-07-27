import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
 const FormContact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [ enviado, setEnviado ] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos
    if (!nombre || !email || !asunto || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Enviar el formulario a Formspree
    const response = await fetch('https://formspree.io/f/mqkvkklz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Nombre: nombre,
        Email: email,
        Asunto: asunto,
        Mensaje: mensaje,
      }),
    });

    if (response.ok) {
        setNombre('');
        setEmail('');
        setMensaje('');
        setAsunto('');
        setEnviado(true);
        toast.success('El mensaje ha sido enviado.');
    } else {
      toast.error('Error. No se pudo enviar el mensaje.')
    }
  };

  return (
    <div className="container-form">
    <h3 style={{ color: "white", display: "flex", justifyContent: "center" }}>
      Contacto
    </h3>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group row" style={{ margin: '10px 0' }}>
            <div className="col-6" style={{ padding: '0 5px 0 0' }}>
              <input
                type="text"
                placeholder="Nombre"
                id="nombre"
                className="form-control"
                style={{ background: "#373a3c", border: "1px solid #ff5357", borderRadius: '5px', color: "white" }}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-6" style={{ padding: 0 }}>
              <input
                type="celular"
                placeholder="Celular"
                id="celular"
                className="form-control"
                style={{ background: "#373a3c", border: "1px solid #ff5357", borderRadius: '5px', color: "white" }}
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group" style={{ margin: '10px 0' }}>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="email"
              style={{ background: "#373a3c", border: "1px solid #ff5357", borderRadius: '5px', color: "white" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ margin: '10px 0' }}>
            <input
              type="text"
              placeholder="Asunto"
              className="form-control"
              id="asunto"
              style={{ background: "#373a3c", border: "1px solid #ff5357", borderRadius: '5px', color: "white" }}
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ margin: '10px 0' }}>
            <textarea
              className="form-control"
              id="mensaje"
              style={{ background: "#373a3c", border: "1px solid #ff5357", borderRadius: '5px', color: "white" }}
              placeholder="Mensaje.."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100 text-center" style={{ borderRadius: '5px', fontSize: '18px' }}>Enviar</button>
        </form>
      </div>
      {enviado && <ToastContainer />}
    </div>
  </div>
  
  );
}

export default FormContact;