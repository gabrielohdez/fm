// pages/api/declaraciones.js
import nextConnect from 'next-connect';
import dbConnect from '../../lib/dbConnect';
import Declaracion from '../../models/Declaracion';
import multer from 'multer';
import { nanoid } from 'nanoid';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => cb(null, nanoid() + '-' + file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Error en la solicitud: ${error.message}` });
  },
});

apiRoute.use(upload.array('archivosAdjuntos'));

apiRoute.post(async (req, res) => {
  await dbConnect();
  const archivosAdjuntos = req.files.map((file) => '/uploads/' + file.filename);
  const nuevaDeclaracion = new Declaracion({
    ...req.body,
    archivosAdjuntos,
  });
  await nuevaDeclaracion.save();
  res.status(200).json({ success: true });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
