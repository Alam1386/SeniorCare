import React, {useState} from 'react'
import BasicInformationTitle from './BasicInformationTitle'
import BasicInformationCalendar from './BasicInformationCalendar'
import BasicInformationAddress from './BasicInformationAddress'
import BasicInformationRate from './BasicInformationRate'

const BasicInformationBody = props => {
  let body;

  if (props.formPosition === 0) {
      body = <BasicInformationTitle navigation={props.navigation} />
  } else if (props.formPosition === 1) {
      body = <BasicInformationCalendar navigation={props.navigation} />
  } else if (props.formPosition === 2) {
      body = <BasicInformationAddress navigation={props.navigation} />
  } else if (props.formPosition === 3) {
      body = <BasicInformationRate navigation={props.navigation} />
  }

  return (
      body
  )
}

export default BasicInformationBody