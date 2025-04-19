import inquirer from "inquirer"
import { isCorrectNamingConvention } from "../is-correct-naming-convention/isCorrectNamingConvention"

import * as settings from "../generate-component-set/settings.json"
import { NamingConventionType } from "../is-correct-naming-convention/NamingConvention"

// You need to install inquirer module.
// You can install by `npm i -D inquirer`.

/**
 * 
 * @param namingType
 * @returns string as being input
 */

export const getValidatedInputByNamingType = async(namingType: NamingConventionType) => {
  const question = settings.question.componentName

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