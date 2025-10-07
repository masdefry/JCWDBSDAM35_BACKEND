import fs from 'fs';

export function readFileHelper(path: string) {
  const data: any = fs.readFileSync(path);
  const parsedData = JSON.parse(data);
  return parsedData;
}

export function writeFileHelper() {}
