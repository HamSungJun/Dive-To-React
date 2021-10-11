import { createContext } from 'react'
import { ThemeContext } from './types'
export default createContext<ThemeContext>({
  currentTheme: 'light',
  changeTheme: null
})
