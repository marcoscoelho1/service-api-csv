import { Router } from 'express';
import csvImporterRouter from '@modules/csvImporter/routes/csvImporter.routes.ts';

const routes = Router();

routes.use('/csv', csvImporterRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'Olá champs' });
});

export default routes;
