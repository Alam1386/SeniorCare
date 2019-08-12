import React from 'react'

import { Text, View} from 'react-native'

import { sectionContent } from '../../Styles/PostJob/SubmitJobStyles'
import { jobPostStyles } from '../../Styles/Caregiver/caregiverJobPostStyles' 

export default ServiceDetails = props => {

	return (
		<View style={sectionContent.servicesContainer}>
			{Object.keys(props.sectionData).map((service, index) => (
				<View	key={index}>
					{props.sectionData[service] &&
						<View style={jobPostStyles.serviceBubble}>
							<Text style={jobPostStyles.serviceText}>
								{service}
							</Text>
						</View>
					}
				</View>
			))}
		</View>
	)
}