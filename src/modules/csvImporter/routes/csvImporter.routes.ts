import ReadCSVFileController from '../controllers/ReadCSVFileController';
import multer from 'multer';
import { Router } from 'express';

const csvImporterRouter = Router();
const upload = multer({ dest: 'uploads/' });
const readCSVFileController = new ReadCSVFileController();

csvImporterRouter.post(
  '/readFile',
  upload.single('file'),
  readCSVFileController.readFile,
);

export default csvImporterRouter;
