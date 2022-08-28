import styled from 'styled-components'
const css = {

  Button: styled.span`
    display: block;
    position: relative;
    width: ${ props => props.styles.width }px;
    height: ${ props => props.styles.height }px;
    background-color: ${ props => props.styles.background };
    border-radius: 12px;
    line-height: ${ props => props.styles.height - 2 }px;
    box-shadow: 0px 0px 1.5px black;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
  `

}

export default css