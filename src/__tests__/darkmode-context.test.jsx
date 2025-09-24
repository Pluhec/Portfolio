import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { DarkModeProvider, useDark } from '../state/DarkModeContext'

function Probe(){
  const { dark, setDark } = useDark()
  return <button onClick={()=>setDark(!dark)}>{dark? 'on':'off'}</button>
}

describe('DarkModeContext', () => {
  it('toggles and persists without React default import', () => {
    localStorage.setItem('darkMode', 'disabled')
    const { getByText } = render(<DarkModeProvider><Probe/></DarkModeProvider>)
    getByText('off').click()
    expect(localStorage.getItem('darkMode')).toBe('enabled')
  })
})