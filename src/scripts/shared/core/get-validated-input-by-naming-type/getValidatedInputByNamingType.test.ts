import inquirer from 'inquirer'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { getValidatedInputByNamingType } from './getValidatedInputByNamingType'

// Define mock for inquirer module
vi.mock('inquirer', async () => {
  const actual = await vi.importActual<typeof import('inquirer')>('inquirer')
  return {
    // Spread the original module to retain its full functionality,
    // but i will override specific parts as needed
    // In this case, i'm mocking the 'inquirer' module and replacing the prompt method.
    ...actual,
    // Override the prompt method with a mock function
    // This is necessary because the prompt method is used in the getValidatedInputByNamingType function
    default: {
      ...actual.default,
      prompt: vi.fn(),
    },
  }
})

describe('getValidatedInputByNamingType', () => {
  beforeEach(() => {
    // Clear all previous mock calls and instances
    // Ensures a clean state before each test
    vi.clearAllMocks()
  })

  test('should return the selected value from the prompt (valid)', async () => {
    vi.mocked(inquirer.prompt).mockResolvedValueOnce({ componentName: 'ValidComponent' })

    const result = await getValidatedInputByNamingType('pascalCase')

    expect(result).toBe('ValidComponent')
  })

  test('should log error for invalid input, then return valid input', async () => {
    vi.mocked(inquirer.prompt)
      .mockResolvedValueOnce({ componentName: 'invalid-name' }) // invalid
      .mockResolvedValueOnce({ componentName: 'ValidComponent' }) // valid

    // Spy on console.log to check if the correct error message is logged
    // mockImplementation prevents actual logs from being printed during the test
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const result = await getValidatedInputByNamingType('pascalCase')

    expect(consoleSpy).toHaveBeenCalledWith('❌ Please use PascalCase (e.g. MyComponent)')
    expect(result).toBe('ValidComponent')

    // Restore the original console.log to avoid side effects in other tests
    consoleSpy.mockRestore()
  })
})
