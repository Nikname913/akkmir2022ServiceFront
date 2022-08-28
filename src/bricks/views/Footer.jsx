import React from 'react'
import css from '../../styles/footer'
import Button from '../comps/button/Button.jsx'
import vkimage from '../../img/vkon.png'

const Foot = css.Footer
const FootContent = css.FooterContent
const FootContentCol = css.FooterContentColumn

const Footer = () => {

  return (
    <React.Fragment>
      <Foot>

        <FootContent>
          <FootContentCol>

              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Принцип работы</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Почему Akkmir</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Наши сертификаты</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Прием ваших аккумуляторов</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Полезно знать</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Новости компании</span>

          </FootContentCol>
          <FootContentCol>

              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Оплата и доставка</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Корпоративным клиентам</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Услуги сервисных центров</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Наши акции</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Договор публичной оферты</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Бонусная программа</span>
              <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Вакансии компании</span>

          </FootContentCol>
          <FootContentCol>

            <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>[ платежные системы ]</span>
            <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Подписывайтесь на нас:</span>

            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '32px'
              }}
            >
              <img 
                src={vkimage} 
                alt={""}
                style={{
                  display: 'block',
                  width: '30px',
                  height: '30px',
                }}
              />
              <img 
                src={vkimage} 
                alt={""}
                style={{
                  display: 'block',
                  width: '30px',
                  height: '30px',
                  marginLeft: '12px'
                }}
              />
              <img 
                src={vkimage} 
                alt={""}
                style={{
                  display: 'block',
                  width: '30px',
                  height: '30px',
                  marginLeft: '12px'
                }}
              />
            </span>

          </FootContentCol>
          <FootContentCol>

            <span style={{ color: 'white', lineHeight: '32px', fontSize: '20px', marginBottom: '20px' }}>+7 (343) 261-62-62</span>
            <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px', marginBottom: '8px' }}>Есть пожелания и предложения?</span>

            <Button  
              params={{
                width: 200,
                height: 36,
                background: 'white'
              }}
              inner={"Написать директору"}
              css={{
                fontSize: '13px',
                boxShadow: 'none'
              }}
            />

          </FootContentCol>
        </FootContent>

        <p style={{ color: '#F7F7F7', textAlign: 'center', fontSize: '14px', marginTop: '30px' }}>© 2022 Аккумуляторный мир</p>

      </Foot>
    </React.Fragment>
  )

}

export default Footer