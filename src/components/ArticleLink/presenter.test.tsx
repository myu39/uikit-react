import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { ArticleLinkPresenter } from './presenter'
import { ArticleLinkProps } from './types'

describe('ArticleLink', () => {
  const mockProps: ArticleLinkProps = {
    title: "Test Title",
    date: "2025.04.23",
    linkTo: "#"
  }

  test('renders component', () => {
    render(<ArticleLinkPresenter {...mockProps} />)

    const element = screen.getByText("Test Title")

    // Test if article tag is rendered
    const containerElement = element.closest('article')
    expect(containerElement).toBeInTheDocument()

    // Test if time tag is rendered
    const timeElement = containerElement?.querySelector('time')

    expect(timeElement).toBeInTheDocument()
    expect(timeElement).toHaveAttribute('datetime', "2025.04.23")
    expect(timeElement?.textContent).toBe("2025.04.23")

  })


  const mockAbbreviationProps: ArticleLinkProps = {
    title: "Test Title",
    linkTo: "#"
  }

  test("renders no time element", () => {
    render(<ArticleLinkPresenter {...mockAbbreviationProps} />)

    const element = screen.getByText("Test Title")
    const containerElement = element.closest('article')

    // Test if time tag is not rendered
    const timeElement = containerElement?.querySelector('time')

    expect(timeElement).toBeNull()
  })


})