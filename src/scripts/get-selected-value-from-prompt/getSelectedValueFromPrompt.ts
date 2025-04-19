import inquirer from "inquirer";
import { ChoicesPromptConfig } from "./choicesPromptConfig";

// You need to install inquirer module.
// You can install by `npm i -D inquirer`.

/**
 * 
 * @param config : interface: ChoicesPromptConfig
 * @returns 
 */
export const getSelectedValueFromPrompt = async(config: ChoicesPromptConfig) => {
  
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: config.message,
      // default: [""],
      choices: config.choices,
    },
  ])

  return answers.choice;
}