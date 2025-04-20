import { ArticleLinkWithLabelPresenter } from "./presenter";
import { ArticleLinkWithLabelType } from "./types";

export const ArticleLinkWithLabel = (props: ArticleLinkWithLabelType) => {
  return (
    <ArticleLinkWithLabelPresenter {...props} />
  )
} 