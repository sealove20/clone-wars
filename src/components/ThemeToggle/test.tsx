import * as React from 'react'
import { screen, render } from '@testing-library/react'
import ThemeToggle from '@/components/ThemeToggle'

describe('Theme Toggle tests Component', () => {
  test('Should render ThemeToggle component', () => {
    render(<ThemeToggle />)
    const themeToggleButton = screen.getByRole('button', {
      name: /toggle dark mode/i
    })
    expect(themeToggleButton).toBeInTheDocument()
  })
})
