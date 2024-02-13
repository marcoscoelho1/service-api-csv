import csv from 'csv-parser';
import fs from 'fs';
import AppError from '@shared/errors/AppError';
import { resolve } from 'path';

interface IRequest {
  filePath: string | undefined;
}

class ReadCSVFileService {
  public async execute({ filePath }: IRequest): Promise<any> {
    return new Promise((resolve, reject) => {
      const results: any[] = [];

      if (!filePath) {
        throw new AppError('File not found.');
      }

      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', data => results.push(data))
        .on('end', () => {
          fs.unlinkSync(filePath);
          //TODO - remover slice
          resolve(results.slice(0, 10));
        })
        .on('error', error => {
          reject(error);
        });
    });
  }
}

export default ReadCSVFileService;
