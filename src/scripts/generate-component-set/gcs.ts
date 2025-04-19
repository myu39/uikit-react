import { NamingConventionType } from "../check-naming-convention/NamingConvention";
import { createFilesFromList } from "../create-files-from-list/createFilesFromList";
import { getBooleanFromPrompt } from "../get-boolean-from-prompt/getBooleanFromPrompt";
import { getSelectedValueFromPrompt } from "../get-selected-value-from-prompt/getSelectedValueFromPrompt";
import { getValidatedInputByNamingType } from "../get-validated-input-by-naming-type/getValidatedInputByNamingType";
import { isDirectoryNameDuplicated } from "../is-directory-name-duplicated/isDirectoryNameDuplicated";
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

    if (isDirectoryNameDuplicated(destination)) {
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