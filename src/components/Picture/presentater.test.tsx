import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { PicturePresenter } from './presenter'
import { PictureType } from './types'

describe('PicturePresenter', () => {
  const mockIsLazyProps: PictureType = {
    srcSP: "/src/assets/images/samples/750x750.png",
    srcSPWebp: "/src/assets/images/samples/750x750.webp",
    srcPC: "/src/assets/images/samples/1200x900.png",
    srcPCWebp: "/src/assets/images/samples/1200x900.png",
    altText: "Sample Image for Picture component",
    isLazy: true,
    breakpoint: 520,
    widthSP: 520,
    heightSP: 520,
  }

  test('renders images for pc and sp and islazy', () => {
    render(<PicturePresenter {...mockIsLazyProps} />)

    const img = screen.getByAltText(mockIsLazyProps.altText) as HTMLImageElement

    const picture = img.parentElement
    const sources = picture?.querySelectorAll('source') as NodeListOf<HTMLSourceElement>

    expect(sources).toHaveLength(3)

    const spWebp = sources?.[0]
    expect(spWebp?.getAttribute('type')).toBe('image/webp')
    expect(spWebp?.getAttribute('media')).toBe(`(max-width: ${mockIsLazyProps.breakpoint}px)`)
    expect(spWebp?.getAttribute('srcset')).toBe(mockIsLazyProps.srcSPWebp)

    const pcWebp = sources?.[1]
    expect(pcWebp?.getAttribute('type')).toBe('image/webp')
    expect(pcWebp?.getAttribute('media')).toBe(`(min-width: ${mockIsLazyProps.breakpoint && mockIsLazyProps.breakpoint + 1}px)`)
    expect(pcWebp?.getAttribute('srcset')).toBe(mockIsLazyProps.srcPCWebp)

    const pcImg = sources?.[2]
    expect(pcImg?.getAttribute('type')).toBe('image/png')
    expect(pcImg?.getAttribute('media')).toBe(`(min-width: ${mockIsLazyProps.breakpoint && mockIsLazyProps.breakpoint + 1}px)`)
    expect(pcImg?.getAttribute('srcset')).toBe(mockIsLazyProps.srcPC)

    expect(img.tagName).toBe('IMG')
    expect(img.getAttribute('src')).toBe(mockIsLazyProps.srcSP)
    expect(img.getAttribute('alt')).toBe(mockIsLazyProps.altText)
    expect(img.getAttribute('loading')).toBe('lazy')

  })

  const mockIsNotLazyProps: PictureType = {
    srcSP: "/src/assets/images/samples/750x750.png",
    srcSPWebp: "/src/assets/images/samples/750x750.webp",
    srcPC: "/src/assets/images/samples/1200x900.png",
    srcPCWebp: "/src/assets/images/samples/1200x900.png",
    altText: "Sample Image for Picture component which is not lazy",
    isLazy: false,
    breakpoint: 520,
    widthSP: 520,
    heightSP: 520,
  }

  test('renders images which is not set loading lazy', () => {
    render(<PicturePresenter {...mockIsNotLazyProps} />)

    const img = screen.getByAltText(mockIsNotLazyProps.altText) as HTMLImageElement
    
    expect(img.getAttribute('loading')).toBe(null)
    
  })

})