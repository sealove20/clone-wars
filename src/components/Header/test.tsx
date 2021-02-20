import * as React from 'react'
import { render, screen } from '@testing-library/react'

import Header from '@/components/Header'

test('Should render Header component', () => {
  render(<Header />)
  const header = screen.getByRole('header')
  expect(header).toBeInTheDocument()
})
