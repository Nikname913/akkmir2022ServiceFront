import styled from 'styled-components'
const css = {

  Wrapper: styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: auto;
    min-height: 200px;
    background-color: #565656;
    border-radius: 12px;
    padding: 20px;
  `,
  LeftColumn: styled.div`
    display: block;
    position: relative;
    width: 54%;
    height: auto;
  `,
  RightColumn: styled.div`
    display: block;
    position: relative;
    width: 46%;
    height: auto;
  `,
  LeftColumnContentBlock: styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  `

}

export default css