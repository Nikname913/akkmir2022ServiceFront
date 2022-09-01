/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const DatepickerComponent = {

  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin-top: 22px;
  `,
  DateButton: styled.div`
    display: block;
    position: relative;
    box-sizing: border-box;
    width: calc(14.2857% - 8px);
    height: auto;
    background-color: ${ props => props.background };
    border-radius: 15px;
    margin-right: 8px;
    margin-bottom: 8px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    padding-top: 12px;
    padding-bottom: 12px;
  `,
  DayName: styled.div`
    display: block;
    position: relative;
    box-sizing: border-box;
    width: calc(14.2857% - 8px);
    margin-right: 8px;
    margin-bottom: 10px;
    text-align: center;
    color: white;
    font-size: 14px;
    font-weight: 600;
  `

}

const { DateButton, DayName } = DatepickerComponent

const Datepicker = (props) => {

  const [ days, setDays ] = useState([])
  const [ selectedDayIndex, setSelectedDayIndex ] = useState(null)
  const { setMonth } = props

  useEffect(() => {

    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth()
    let date = d.getDate()
    let day = d.getDay()

    d.setDate(1)
    let FIRST_DAY = d.getDay()

    if ( FIRST_DAY === 0 ) FIRST_DAY = 6
    if ( FIRST_DAY === 1 ) FIRST_DAY = 0
    if ( FIRST_DAY === 2 ) FIRST_DAY = 1
    if ( FIRST_DAY === 3 ) FIRST_DAY = 2
    if ( FIRST_DAY === 4 ) FIRST_DAY = 3
    if ( FIRST_DAY === 5 ) FIRST_DAY = 4
    if ( FIRST_DAY === 6 ) FIRST_DAY = 5

    d.setDate(d.getDate() + 30)

    if ( month === d.getMonth() ) { /* в месяце 31 день */ } else {

      let daysArray = Array(FIRST_DAY).fill({ date: 0, background: '#666666' });

      if ( month === 0 ) month = 'Янв'
      if ( month === 1 ) month = 'Фев'
      if ( month === 2 ) month = 'Март'
      if ( month === 3 ) month = 'Апр'
      if ( month === 4 ) month = 'Мая'
      if ( month === 5 ) month = 'Июня'
      if ( month === 6 ) month = 'Июля'
      if ( month === 7 ) month = 'Авг'
      if ( month === 8 ) month = 'Сен'
      if ( month === 9 ) month = 'Окт'
      if ( month === 10 ) month = 'Ноя'
      if ( month === 11 ) month = 'Дек'

      for ( let i = 0; i < 30; i++ ) {

        let indexDate = i + 1
        daysArray.push({ 
          date: indexDate, 
          background: '#858585',
          month
        })

      }

      let delta = 35 - daysArray.length

      for ( let i = 0; i < delta; i++ ) {

        daysArray.push({ date: 0, background: '#666666' })

      }

      console.log('в этом месяце 30 дней')
      console.log(daysArray)

      setDays(daysArray)
      setMonth(month)

    } 

  },[ days ])

  return (
    <React.Fragment>
      <DatepickerComponent.Wrapper>

        <DayName>Пн</DayName>
        <DayName>Вт</DayName>
        <DayName>Ср</DayName>
        <DayName>Чт</DayName>
        <DayName>Пт</DayName>
        <DayName>Сб</DayName>
        <DayName>Вс</DayName>

        { days.map((day, index) => {

          return (
            <React.Fragment>
              <DateButton 
                background={() => {
                  
                  if ( selectedDayIndex === index ) {

                    if ( day.date !== 0 ) return '#2BC631'
                    else return day.background

                  } else {

                    return day.background

                  }

                }} 
                key={index}
                onClick={() => setSelectedDayIndex(index)}
              >

                <span
                  style={{
                    display: 'block',
                    position: 'relative',
                    boxSizing: 'border-box',
                    width: '100%',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  { day.date !== 0 && day.date }</span>

                <span
                  style={{
                    display: 'block',
                    position: 'relative',
                    boxSizing: 'border-box',
                    width: '100%',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '14px',
                    marginTop: '2px'
                  }}
                >
                  { day.month }</span>

              </DateButton>
            </React.Fragment>
          )

        })}

      </DatepickerComponent.Wrapper>

    </React.Fragment>
  )

}

export default Datepicker