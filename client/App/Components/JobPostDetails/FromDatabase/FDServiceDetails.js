import React from 'react'

import { Text, View} from 'react-native'

import { sectionContent } from '../../Styles/PostJob/SubmitJobStyles'
import { jobPostStyles } from '../../Styles/Caregiver/caregiverJobPostStyles' 

export default ServiceDetails = props => {

	return (
		<View style={sectionContent.servicesContainer}>
			{props.sectionData.map((service, index) => (
				<View	key={index}>
					{service.getService &&
						<View style={jobPostStyles.serviceBubble}>
							<Text style={jobPostStyles.serviceText}>
								{service.getService.title}
							</Text>
						</View>
					}
				</View>
			))}
		</View>
	)
}