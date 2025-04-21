export interface TitleWithSubtitleProps {
  title: string
  subtitle: string
  hasUnderline?: boolean
  // default value is "vstack"
  stackType?: | "vstack" | "vstack-reverse" | "hstack"  | "hstack-reverse"
  // default value is "hwrite"
  writingMode?: | "hwrite" | "vwrite"
  // you can set class by wrapping this component and passing a class name from wrapper which you write.
  pjClass?: string
}