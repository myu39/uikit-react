export interface BooleanChoiceItem {
  name: string
  value: true | false
}

export interface BooleanChoicePromptConfig {
  message: string
  choices: BooleanChoiceItem[] // Recommend the length is 2
  default?: boolean
}