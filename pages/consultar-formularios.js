// pages/consultar-formularios.js
import { useState } from 'react';
import {
  Container, TextField, Typography, Grid, Card, CardContent,
} from '@mui/material';
import useSWR from 'swr';

export default function ConsultarFormularios() {
  const [filtros, setFiltros] = useState({});
  const { data: declaraciones } = useSWR('/api/declaraciones');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({
      ...filtros,
      [name]: value,
    });
  };

  const declaracionesFiltradas = declaraciones?.filter((dec) => {
    return (
      (!filtros.empresa || dec.empresa.includes(filtros.empresa)) &&
      (!filtros.seccion || dec.seccion.includes(filtros.seccion)) &&
      (!filtros.fecha || dec.fecha.startsWith(filtros.fecha))
    );
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Consultar Formularios
      </Typography>
      <Grid container spacing={2}>
        {/* Filtros */}
        <Grid item xs={12} sm={4}>
          <TextField label="Empresa" name="empresa" fullWidth onChange={handleChange} />
        </Grid>
        {/* ... Otros filtros */}
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {declaracionesFiltradas?.map((dec) => (
          <Grid item xs={12} key={dec._id}>
            <Card>
              <CardContent>
                {/* Muestra los campos de la declaración */}
                <Typography variant="h6">Empresa: {dec.empresa}</Typography>
                {/* ... Otros campos */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
