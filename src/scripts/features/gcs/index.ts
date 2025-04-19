import { createFilesFromList } from "../../shared/core/create-files-from-list/createFilesFromList";
import { getValidatedInputByNamingType } from "../../shared/core/get-validated-input-by-naming-type/getValidatedInputByNamingType";
import { getBooleanFromPrompt } from "../../shared/prompts/get-boolean-from-prompt/getBooleanFromPrompt";
import { getSelectedValueFromPrompt } from "../../shared/prompts/get-selected-value-from-prompt/getSelectedValueFromPrompt";
import { NamingConventionType } from "../../shared/utils/is-correct-naming-convention/NamingConvention";
import { isExistsDirectory } from "../../shared/utils/is-exists-directory/isExistsDirectory";
import * as settings from './settings.json';

const getDestination = (componentType: string, componentName: string) => {
  switch (componentType) {
    case "component":
      return settings.destination.component + componentName
    case "feature":
      return  settings.destination.feature + componentName
    default:
      throw new Error("Invalid component type")
  }
}

const gcs = async () => {
  let isContinue = true

  console.info("Start to generate React component set.")

  while (isContinue) {
    const componentType = await getSelectedValueFromPrompt(settings.typeChoiceOption)

    const componentName = await getValidatedInputByNamingType(settings.namingConvention.componentName as NamingConventionType)

    const destination = getDestination(componentType, componentName)

    if (isExistsDirectory(destination)) {
      if (await getBooleanFromPrompt(settings.isContinue)) {
        await createFilesFromList(settings.componentSet, destination)
      } else {
        console.info("Component set generation cancelled.")
        isContinue = await getBooleanFromPrompt(settings.isContinueAnother)
        continue
      }
    } else {
      await createFilesFromList(settings.componentSet, destination)
    }

    isContinue = false

    console.info(`Generated ${componentName} component set successfully.`)
  }

}

gcs()

export default gcs;