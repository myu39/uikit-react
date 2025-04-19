import inquirer from 'inquirer'
import { describe, expect, test, vi } from 'vitest'
import { getSelectedValueFromPrompt } from './getSelectedValueFromPrompt'

vi.mock('inquirer')

describe('getSelectedValueFromPrompt', () => {
  test('should return the selected value from the prompt', async () => {
    vi.mocked(inquirer.prompt).mockResolvedValueOnce({ choice: 'option2' })

    const mockConfig = {
      message: 'Select an option:',
      choices: [
        { name: 'Option 1', value: 'option1' },
        { name: 'Option 2', value: 'option2' },
        { name: 'Option 3', value: 'option3' }
      ]
    }

    const result = await getSelectedValueFromPrompt(mockConfig)
    expect(result).toBe('option2')
  })

  test('should return the default value if provided', async () => {
    // using 'select' or 'list' in inquirer.prompt, you can't proceed without selecting an option
    // so mock the prompt to return the default value directly
    vi.mocked(inquirer.prompt).mockResolvedValueOnce({ choice: 'option1' })

    const mockConfig = {
      message: 'Select an option:',
      choices: [
        { name: 'Option 1', value: 'option1' },
        { name: 'Option 2', value: 'option2' },
        { name: 'Option 3', value: 'option3' }
      ],
      default: 'option1'
    }

    const result = await getSelectedValueFromPrompt(mockConfig)
    expect(result).toBe('option1')
  })
})