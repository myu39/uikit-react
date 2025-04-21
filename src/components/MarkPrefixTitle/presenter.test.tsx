import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { MarkPrefixTitlePresenter } from './presenter'
import styles from "./styles.module.scss"
import { MarkPrefixTitleType } from './types'

describe('MarkPrefixTitlePresenter', () => {
  const mockProps: MarkPrefixTitleType = {
    title: 'Test Title',
    tagType: 'h3',
    markType: 'hyphen'
  }

  test('renders title and tag and modifier class which is specified in markType of props', () => {
    render (<MarkPrefixTitlePresenter {...mockProps} />)

    // Test if the title text is rendered
    const titleElement = screen.getByText(mockProps.title)
    expect(titleElement).toBeInTheDocument()

    // Test if the tag name matches with tagType
    // Note: tagName returns value with capital letters, so it is necessary to use toLowerCase()
    expect(titleElement.tagName.toLowerCase()).toBe(mockProps.tagType)

    // Test if the 'c-marked-title' and 'c-marked-title + -- + markType' are included
    const element = screen.getByRole('heading')
    expect(element).toHaveClass(styles['c-marked-title'])
    expect(element).toHaveClass(styles['c-marked-title--' + mockProps.markType])
  })
})