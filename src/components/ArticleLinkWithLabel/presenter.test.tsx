import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { ArticleLinkWithLabelPresenter } from './presenter'
import { ArticleLinkWithLabelType } from './types'

describe('ArticleLinkWithLabel', () => {
  const mockProps: ArticleLinkWithLabelType = {
    title: "Title Test",
    date: "2025.04.06",
    categoryItem: {
      name: "category",
      slug: "#"
    },
    linkTo: "#"
  }

  test('renders component', () => {
    render(<ArticleLinkWithLabelPresenter {...mockProps} />)

    const element = screen.getByText(mockProps.title)
    expect(element).toBeInTheDocument

    // Test if date is rendered
    const dateElement = screen.getByText(mockProps.date)
    expect(dateElement).toBeInTheDocument()

    // Test if category name is rendered
    const categoryLinkElement = screen.getByText(mockProps.categoryItem.name)
    expect(categoryLinkElement).toBeInTheDocument()

    // Test if the link url of category is rendered
    const categoryLink = screen.getByRole('link', { name: mockProps.categoryItem.name })
    expect(categoryLink).toHaveAttribute('href', mockProps.categoryItem.slug)

    // Test if the link url of post is rendered
    const articleLink = screen.getByRole('link', { name: mockProps.title })
    expect(articleLink).toHaveAttribute('href', mockProps.linkTo)

  })
})