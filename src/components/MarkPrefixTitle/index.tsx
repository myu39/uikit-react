import { MarkPrefixTitleType } from "./index.types";
import { MarkPrefixTitlePresenter } from "./presenter";

export const MarkPrefixTitle = (props: MarkPrefixTitleType) => {
  return (
    <MarkPrefixTitlePresenter {...props} />
  )
}