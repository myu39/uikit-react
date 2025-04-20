import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { TitleWithSubtitle } from '.'
import styles from "./styles.module.scss"

describe('TitleWithSubtitle', () => {
  const mockProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle'
  };

  const mockHasUnderlineProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    hasUnderline: true
  };

  test('smoke test for TitleWithSubtitle', () => {
    render(<TitleWithSubtitle {...mockProps} />)
    const containerElement = screen.getByRole('heading', { name: mockProps.title }).closest('div')
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
    expect(containerElement).toHaveClass(styles["c-title-with-subtitle"]);
  })

    test('applies the correct modifier "underline" class', () => {
      render(<TitleWithSubtitle {...mockHasUnderlineProps} />)
      const containerElement = screen.getByRole('heading', { name: mockHasUnderlineProps.title }).closest('div')

      expect(containerElement).toHaveClass(styles["c-title-with-subtitle"])
      expect(containerElement).toHaveClass(styles['c-title-with-subtitle--underline'])
    })
})