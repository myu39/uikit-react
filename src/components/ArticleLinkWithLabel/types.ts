export interface ArticleLinkWithLabelType {
  title: string
  date: string
  categoryItem: {
    name: string
    slug?: string
  };
  linkTo: string
  pjClass?: string
}