import ReadCSVFileService from '../services/ReadCSVFileService';
import { Request, Response } from 'express';

export default class ReadCSVFileController {
  public async readFile(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const filePath = request.file?.path;

    const readCSVFileService = new ReadCSVFileService();

    try {
      const result = await readCSVFileService.execute({ filePath });

      return response.json(result);
    } catch (error: any) {
      return response.json(error?.message);
    }
  }
}
