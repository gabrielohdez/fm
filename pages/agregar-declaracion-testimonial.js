// pages/agregar-declaracion-testimonial.js
import { useState } from 'react';
import {
  Container, TextField, Button, Typography, Grid, Input,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function AgregarDeclaracionTestimonial() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      if (key === 'archivosAdjuntos') {
        for (let file of formData.archivosAdjuntos) {
          data.append('archivosAdjuntos', file);
        }
      } else {
        data.append(key, formData[key]);
      }
    }
    await fetch('/api/declaraciones', {
      method: 'POST',
      body: data,
    });
    router.push('/consultar-formularios');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Agregar Declaración Testimonial
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Campos del formulario */}
          <Grid item xs={12}>
            <TextField label="Empresa" name="empresa" fullWidth onChange={handleChange} />
          </Grid>
          {/* ... Agrega los demás campos siguiendo el mismo patrón */}
          <Grid item xs={12}>
            <Input type="file" name="archivosAdjuntos" inputProps={{ multiple: true }} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
