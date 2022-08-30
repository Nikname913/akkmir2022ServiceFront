/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useContext } from 'react'
import css from './input'
import { WarehousesContext, 
  UserNameContext,
  UserSecondNameContext,
  CarContext,
  UserNumberContext,
  UserMailContext,
  CarModelContext } from '../../../appStore/context'

const InputWrapper = css.InputWrapper

const Input = (props) => {

  const [ wrhs, setWrhs ] = useContext(WarehousesContext)
  const [ ,setUserName ] = useContext(UserNameContext)
  const [ ,setUserSecondName ] = useContext(UserSecondNameContext)
  const [ ,setUserCar ] = useContext(CarContext)
  const [ ,setUserNumber ] = useContext(UserNumberContext)
  const [ ,setUserMail ] = useContext(UserMailContext)
  const [ ,setCarModel ] = useContext(CarModelContext)

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

  function inputDispatcher(event) {

    const val = event.target.value

    switch(dispatchType) {

      case 'SET_NUMBER':

        if ( event.target.value.length === 0 ) event.target.value = '+7'
        if ( event.target.value === '+' ) event.target.value = '+7'
        if ( /\D/.test(event.key) ) {
          
          if ( event.key !== 'Backspace' ) { event.preventDefault() }
          else { if ( event.target.value === '+7') event.target.value = '' }
        
        }

        setUserNumber(event.target.value)
        break
      case 'SET_NAME':
        setUserName(val)
        break
      case 'SET_CAR':
        setUserCar(val)
        break
      case 'SET_POST':
        setUserMail(val)
        break
      case 'SET_SURNAME':
        setUserSecondName(val)
        break
      case 'SET_CAR_MODEL':
        setCarModel(val)
        break

      default:
        break

    }

  }

  function inputClearState(event) {

    const val = event.target.value

    switch(dispatchType) {

      case 'SET_NUMBER':
        !val && setUserNumber(event.target.value)
        setUserNumber(event.target.value)
        break
      case 'SET_NAME':
        !val && setUserName(val)
        setUserName(val)
        break
      case 'SET_CAR':
        !val && setUserCar(val)
        setUserCar(val)
        break
      case 'SET_POST':
        !val && setUserMail(val)
        setUserMail(val)
        break
      case 'SET_SURNAME':
        !val && setUserSecondName(val)
        setUserSecondName(val)
        break
      case 'SET_CAR_MODEL':
        !val && setCarModel(val)
        setCarModel(val)
        break

      default:
        break

    }
  }

  return (
    <InputWrapper
      styles={params}
      style={ css && css }
    >
      
      { title && <span style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'white' }}>{ title }</span> }

      <input
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
        onKeyPress={inputDispatcher}
        onKeyUp={inputClearState}
      />

    </InputWrapper>
  )
}

export default Input