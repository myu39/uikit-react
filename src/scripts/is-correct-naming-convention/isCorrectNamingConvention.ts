import { NamingConventionType } from "./NamingConvention";

const namingConventionPatterns: Record<NamingConventionType, RegExp> = {
  // Key is one of NamingConventionType, and value is a RegExp
  pascalCase: /^[A-Z][a-zA-Z0-9]*$/,
  camelCase: /^[a-z][a-zA-Z0-9]*$/,
  snake_case: /^[a-z0-9]+(_[a-z0-9]+)*$/,
  "kebab-case": /^[a-z0-9]+(-[a-z0-9]+)*$/,
  UPPER_CASE: /^[A-Z0-9]+(_[A-Z0-9]+)*$/,
  lowercase: /^[a-z0-9]+$/
};

export const isCorrectNamingConvention = (target: string, namingType: NamingConventionType) => {
  const pattern = namingConventionPatterns[namingType];
  return pattern.test(target);
}