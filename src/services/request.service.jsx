/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

const RequestActionsComponent = (props) => {

  const { make = true,
    callbackAction,
    requestData: {
      type = 'GET',
      urlstring = '',
      reqbody = null
    }} = props

  useEffect( async () => {

    false && console.log(callbackAction)

    const requestType = type
    switch(requestType) {
      
      case 'GET':

        const response = await fetch(urlstring)

        if ( response.status === 200 ) {

          const data = await fetch(urlstring).then(data => data.json())
          return data
      
        }

        break

      case 'POST':

        reqbody && console.log(reqbody)
        break

      default:
        break

    }
  },[ make ])

  return <React.Fragment/>

}

export default RequestActionsComponent