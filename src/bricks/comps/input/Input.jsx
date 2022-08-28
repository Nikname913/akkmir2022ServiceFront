/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from './input'

const InputWrapper = css.InputWrapper

const Input = (props) => {

  const { 
    type = 'text',
    params, 
    css = null,
    inputCss = null,
    placeholder = '',
    maxlength = 100,
    title = null,
    disabled = false,
    dispatchType = null } = props

  return (
    <InputWrapper
      styles={params}
      style={ css && css }
    >
      
      { title && <span style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'white' }}>{ title }</span> }

      { dispatchType === 'number' ? <input
        type={type}
        placeholder={placeholder}
        maxLength={maxlength}
        disabled={disabled}
        style={ !inputCss ? {
          display: 'block',
          width: '100%',
          height: '44px',
          outline: 'none',
          borderRadius: '8px',
          boxShadow: '0px 0px 1.5px grey',
          fontSize: '13px',
          paddingLeft: '12px'
        } : {
          display: 'block',
          width: '100%',
          height: '44px',
          outline: 'none',
          borderRadius: '8px',
          boxShadow: '0px 0px 1.5px grey',
          fontSize: '13px',
          paddingLeft: '12px',
          ...inputCss,
        }}
      /> : <input
        type={type}
        placeholder={placeholder}
        maxLength={maxlength}
        disabled={disabled}
        style={ !inputCss ? {
          display: 'block',
          width: '100%',
          height: '44px',
          outline: 'none',
          borderRadius: '8px',
          boxShadow: '0px 0px 1.5px grey',
          fontSize: '13px',
          paddingLeft: '12px'
        } : {
          display: 'block',
          width: '100%',
          height: '44px',
          outline: 'none',
          borderRadius: '8px',
          boxShadow: '0px 0px 1.5px grey',
          fontSize: '13px',
          paddingLeft: '12px',
          ...inputCss,
        }}
      /> }

    </InputWrapper>
  )
}

export default Input