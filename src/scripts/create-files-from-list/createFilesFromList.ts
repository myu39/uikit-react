import fs from 'fs';
import path from 'path';

export const createFilesFromList = async (fileList: string[], destination: string): Promise<void> => {
  console.info(`Creating files in ${destination}...`);

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  console.info(`Creating files: ...`);
  for (const fileName of fileList) {
    const filePath = path.join(destination, fileName);

    try {
      fs.writeFileSync(filePath, '', 'utf8');
      console.info(` ${filePath}: Success`);
    } catch (error) {
      console.error(`${filePath}: Fail`, error);
      continue;
    } 
  }
}