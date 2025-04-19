import inquirer from "inquirer"
import { NamingConventionType } from "../../utils/is-correct-naming-convention/NamingConvention"
import { isCorrectNamingConvention } from "../../utils/is-correct-naming-convention/isCorrectNamingConvention"

// You need to install inquirer module.
// You can install by `npm i -D inquirer`.

/**
 * 
 * @param namingType
 * @returns string as being input
 */

export const getValidatedInputByNamingType = async(question: string, namingType: NamingConventionType) => {
  // [todo] question should be received from arguments but from settings.json

  let isPascal: boolean = false

  while(!isPascal) {
    const { componentName } = await inquirer.prompt([
      {
        type: "input",
        name: "componentName",
        message: question,
      },
    ])

    if (isCorrectNamingConvention (componentName, namingType)) {
      return componentName
    }

    console.log("❌ Please use PascalCase (e.g. MyComponent)")
  }
}