import styled from 'styled-components'
const css = {

  Header: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1950px;
    min-width: 1450px;
    height: auto;
    min-height: 100px;
    background-color: #F7F7F7;
    box-sizing: border-box;
  `,
  HeaderMenu: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    min-height: 46px;
    padding-left: 90px;
    padding-right: 90px;
  `,
  HeaderMenuButton: styled.span`
    display: block;
    position: relative;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
  `,
  HeaderLogoLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    padding-left: 90px;
    padding-right: 90px;
  `,
  HeaderLogoLineWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    height: auto;
  `,
  HeaderLogoTitle: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 30px;
  `,
  HeaderMainContentWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 24px;
    padding-bottom: 34px;
  `
}

export default css