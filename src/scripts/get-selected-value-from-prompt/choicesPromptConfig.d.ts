export interface ChoiceItem {
  name: string
  value: string
}

export interface ChoicesPromptConfig {
  message: string
  choices: ChoiceItem[]
  default?: string
}