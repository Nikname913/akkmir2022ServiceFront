import styled from 'styled-components'
const css = {

  Footer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1950px;
    min-width: 1450px;
    height: auto;
    min-height: 100px;
    background-color: #2E2E2E;
    box-sizing: border-box;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 50px;
    padding-bottom: 50px;
  `,
  FooterContent: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: auto;
    border-bottom: 1px solid #F7F7F7;
    padding-bottom: 30px;
  `,
  FooterContentColumn: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 25%;
    height: auto;
  `

}

export default css