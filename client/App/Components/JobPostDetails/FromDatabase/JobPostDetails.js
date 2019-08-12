import React, { useState } from 'react'

import { Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

import { listItemStyles, submitJobOverview } from '../../Styles/PostJob/SubmitJobStyles'
import { jobPostListItemStyles } from '../../Styles/Caregiver/caregiverJobPostStyles'

import moment from 'moment'

import JobDetailsAccordion from './JobDetailsAccordion'

const initialActiveSections = {
	basicInformation: true,
	serviceDetails: true,
	seniorDetails: true,
	houseDetails: true,
	caregiverPreferences: true,
}


export default JobPostDetails = props => {
	const [activeSections, setActiveSections] = useState(initialActiveSections)

	const handleCollapsable = key => {
		setActiveSections(prevState => {
			return { ...prevState, [key]: !prevState[key] }
		})
	}

	return (
		<View>
			<ListItem
				title={props.keyContact && props.keyContact.fullname}
				titleStyle={listItemStyles.title}
				subtitle={`Posted ${moment(props.keyContactdateCreated).format('LL')}`}
				subtitleStyle={jobPostListItemStyles.subtitle}
				containerStyle={listItemStyles.container}
				leftAvatar={
					<Avatar
						rounded
						size='small'
						title={props.keyContact && props.keyContact.fullname.substring(0, 2)}
						source={{
							uri:
								props.keyContact && props.keyContact.avatar
						}}
					/>
				}
			/>

			<Text style={submitJobOverview.jobTitle}>
				{props.basicInformation.title || 'job title'}
			</Text>

			<JobDetailsAccordion
				sectionName='Senior Details'
				sectionData={props.seniorDetails}
				collapsableState={activeSections['seniorDetails']}
				handleCollapsable={() => handleCollapsable('seniorDetails')}
			/>
			<JobDetailsAccordion
				sectionName='Basic Information'
				sectionData={props.basicInformation}
				collapsableState={activeSections['basicInformation']}
				handleCollapsable={() => handleCollapsable('basicInformation')}
			/>
			<JobDetailsAccordion
				sectionName='Service Details'
				sectionData={props.serviceDetails}
				collapsableState={activeSections['serviceDetails']}
				handleCollapsable={() => handleCollapsable('serviceDetails')}
			/>
			<JobDetailsAccordion
				sectionName='House Details'
				sectionData={props.houseDetails}
				collapsableState={activeSections['houseDetails']}
				handleCollapsable={() => handleCollapsable('houseDetails')}
			/>
			<JobDetailsAccordion
				sectionName='Caregiver Preference'
				sectionData={props.caregiverPreferences}
				collapsableState={activeSections['caregiverPreferences']}
				handleCollapsable={() => handleCollapsable('caregiverPreferences')}
			/>
		</View>
	)
}