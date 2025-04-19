import fs from 'fs'

export const isExistsDirectory = (directoryName: string) : boolean => {

  if (fs.existsSync(directoryName)) {
    return true
  } else {
    return false
  }
}