import React from 'react'

import { Text, View } from 'react-native'

import BasicInformation from '../../../JobPostDetails/FromReduxstore/BasicInformation'
import ServiceDetails from '../../../JobPostDetails/FromReduxstore/ServiceDetails'
import SeniorDetails from '../../../JobPostDetails/FromReduxstore/SeniorDetails'
import HouseDetails from '../../../JobPostDetails/FromReduxstore/HouseDetails'
import CaregiverPreferences from '../../../JobPostDetails/FromReduxstore/CaregiverPreferences'

export default SubmitJobAccordionBody = props => {
	switch (props.sectionName) {
		case 'Basic Information':
			return (
				<BasicInformation sectionData={props.sectionData} />
			)
		case 'Service Details':
			return (
				<ServiceDetails sectionData={props.sectionData} />
			)
		case 'Senior Details':
			return (
				<SeniorDetails sectionData={props.sectionData} />
			)
		case 'House Details':
			return (
				<HouseDetails sectionData={props.sectionData} />
			)
		case 'Caregiver Preference':
			return (
				<CaregiverPreferences sectionData={props.sectionData} />
			)
		default: 
			return (
				<View>
					<Text>Error</Text>
				</View>
			)
	}
}