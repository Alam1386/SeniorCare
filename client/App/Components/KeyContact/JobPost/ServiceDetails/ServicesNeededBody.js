import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import PostJobTop from '../PostJobTop'
import { basicInformationStyles } from '../../../Styles/PostJob/BasicInformationStyles'
import ServicesNeeded from './ServicesNeeded';
import HouseHoldNeeds from './HouseHoldNeeds';

const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const ServicesNeededBody = props => {
  let body;

  if (props.formPosition === 0) {
    body = 
		<ServicesNeeded navigation={props.navigation} />
  } else if (props.formPosition === 1) {
    body = 
		<HouseHoldNeeds navigation={props.navigation} />
	} 
	
	return (
		body
	)
}

// export default ServicesNeededBody
export default connect(mapStateToProps)(ServicesNeededBody)
