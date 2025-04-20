import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { GoogleMapEmbedPresenter } from './presenter'
import { GoogleMapEmbedProps } from './types'

describe('GoogleMapEmbedPresenter', () => {

  const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.6281932634374!2d172.63383917676575!3d-43.53094552110831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a3cabb0b489%3A0xa0f1ff0b5ab2c388!2z44Kv44Op44Kk44K544OI44OB44Oj44O844OB5aSn6IGW5aCC!5e0!3m2!1sja!2sjp!4v1745134798577!5m2!1sja!2sjp"

  // mockProps
  const mockOnlyRequiredProps: GoogleMapEmbedProps = {
    src: mapURL
  }

  const mockDesignatedProps: GoogleMapEmbedProps = {
    src: mapURL,
    id: "mygooglemap",
    title: "My Google Map"
  }

  // helper functions
  const getIframe = (title: string) => screen.getByTitle(title)

  // Tests

  test('renders iframe with URL from props correctly', () => {
    render(<GoogleMapEmbedPresenter {...mockOnlyRequiredProps} />)

    // const iframeContainer = screen.getByTitle("Google Map")
    const iframe = getIframe("Google Map")
    
    // Test if iframe exists
    expect(iframe).toBeInTheDocument()

    // Test if iframe's source is correct
    expect(iframe).toHaveAttribute("src", mockOnlyRequiredProps.src)

    expect(iframe.parentElement).toBeInTheDocument()
  })


  test('has a parent with which has the default id', () => {
    render(<GoogleMapEmbedPresenter {...mockOnlyRequiredProps} />)

    // const iframeContainer = screen.getByTitle("Google Map")
    const iframe = getIframe("Google Map")

    expect(iframe.parentElement).toBeInTheDocument()
    expect(iframe.parentElement).toHaveAttribute("ID", "googlemap")
  })

  test('has the same title as props value', () => {
    render(<GoogleMapEmbedPresenter {...mockDesignatedProps} />)

    // const iframeContainer = screen.getByTitle("My Google Map")
    const iframe = getIframe("My Google Map")

    expect(iframe).toHaveAttribute("title", mockDesignatedProps.title)
    expect(iframe.parentElement).toBeInTheDocument()
  })

  test('has a parent which has the same title as the props value', () => {
    render(<GoogleMapEmbedPresenter {...mockDesignatedProps} />)

    // const iframeContainer = screen.getByTitle("My Google Map")
    const iframe = getIframe("My Google Map")

    expect(iframe.parentElement).toBeInTheDocument()
    expect(iframe.parentElement).toHaveAttribute("ID", mockDesignatedProps.id)
  })

})