import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { SimpleTitleType } from './index.types'
import { SimpleTitlePresentator } from './presentator'
import styles from "./style.module.scss"

describe('SimpleTitlePresentator', () => {
  const mockH2Props: SimpleTitleType = {
    title: "Test Title",
    tagType: "h2"
  }

  const mockH3Props: SimpleTitleType = {
    title: "Test Title",
    tagType: "h3"
  }

  const mockH4Props: SimpleTitleType = {
    title: "Test Title",
    tagType: "h4"
  }
  const mockH5Props: SimpleTitleType = {
    title: "Test Title",
    tagType: "h5"
  }
  const mockH6Props: SimpleTitleType = {
    title: "Test Title",
    tagType: "h6"
  }

  test('renders title with h2 tag', () => {
    render(<SimpleTitlePresentator {...mockH2Props} />)
    const titleElement = screen.getByText(mockH2Props.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName.toLowerCase()).toBe(mockH2Props.tagType)
    expect(titleElement).toHaveClass(styles["c-simple-title"])
    expect(titleElement).toHaveClass(styles[`c-simple-title--${mockH2Props.tagType}`])
  })

  test('renders title with h3 tag', () => {
    render(<SimpleTitlePresentator {...mockH3Props} />)
    const titleElement = screen.getByText(mockH3Props.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName.toLowerCase()).toBe(mockH3Props.tagType)
    expect(titleElement).toHaveClass(styles["c-simple-title"])
    expect(titleElement).toHaveClass(styles[`c-simple-title--${mockH3Props.tagType}`])
  })

  test('renders title with h4 tag', () => {
    render(<SimpleTitlePresentator {...mockH4Props} />)
    const titleElement = screen.getByText(mockH4Props.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName.toLowerCase()).toBe(mockH4Props.tagType)
    expect(titleElement).toHaveClass(styles["c-simple-title"])
    expect(titleElement).toHaveClass(styles[`c-simple-title--${mockH4Props.tagType}`])
  })

  test('renders title with h5 tag', () => {
    render(<SimpleTitlePresentator {...mockH5Props} />)
    const titleElement = screen.getByText(mockH5Props.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName.toLowerCase()).toBe(mockH5Props.tagType)
    expect(titleElement).toHaveClass(styles["c-simple-title"])
    expect(titleElement).toHaveClass(styles[`c-simple-title--${mockH5Props.tagType}`])
  })

  test('renders title with h6 tag', () => {
    render(<SimpleTitlePresentator {...mockH6Props} />)
    const titleElement = screen.getByText(mockH6Props.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName.toLowerCase()).toBe(mockH6Props.tagType)
    expect(titleElement).toHaveClass(styles["c-simple-title"])
    expect(titleElement).toHaveClass(styles[`c-simple-title--${mockH6Props.tagType}`])
  })
})