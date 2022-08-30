/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import css from '../../styles/form'
import Input from '../comps/input/Input.jsx'
import Button from '../comps/button/Button.jsx'
import Datepicker from '../../services/datepicker.service'
import RequestActionsComponent from '../../services/request.service'
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
  UserTimeContext } from '../../appStore/context'

const { Wrapper, 
  LeftColumn, 
  RightColumn,
  LeftColumnContentBlock } = css

const iStyles = {
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
}

const iStylesOne = {
  ...iStyles,
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  backgroundColor: '#D62E2B'
}

const iStylesTwo = {
  ...iStyles,
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  backgroundColor: '#858585'
}

const iStylesThree = {
  ...iStyles,
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  backgroundColor: '#2BC631'
}

function Form() {

  const [ wrhs, ] = useContext(WarehousesContext)
  const [ writings, ] = useContext(WritingsContext)
  const [ userName, ] = useContext(UserNameContext)
  const [ userSecondName, ] = useContext(UserSecondNameContext)
  const [ userCar, ] = useContext(CarContext)
  const [ userNumber, ] = useContext(UserNumberContext)
  const [ userMail, ] = useContext(UserMailContext)
  const [ carModel, ] = useContext(CarModelContext)
  const [ userService, setUserService ] = useContext(UserServiceContext)
  const [ userWarehouse, setUserWarehouse ] = useContext(UserWarehouseContext)
  const [ userDate, ] = useContext(UserDateContext)
  const [ userTime, setUserTime ] = useContext(UserTimeContext) 

  const [ serviceSelectedIndex, setServiceSelectedIndex ] = useState(-10)
  const [ wrhsSelectedIndex, setWrhsSelectedIndex ] = useState(-10)
  const [ timeSelectedIndex, setTimeSelectedIndex ] = useState(-10)
  const [ reqbody, setReqbody ] = useState()
  const [ sendNewWriting, setSendNewWriting ] = useState(false)
  const [ nonChoiseTime, setNonChoiseTime ] = useState([])

  console.log(writings)

  function sendWriting() {
    
    false && console.log(userName)
    false && console.log(userSecondName)
    false && console.log(userCar)
    false && console.log(userNumber)
    false && console.log(userMail)
    false && console.log(carModel)
    false && console.log(userService)
    false && console.log(userWarehouse)
    false && console.log(userDate)
    false && console.log(userTime)

    if ( userNumber && userName && userCar && userWarehouse && userDate && userTime ) {

      // ------------------------------
      // ------------------------------
      // { "service": "ef7f622d-b37b-11e9-80ef-00155d0bfb06",
      //   "user": "Николай Шипов",
      //   "number": "9068085023",
      //   "date": "28-08-2022",
      //   "time": "19:00",
      //   "workType": "Шиномонтаж",
      //   "auto": "lada vesta",
      //   "model": "кто ее знает",
      //   "email": "nik.shipov@gmail.com",
      //   "comment": "без комментариев" }
      // ------------------------------
      // ------------------------------

      const userFio = userName + ' ' + userSecondName
      const reqData = {
        service: userWarehouse.id,
        user: userFio,
        number: userNumber,
        date: userDate,
        time: userTime,
        workType: userService,
        auto: userCar,
        model: carModel,
        email: userMail,
        comment: '' 
      }

      const reqDataJson = JSON.stringify(reqData)

      setReqbody(reqDataJson)
      setSendNewWriting(true)
      console.log(reqDataJson)

    }

  }

  useEffect(() => {

    let arr = []
    
    writings && writings.data.forEach(item => {

      if ( item.service === userWarehouse.id ) arr.push(item.time)

    })

    setNonChoiseTime(arr)

  },[ userWarehouse ])

  return (
    <React.Fragment>

      <RequestActionsComponent
        callbackAction={"GET_WAREHOUSES"}
        requestData={{
          type: 'GET',
          urlstring: '/getServicesList',
        }}
      />

      <RequestActionsComponent
        callbackAction={"GET_WRITINGS"}
        requestData={{
          type: 'GET',
          urlstring: '/getWritingsList',
        }}
      />

      { sendNewWriting && <RequestActionsComponent
        callbackAction={"NEW_WRITING"}
        requestData={{
          type: 'POST',
          urlstring: '/newWriting',
          reqbody
        }}
      /> }

      <div style={{ paddingLeft: '90px', paddingRight: '90px', backgroundColor: '#F7F7F7', paddingBottom: '20px' }}>
        <Wrapper>

          <LeftColumn>

            <h4 style={{ color: '#858585', fontSize: '22px', display: 'block' }}>Шаг 1</h4>
            <span style={{ color: 'white', fontSize: '16px', display: 'block', marginTop: '8px', fontWeight: 'bold' }}>Контактная информация</span>

            <LeftColumnContentBlock>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '100%',
                  height: 'auto',
                }} 
              >

                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"+7950.."}
                  inputCss={{ 
                    border: 'none',
                    borderRight: userNumber
                      ? '6px solid rgb(43, 198, 49)'
                      : '6px solid rgb(214, 46, 43)'
                  }}
                  title={"Мобильный телефон*"}
                  css={{ 
                    marginTop: '16px', 
                    marginRight: '18px',
                  }}
                  dispatchType={"SET_NUMBER"}
                />
                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"Иван Иванов"}
                  inputCss={{ 
                    border: 'none',
                    borderRight: userName 
                      ? '6px solid rgb(43, 198, 49)'
                      : '6px solid rgb(214, 46, 43)'
                  }}
                  title={"Ваше имя*"}
                  css={{ marginTop: '16px', marginRight: '18px' }}
                  dispatchType={"SET_NAME"}
                />
                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"Lada Vesta"}
                  inputCss={{ 
                    border: 'none',
                    borderRight: userCar
                      ? '6px solid rgb(43, 198, 49)'
                      : '6px solid rgb(214, 46, 43)'
                  }}
                  title={"Марка авто*"}
                  css={{ marginTop: '16px' }}
                  dispatchType={"SET_CAR"}
                />

              </div>

            </LeftColumnContentBlock>
            <LeftColumnContentBlock>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '100%',
                  height: 'auto',
                }} 
              >

                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"email@gmail.com"}
                  inputCss={{ 
                    border: 'none',
                  }}
                  title={"Почта"}
                  css={{ marginTop: '20px', marginRight: '18px' }}
                  dispatchType={"SET_POST"}
                />
                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"Иван Иванов"}
                  inputCss={{ 
                    border: 'none',
                  }}
                  title={"Ваша фамилия"}
                  css={{ marginTop: '20px', marginRight: '18px' }}
                  dispatchType={"SET_SURNAME"}
                />
                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"Lada Vesta"}
                  inputCss={{ 
                    border: 'none',
                  }}
                  title={"Модель автомобиля"}
                  css={{ marginTop: '20px' }}
                  dispatchType={"SET_CAR_MODEL"}
                />

              </div>

            </LeftColumnContentBlock>

            <h4 style={{ color: '#858585', fontSize: '22px', display: 'block', marginTop: '18px' }}>Шаг 2</h4>
            <span style={{ color: 'white', fontSize: '16px', width: '100%', display: 'block', marginTop: '8px', fontWeight: 'bold' }}>
              
              Выберите услугу
            
            </span>
            <span style={{ color: 'white', fontSize: '14px', width: '100%', display: 'block', marginTop: '17px' }}>
            
              Популярные услуги
              
            </span>

            <LeftColumnContentBlock 
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                marginTop: '14px'
              }}
            >

              { [ 'Диагностика ходовой',
                'Замена масла в двигателе',
                'Автоэлектрик',
                'Обслуживание тормозной системы',
                'Ремонт стартера',
                'Шиномонтаж',
                'Ремонт генератора',
                'Замена жидкостей' ].map((service, index) => {

                  return (
                    <Button  
                      key={index}
                      params={{
                        width: '',
                        height: 33,
                        background: serviceSelectedIndex === index 
                        ? '#2BC631' : '#858585'
                      }}
                      inner={service}
                      css={{
                        fontSize: '13px',
                        boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                        color: serviceSelectedIndex === index 
                        ? 'white' : '#C4C4C4',
                        borderRadius: '18px',
                        letterSpacing: '1px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        marginRight: '6px',
                        marginBottom: '7px',
                      }}
                      action={() => {
                        setUserService(service)
                        setServiceSelectedIndex(index)
                      }}
                    />
                  )

                })}

            </LeftColumnContentBlock>
            
            <span style={{ color: 'white', fontSize: '14px', width: '100%', display: 'block', marginTop: '14px' }}>
            
              Выберите услугу из списка
              
            </span>

            <Button  
              params={{
                width: 304,
                height: 44,
                background: '#858585'
              }}
              inner={"Открыть каталог услуг"}
              css={{
                fontSize: '13px',
                boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                color: 'white',
                borderRadius: '12px',
                letterSpacing: '1px',
                paddingLeft: '4px',
                marginTop: '14px'
              }}
            />

            <span style={{ color: 'white', fontSize: '16px', width: '100%', display: 'block', marginTop: '20px', fontWeight: 'bold' }}>
            
              Комментарий к заявке:
              
            </span>

            <Input
              params={{ width: 530 }}
              type={"text"}
              placeholder={"Опишите вашу проблему подробнее"}
              inputCss={{ 
                border: 'none',
                paddingBottom: '2px'
              }}
              title={""}
              css={{ marginTop: '14px' }}
              dispatchType={"number"}
            />

            <h4 style={{ color: '#858585', fontSize: '22px' , display: 'block', marginTop: '20px' }}>Шаг 3</h4>
            <span style={{ color: 'white', fontSize: '16px', marginTop: '8px', fontWeight: 'bold', display: 'block' }}>Выберите сервис в Екатеринбурге</span>
          
            <LeftColumnContentBlock 
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                marginTop: '17px'
              }}
            >

              { wrhs && wrhs.map((service, index) => {

                  return (
                    <Button  
                      key={index}
                      params={{
                        width: '',
                        height: 33,
                        background: wrhsSelectedIndex === index 
                        ? '#2BC631' : '#858585'
                      }}
                      inner={service.name}
                      css={{
                        fontSize: '13px',
                        boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                        color: wrhsSelectedIndex === index 
                        ? 'white' : '#C4C4C4',
                        borderRadius: '18px',
                        letterSpacing: '1px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        marginRight: '6px',
                        marginBottom: '7px',
                      }}
                      action={() => {
                        setUserWarehouse(service)
                        setWrhsSelectedIndex(index)
                      }}
                    />
                  )

                })}

            </LeftColumnContentBlock>

            <Button  
              params={{
                width: 304,
                height: 44,
                background: '#858585'
              }}
              inner={"Посмотреть на карте"}
              css={{
                fontSize: '13px',
                boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                color: 'white',
                borderRadius: '12px',
                letterSpacing: '1px',
                paddingLeft: '4px',
                marginTop: '14px'
              }}
            />

          </LeftColumn>
          <RightColumn>

            <h4 style={{ color: '#858585', fontSize: '22px', display: 'block' }}>Шаг 4</h4>
            <span 
              style={{ 
                color: 'white', 
                fontSize: '16px', 
                display: 'block', 
                positions: 'relative',
                marginTop: '8px', 
                fontWeight: 'bold', 
                width: '100%',
              }}>
              
              Выберите дату
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between', 
                  position: 'absolute',
                  width: '160px',
                  left: '100%',
                  marginLeft: '-160px',
                  top: '50%',
                  marginTop: '8px',
                  fontSize: '14px',
                }}
              >
                <span></span>
                <span style={{ textAlign: 'center' }}></span>
                <span></span>
              </div>
              
            </span>

            <Datepicker></Datepicker>
            <LeftColumnContentBlock 
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignContent: 'flex-start',
                marginTop: '17px'
              }}
            >

              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '16px', 
                  display: 'block', 
                  positions: 'relative',
                  fontWeight: 'bold', 
                }}>
                
                Выберите время
                
              </span>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start', 
                  color: 'white', 
                  fontSize: '14px' 
                }}
              >
                <span 
                  style={{ 
                    display: 'block', 
                    marginRight: '16px',
                    position: 'relative', 
                    paddingLeft: '22px'
                  }}
                ><i style={iStylesOne}></i>Занято</span>
                <span 
                  style={{ 
                    display: 'block', 
                    marginRight: '16px',
                    position: 'relative',
                    paddingLeft: '22px'
                  }}
                ><i style={iStylesTwo}></i>Свободно</span>
                <span 
                  style={{ 
                    display: 'block', 
                    marginRight: '12px',
                    position: 'relative',
                    paddingLeft: '22px'
                  }}
                ><i style={iStylesThree}></i>Выбрано</span>
              </div>

            </LeftColumnContentBlock>
            <LeftColumnContentBlock 
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                marginTop: '18px'
              }}
            >

              { [ '10:00','11:00','12:00','13:00','14:00',
                  '15:00','16:00','17:00','18:00','19:00','20:00' ].map((service, index) => {

                  
                  return (
                    <React.Fragment key={index}>
                      { nonChoiseTime.includes(service) === false ? <Button  
                        params={{
                          width: '',
                          height: 33,
                          background: timeSelectedIndex === index 
                          ? '#2BC631' : '#858585'
                        }}
                        inner={service}
                        css={{
                          fontSize: '13px',
                          boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                          color: 'white',
                          borderRadius: '18px',
                          letterSpacing: '1px',
                          paddingLeft: '44px',
                          paddingRight: '44px',
                          marginRight: '20px',
                          marginBottom: '10px',
                        }}
                        action={() => {
                          setUserTime(service)
                          setTimeSelectedIndex(index)
                        }}
                      /> : <Button  
                        action={() => console.log('время уже занято')}
                        params={{
                          width: '',
                          height: 33,
                          background: '#D62E2B'
                        }}
                        inner={service}
                        css={{
                          fontSize: '13px',
                          boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                          color: 'white',
                          borderRadius: '18px',
                          letterSpacing: '1px',
                          paddingLeft: '44px',
                          paddingRight: '44px',
                          marginRight: '20px',
                          marginBottom: '10px',
                        }}
                      /> }
                    </React.Fragment>
                  )

                })}

            </LeftColumnContentBlock>
            <LeftColumnContentBlock 
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignContent: 'flex-start',
                marginTop: '10px'
              }}
            >

              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '16px', 
                  display: 'block', 
                  positions: 'relative',
                  fontWeight: 'bold', 
                }}>
                
                Ваша запись
                
              </span>

            </LeftColumnContentBlock>
            <LeftColumnContentBlock 
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: '10px'
              }}
            >

              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  display: 'block', 
                  marginTop: '17px',
                  marginRight: '8px'
                }}
              >
            
                Выбранная услуга:
                
              </span>
              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  display: 'block', 
                  marginTop: '17px',
                  marginRight: '30px'
                }}
              >
            
                { userService }
                
              </span>
              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  display: 'block', 
                  marginTop: '17px',
                  marginRight: '8px'
                }}
              >
            
                Дата:
                
              </span>
              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  display: 'block', 
                  marginTop: '17px' 
                }}
              >
            
                { userDate }
                
              </span>

            </LeftColumnContentBlock>
            <LeftColumnContentBlock 
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: '0px'
              }}
            >

              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  display: 'block', 
                  marginTop: '17px',
                  marginRight: '8px'
                }}
              >
            
                Адрес:
                
              </span>
              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  display: 'block', 
                  marginTop: '17px',
                  marginRight: '30px'
                }}
              >
            
                { userWarehouse.name }
                
              </span>
              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  display: 'block', 
                  marginTop: '17px',
                  marginRight: '8px'
                }}
              >
            
                Время:
                
              </span>
              <span 
                style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  display: 'block', 
                  marginTop: '17px' 
                }}
              >
            
                { userTime }
                
              </span>

            </LeftColumnContentBlock>
            <LeftColumnContentBlock 
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: '40px'
              }}
            >

              <Button  
                params={{
                  width: 240,
                  height: 44,
                  background: 'white'
                }}
                inner={""}
                css={{
                  fontSize: '13px',
                  boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                  color: '#565656',
                  borderRadius: '12px',
                  letterSpacing: '1px',
                  paddingLeft: '4px',
                  marginTop: '14px',
                  marginRight: '20px',
                  opacity: '0.8'
                }}
              />
              <Button  
                params={{
                  width: 240,
                  height: 44,
                  background: '#2BC631'
                }}
                inner={"Записаться в сервис"}
                css={{
                  fontSize: '13px',
                  boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                  color: 'white',
                  borderRadius: '12px',
                  letterSpacing: '1px',
                  paddingLeft: '4px',
                  marginTop: '14px'
                }}
                action={sendWriting}
              />

            </LeftColumnContentBlock>

          </RightColumn>
        </Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Form