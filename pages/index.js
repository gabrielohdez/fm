// pages/index.js
import { Container, Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bienvenidos al Sistema de Gestión de Fuerza Mayor
      </Typography>
      <Grid container spacing={2}>
        {/* Agregar Declaración Testimonial */}
        <Grid item xs={12} sm={6} md={3}>
          <Link href="/agregar-declaracion-testimonial" passHref>
            <Button variant="contained" fullWidth>
              Agregar Declaración Testimonial
            </Button>
          </Link>
        </Grid>
        {/* Agregar Declaración Sobre La Emergencia */}
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" fullWidth disabled>
            Agregar Declaración Sobre La Emergencia
          </Button>
        </Grid>
        {/* Datos Complementarios A La Emergencia */}
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" fullWidth disabled>
            Datos Complementarios A La Emergencia
          </Button>
        </Grid>
        {/* Agregar Declaración Testimonial Por Zona de Alto Riesgo Delincuencia */}
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" fullWidth disabled>
            Agregar Declaración Testimonial Por Zona de Alto Riesgo Delincuencia
          </Button>
        </Grid>
        {/* Consultar Formularios */}
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Link href="/consultar-formularios" passHref>
            <Button variant="outlined" fullWidth>
              Consultar Formularios
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
