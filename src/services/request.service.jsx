/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { WarehousesContext, WritingsContext } from '../appStore/context'

const RequestActionsComponent = (props) => {

  const [ ,setWrhs ] = useContext(WarehousesContext)
  const [ ,setWritings ] = useContext(WritingsContext)

  const { make = true,
    callbackAction,
    requestData: {
      type = 'GET',
      urlstring = '',
      reqbody = null
    }} = props

  useEffect(() => {

    async function request() {

      false && console.log(callbackAction)

      const requestType = type
      switch(requestType) {
        
        case 'GET':

          const response = await fetch(urlstring)

          if ( response.status === 200 ) {

            const data = await fetch(urlstring).then(data => data.json())

            if ( callbackAction === 'GET_WAREHOUSES' ) {

              const arr = data.data.warehouses.warehouse
              setWrhs(arr)

            }

            if ( callbackAction === 'GET_WRITINGS' ) {

              setWritings(data)

            }
        
          }

          break

        case 'POST':

          await fetch(urlstring, {
            method: 'POST',
            headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, 
            body: reqbody
          })

          break

        default:
          break

    }}

    request()

  },[ make ])

  return <React.Fragment/>

}

export default RequestActionsComponent