import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { TitleWithSubtitlePresenter } from './presenter'
import styles from "./styles.module.scss"
import { TitleWithSubtitleProps } from './types'

describe('TitleWithSubtitle', () => {
  const mockProps: TitleWithSubtitleProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle'
  };

  const mockHasUnderlineProps: TitleWithSubtitleProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    hasUnderline: true
  };

  test('renders title and subtitle correctly', () => {
    render(<TitleWithSubtitlePresenter {...mockProps} />)
    const titleElement = screen.getByText(mockProps.title)
    const subtitleElement = screen.getByText(mockProps.subtitle)
    expect(titleElement).toBeInTheDocument()
    expect(subtitleElement).toBeInTheDocument()
  });

  test('applies the correct container class', () => {
    render(<TitleWithSubtitlePresenter {...mockProps} />)
    const containerElement = screen.getByRole('heading', { name: mockProps.title }).closest('div')
    expect(containerElement).toHaveClass(styles["c-title-with-subtitle"])
  });

  test('applies the correct modifier "underline" class', () => {
    render(<TitleWithSubtitlePresenter {...mockHasUnderlineProps} />)
    const containerElement = screen.getByRole('heading', { name: mockHasUnderlineProps.title }).closest('div')
    expect(containerElement).toHaveClass(styles["c-title-with-subtitle"]);
    expect(containerElement).toHaveClass(styles["c-title-with-subtitle--underline"])
  })
})