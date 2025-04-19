import { describe, expect, test } from 'vitest'
import { isCorrectNamingConvention } from './isCorrectNamingConvention'

describe('isCorrectNamingConvention', () => {
  // Test cases for different naming conventions
  // pascalCase, camelCase, snake_case, kebab-case, UPPER_CASE, lowercase

  // pascalCase
  test('should return true for valid pascalCase', () => {
    const result = isCorrectNamingConvention('MyComponent', 'pascalCase')
    expect(result).toBe(true)
  })

  test('should return false for invalid pascalCase', () => {  
    const result = isCorrectNamingConvention('myComponent', 'pascalCase')
    expect(result).toBe(false)
  })

  // camelCase
  test('should return true for valid camelCase', () => {
    const result = isCorrectNamingConvention('myComponent', 'camelCase')
    expect(result).toBe(true)
  })

  test('should return false for invalid camelCase', () => {                 
    const result = isCorrectNamingConvention('MyComponent', 'camelCase')
    expect(result).toBe(false)
  })

  // snake_case
  test('should return true for valid snake_case', () => {
    const result = isCorrectNamingConvention('my_component', 'snake_case')
    expect(result).toBe(true)
  })

  test('should return false for invalid snake_case', () => {  
    const result = isCorrectNamingConvention('myComponent', 'snake_case')
    expect(result).toBe(false)
  })

  // kebab-case
  test('should return true for valid kebab-case', () => {
    const result = isCorrectNamingConvention('my-component', 'kebab-case')
    expect(result).toBe(true)
  })

  test('should return false for invalid kebab-case', () => {
    const result = isCorrectNamingConvention('my_component', 'kebab-case')
    expect(result).toBe(false)
  })


  // UPPER_CASE
  test('should return true for valid UPPER_CASE', () => {
    const result = isCorrectNamingConvention('MY_COMPONENT', 'UPPER_CASE')
    expect(result).toBe(true)
  })

  test('should return false for invalid UPPER_CASE', () => {
    const result = isCorrectNamingConvention('my_component', 'UPPER_CASE')
    expect(result).toBe(false)
  })

  
  // lowercase
  test('should return true for valid lowercase', () => {
    const result = isCorrectNamingConvention('mycomponent', 'lowercase')
    expect(result).toBe(true)
  })

  test('should return false for invalid lowercase', () => { 
    const result = isCorrectNamingConvention('MyComponent', 'lowercase')
    expect(result).toBe(false)
  })
})
