/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from './views/Header'
import Footer from './views/Footer'
import Workspace from './views/Workspace'

import { WarehousesContext, 
  WritingsContext,
  UserNameContext,
  UserSecondNameContext,
  CarContext,
  UserNumberContext,
  UserMailContext,
  CarModelContext,
  UserServiceContext,
  UserWarehouseContext,
  UserDateContext,
  UserTimeContext } from '../appStore/context'

function Main() {

  const [ wrhs, setWrhs ] = useState()
  const [ writings, setWritings ] = useState()

  const [ userName, setUserName ] = useState()
  const [ userSecondName, setUserSecondName ] = useState()
  const [ userCar, setUserCar ] = useState('')
  const [ userNumber, setUserNumber ] = useState('')
  const [ userMail, setUserMail ] = useState('')
  const [ carModel, setCarModel ] = useState('')
  const [ userService, setUserService ] = useState('Не выбрано')
  const [ userWarehouse, setUserWarehouse ] = useState('Не выбрано')
  const [ userDate, setUserDate ] = useState('28-08-2022')
  const [ userTime, setUserTime ] = useState('Не выбрано') 

  return (
    <WarehousesContext.Provider value={[ wrhs, setWrhs ]}>
    <WritingsContext.Provider value={[ writings, setWritings ]}>
    <UserNameContext.Provider value={[ userName, setUserName ]}>
    <UserSecondNameContext.Provider value={[ userSecondName, setUserSecondName ]}>
    <CarContext.Provider value={[ userCar, setUserCar ]}>
    <UserNumberContext.Provider value={[ userNumber, setUserNumber ]}>
    <UserMailContext.Provider value={[ userMail, setUserMail ]}>
    <CarModelContext.Provider value={[ carModel, setCarModel ]}>
    <UserServiceContext.Provider value={[ userService, setUserService ]}>
    <UserWarehouseContext.Provider value={[ userWarehouse, setUserWarehouse ]}>
    <UserDateContext.Provider value={[ userDate, setUserDate ]}>
    <UserTimeContext.Provider value={[ userTime, setUserTime ]}>
      <React.Fragment>
        <Header></Header>
        <Workspace></Workspace>
        <Footer></Footer>
      </React.Fragment>
    </UserTimeContext.Provider>
    </UserDateContext.Provider>
    </UserWarehouseContext.Provider>
    </UserServiceContext.Provider>
    </CarModelContext.Provider>
    </UserMailContext.Provider>
    </UserNumberContext.Provider>
    </CarContext.Provider>
    </UserSecondNameContext.Provider>
    </UserNameContext.Provider>
    </WritingsContext.Provider>
    </WarehousesContext.Provider>
  )
}

export default Main