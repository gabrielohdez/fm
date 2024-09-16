// models/Declaracion.js
import mongoose from 'mongoose';

const DeclaracionSchema = new mongoose.Schema({
  empresa: String,
  seccion: String,
  fecha: Date,
  hora: String,
  duracion: String,
  nombreCargo: String,
  descripcionInstalaciones: String,
  causa: String,
  comoSeEntero: String,
  especificarRestosMaterial: String,
  archivosAdjuntos: [String],
});

export default mongoose.models.Declaracion || mongoose.model('Declaracion', DeclaracionSchema);
