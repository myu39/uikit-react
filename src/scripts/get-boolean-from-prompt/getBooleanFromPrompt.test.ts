import inquirer from 'inquirer'
import { describe, expect, test, vi } from 'vitest'
import { getBooleanFromPrompt } from './getBooleanFromPrompt'

vi.mock('inquirer')

describe('getBooleanFromPrompt', () => {
  test('should return true when user selects "Yes"', async () => {

    vi.mocked(inquirer.prompt).mockResolvedValueOnce({boolean: true })

    const mockConfig = {
      message: 'Do you want to proceed?',
      choices: [
        { name: 'Yes', value: true },
        { name: 'No', value: false }
      ]
    }

    const result = await getBooleanFromPrompt(mockConfig)
    expect(result).toBe(true)
  })

  test('should return false when user selects "No"', async () => {

    vi.mocked(inquirer.prompt).mockResolvedValueOnce({boolean: false })

    const mockConfig = {
      message: 'Do you want to proceed?',
      choices: [
        { name: 'Yes', value: true },
        { name: 'No', value: false }
      ]
    }

    const result = await getBooleanFromPrompt(mockConfig)
    expect(result).toBe(false)
  })
}
)