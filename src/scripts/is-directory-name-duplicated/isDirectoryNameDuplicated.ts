import fs from 'fs'

export const isDirectoryNameDuplicated = (directoryName: string) : boolean => {

  console.log("Your directory name is: " + directoryName)

  if (fs.existsSync(directoryName)) {
    return true
  } else {
    return false
  }
}