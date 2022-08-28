/* eslint-disable react/style-prop-object */
import React from 'react'
import css from './button'

const ButtonComp = css.Button

const Button = (props) => {

  const { 
    params, 
    css,
    inner = '',
    children = null,
    enabled = true,
    action = null } = props

  return (
    <React.Fragment>

      { enabled && <ButtonComp 
        styles={params}
        style={css && css}
        onClick={action && action}
      >
        
        { children && children }
        { inner && inner }

      </ButtonComp> }
    </React.Fragment>
  )
}

export default Button