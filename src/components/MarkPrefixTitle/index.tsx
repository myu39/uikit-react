import { MarkPrefixTitlePresenter } from "./presenter";
import { MarkPrefixTitleType } from "./types";

export const MarkPrefixTitle = (props: MarkPrefixTitleType) => {
  return (
    <MarkPrefixTitlePresenter {...props} />
  )
}