import { ArticleLinkPresenter } from "./presenter";
import { ArticleLinkProps } from "./types";

export const ArticleLink = ({...props}: ArticleLinkProps) => {

  return (
    <ArticleLinkPresenter {...props} />
  )
}