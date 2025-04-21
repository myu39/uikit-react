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

  const mockHasHstacClassProps: TitleWithSubtitleProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    stackType: "hstack"
  };

  const mockHasPjClassProps: TitleWithSubtitleProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    pjClass: "my-custom-class"
  };

  const mockHasVWriteProps: TitleWithSubtitleProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    writingMode: "vwrite"
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
    expect(containerElement).toHaveClass("c-title-with-subtitle")
  });

  test('applies the correct modifier "underline" class', () => {
    render(<TitleWithSubtitlePresenter {...mockHasUnderlineProps} />)
    const containerElement = screen.getByRole('heading', { name: mockHasUnderlineProps.title }).closest('div')
    expect(containerElement).toHaveClass(styles["c-title-with-subtitle--underline"])
    expect(containerElement).toHaveClass("c-title-with-subtitle--underline")
  })

  test('has "vstack" class if not being passed "stackType props', () => {
    render(<TitleWithSubtitlePresenter {...mockHasUnderlineProps} />)

    const element = screen.getByRole('heading', {name: mockHasUnderlineProps.title}).closest('div')

    expect(element).toHaveClass(styles['c-title-with-subtitle--vstack'])
    expect(element).toHaveClass('c-title-with-subtitle--vstack')

  })

  test('has "hstack" class if being passed "hstack" as props', () => {
    render(<TitleWithSubtitlePresenter {...mockHasHstacClassProps} />)

    const element = screen.getByRole('heading', {name: mockHasHstacClassProps.title}).closest('div')

    expect(element).toHaveClass(styles['c-title-with-subtitle--hstack'])
    expect(element).toHaveClass('c-title-with-subtitle--hstack')
  })

  test('has a class which is not a class of CSS Module if being passed as "pjclass" props', () => {
    render(<TitleWithSubtitlePresenter {...mockHasPjClassProps} />)

    const element = screen.getByRole('heading', {name: mockHasPjClassProps.title}).closest('div')

    expect(element).toHaveClass("my-custom-class")
  })

  test('has a class which is not a class of CSS Module if being passed as "pjclass" props', () => {
    render(<TitleWithSubtitlePresenter {...mockHasVWriteProps} />)

    const element = screen.getByRole('heading', {name: mockHasVWriteProps.title}).closest('div')

    expect(element).toHaveClass(styles["c-title-with-subtitle--vwrite"])
    expect(element).toHaveClass("c-title-with-subtitle--vwrite")
  })

})