import React from 'react'

import { Text, View } from 'react-native'

import FDBasicInformation from './FDBasicInformation'
import FDServiceDetails from './FDServiceDetails'
import FDSeniorDetails from './FDSeniorDetails'
import FDHouseDetails from './FDHouseDetails'
import FDCaregiverPreferences from './FDCaregiverPreferences'

export default SubmitJobAccordionBody = props => {
	switch (props.sectionName) {
		case 'Basic Information':
			return (
				<FDBasicInformation sectionData={props.sectionData} />
			)
		case 'Service Details':
			return (
				<FDServiceDetails sectionData={props.sectionData} />
			)
		case 'Senior Details':
			return (
				<FDSeniorDetails sectionData={props.sectionData} />
			)
		case 'House Details':
			return (
				<FDHouseDetails sectionData={props.sectionData} />
			)
		case 'Caregiver Preference':
			return (
				<FDCaregiverPreferences sectionData={props.sectionData} />
			)
		default: 
			return (
				<View>
					<Text>Error</Text>
				</View>
			)
	}
}