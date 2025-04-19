import inquirer from "inquirer";
import { BooleanChoicePromptConfig } from "./booleanChoicePromptConfig";

export const getBooleanFromPrompt = async(config: BooleanChoicePromptConfig ) => {

  const answers = await inquirer.prompt([
    {
      type: 'select',
      name: "boolean",
      message: config.message,
      choices: config.choices,
    }
  ])

  return answers.boolean

}