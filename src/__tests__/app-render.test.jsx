import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App', () => {
  it('renders Home heading', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/SOFTWARE/i)).toBeInTheDocument()
  })

  it('navigates to About route (static render)', () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/JAKUB/i)).toBeInTheDocument()
  })
})