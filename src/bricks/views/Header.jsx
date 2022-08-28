import React from 'react'
import css from '../../styles/header'
import Button from '../comps/button/Button.jsx'

import cabinet from '../../img/cabinet.png'
import geonumber from '../../img/geonumber.png'
import tools from '../../img/menuTools.png'
import glushImg from '../../img/glushka.png'

const Head = css.Header
const LogoContent = css.HeaderLogoLine
const LogoContentWrapper = css.HeaderLogoLineWrapper
const LogoTitle = css.HeaderLogoTitle
const MainContentWrapper = css.HeaderMainContentWrapper

const Header = () => {

  return (
    <React.Fragment>
      <Head>
        <LogoContent style={{ paddingTop: '16px' }}>
          <LogoContentWrapper>

            <LogoTitle style={{ overflow: 'hidden', position: 'relative', width: '600px', height: '60px' }}>
              <img
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '800px',
                  top: '0px',
                  left: '0px',
                  marginLeft: '-114px',
                  marginTop: '-4px'
                }}
                src={glushImg}
                alt={""}
              />
            </LogoTitle>

          </LogoContentWrapper>
          <LogoContentWrapper style={{ justifyContent: 'space-between' }}>
            
            <Button  
              params={{
                width: 200,
                height: 30,
                background: 'white'
              }}
              inner={"Личный кабинет"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                borderRadius: '15px'
              }}
              children={
                <img
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '22px',
                    height: '22px',
                    top: '50%',
                    marginTop: '-11px',
                    marginLeft: '10px'
                  }}
                  src={cabinet}
                  alt={""}/>
              }/> 

            <Button  
              params={{
                width: 200,
                height: 30,
                background: 'white'
              }}
              inner={"Екатеринбург"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                borderRadius: '15px'
              }}
              children={
                <img
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '18px',
                    top: '50%',
                    marginTop: '-10px',
                    marginLeft: '9px'
                  }}
                  src={geonumber}
                  alt={""}
                />
              }
            />
            <Button  
              params={{
                width: 200,
                height: 30,
                background: 'white'
              }}
              inner={"8(343)261-62-62"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                borderRadius: '15px'
              }}
              children={
                <img
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '18px',
                    top: '50%',
                    marginTop: '-10px',
                    marginLeft: '9px'
                  }}
                  src={geonumber}
                  alt={""}
                />
              }
            />

          </LogoContentWrapper>
        </LogoContent>
        <MainContentWrapper 
          style={{ 
            justifyContent: 'flex-start',
            paddingTop: '16px',
            paddingBottom: '20px'
          }}
        >
          <Button  
            params={{
              width: 154,
              height: 36,
              background: '#D62E2B'
            }}
            inner={"Услуги"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: 'white',
              marginRight: '44px',
              borderRadius: '12px',
              letterSpacing: '1px',
              paddingLeft: '4px',
            }}
            children={
              <img
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '18px',
                  height: '18px',
                  top: '50%',
                  marginTop: '-9px',
                  marginLeft: '9px'
                }}
                src={tools}
                alt={""}
              />
            }
          />

          <span style={{ color: '#858585', fontSize: '13px', marginRight: '30px', cursor: 'pointer' }}>Адреса сервисных цетров</span>
          <span style={{ color: '#858585', fontSize: '13px', marginRight: '30px', cursor: 'pointer' }}>О компании</span>
          <span style={{ color: '#858585', fontSize: '13px', marginRight: '30px', cursor: 'pointer' }}>Контакты</span>

          <Button  
            params={{
              width: 200,
              height: 36,
              background: '#2E2E2E'
            }}
            inner={"Записаться в сервис"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: 'white',
              marginRight: '44px',
              borderRadius: '12px',
              letterSpacing: '1px',
              paddingLeft: '4px',
              position: 'absolute',
              left: '100%',
              marginLeft: '-290px'
            }}
          />

        </MainContentWrapper>
      </Head>
    </React.Fragment>
  )
}

export default Header