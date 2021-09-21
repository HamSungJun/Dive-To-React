import React from 'react'
import { SlottedButtonProps } from './types'
import './index.scss'

const SlottedButton: React.FC<SlottedButtonProps> = ({ children, clickHandler }) => {
  return (
        <button className="button-wrap" onClick={clickHandler}>
            {children}
        </button>
  )
}

export default SlottedButton
