/* eslint-disable no-unused-vars */
import React from 'react'
import css from '../../styles/form'
import Input from '../comps/input/Input.jsx'
import Button from '../comps/button/Button.jsx'
import Datepicker from '../../services/datepicker.service'

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
  return (
    <React.Fragment>
      <div style={{ paddingLeft: '90px', paddingRight: '90px', backgroundColor: '#F7F7F7' }}>
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
                  }}
                  title={"Мобильный телефон*"}
                  css={{ marginTop: '16px', marginRight: '18px' }}
                  dispatchType={"number"}
                />
                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"Иван Иванов"}
                  inputCss={{ 
                    border: 'none',
                  }}
                  title={"Ваше имя*"}
                  css={{ marginTop: '16px', marginRight: '18px' }}
                  dispatchType={"number"}
                />
                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"Lada Vesta"}
                  inputCss={{ 
                    border: 'none',
                  }}
                  title={"Марка авто*"}
                  css={{ marginTop: '16px' }}
                  dispatchType={"number"}
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
                  title={"Почта*"}
                  css={{ marginTop: '20px', marginRight: '18px' }}
                  dispatchType={"number"}
                />
                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"Иван Иванов"}
                  inputCss={{ 
                    border: 'none',
                  }}
                  title={"Ваша фамилия*"}
                  css={{ marginTop: '20px', marginRight: '18px' }}
                  dispatchType={"number"}
                />
                <Input
                  params={{ width: 180 }}
                  type={"text"}
                  placeholder={"Lada Vesta"}
                  inputCss={{ 
                    border: 'none',
                  }}
                  title={"Модель автомобиля*"}
                  css={{ marginTop: '20px' }}
                  dispatchType={"number"}
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
                      params={{
                        width: '',
                        height: 36,
                        background: '#2E2E2E'
                      }}
                      inner={service}
                      css={{
                        fontSize: '13px',
                        boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                        color: 'white',
                        borderRadius: '12px',
                        letterSpacing: '1px',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        marginRight: '6px',
                        marginBottom: '7px',
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
                background: '#2E2E2E'
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
                      params={{
                        width: '',
                        height: 36,
                        background: '#2E2E2E'
                      }}
                      inner={service}
                      css={{
                        fontSize: '13px',
                        boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.25)',
                        color: 'white',
                        borderRadius: '12px',
                        letterSpacing: '1px',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        marginRight: '6px',
                        marginBottom: '7px',
                      }}
                    />
                  )

                })}

            </LeftColumnContentBlock>

            <Button  
              params={{
                width: 304,
                height: 44,
                background: '#2E2E2E'
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

          </RightColumn>

        </Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Form