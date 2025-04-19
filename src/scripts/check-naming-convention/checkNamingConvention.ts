import { NamingConventionType } from "./NamingConvention";

function isPascalCase(str: string): boolean {
  return /^[A-Z][a-zA-Z0-9]*$/.test(str);
}

const checkNamingConvention = (target: string, namingType: NamingConventionType) => {
  switch (namingType) {
    case "pascalCase":
      if (isPascalCase(target)) {
        return true
      } else {
        return false
      }
      break;
    default:
      return false
  }
}

export default checkNamingConvention