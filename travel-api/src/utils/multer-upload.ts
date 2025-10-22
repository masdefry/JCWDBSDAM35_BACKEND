import multer, { FileFilterCallback, Multer } from 'multer';
import { Request } from 'express';
import path from 'path';

export const uploaderMulter = (acceptedFiles: string[]) => {
  const storage = multer.diskStorage({
    destination: function (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, destination: string) => void
    ) {
      const mainDirectory = path.join(process.cwd()); // Untuk mendapatkan existing path dari project kita
      cb(null, `${mainDirectory}/src/uploads/images`);
    },
    filename: function (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, destination: string) => void
    ) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); // Date.now() in ms
      cb(null, file.fieldname + '-' + uniqueSuffix); // vehicleImages-Date.now()-Math.random
    },
  });

  function fileFilter(
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) {
    cb(null, true);
  }

  return multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }, // 📝 Each file mus't have limitation size around 2 Megabyte
  });
};
