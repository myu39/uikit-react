import { describe, expect, test } from 'vitest'
import { isExistsDirectory } from './isExistsDirectory'

describe('isExistsDirectory', () => {
  test('should return true if directory exists', () => {
    const existingDirectory = './src/scripts/'
    expect(isExistsDirectory(existingDirectory)).toBe(true)
  })

  test('should return false if directory does not exist', () => {
    const nonExistingDirectory = './src/scripts/is-exists-directory/__test__/non-existing-directory'
    expect(isExistsDirectory(nonExistingDirectory)).toBe(false)
  })
})