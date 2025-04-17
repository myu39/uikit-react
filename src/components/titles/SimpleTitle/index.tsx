import { SimpleTitleType } from "./index.types";
import { SimpleTitlePresentator } from "./presentator";

export const SimpleTitle = (props: SimpleTitleType) => {
  return (
    <SimpleTitlePresentator {...props} />
  )
}