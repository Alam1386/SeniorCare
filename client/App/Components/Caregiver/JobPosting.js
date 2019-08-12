import React from 'react'

import { Text, View } from 'react-native'
import { Avatar, Card, ListItem } from 'react-native-elements'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome5'

import moment from 'moment'

import { jobPostStyles, jobPostListItemStyles } from '../Styles/Caregiver/caregiverJobPostStyles'

export default JobPosting = props => {
	const { basicInformation, dateCreated, keyContact, serviceDetails } = props

	return (
		<Card containerStyle={jobPostStyles.mainContainer}>

			<ListItem
				title={keyContact && keyContact.fullname}
				titleStyle={jobPostListItemStyles.title}
				subtitle={`Posted ${moment(dateCreated).format('LL')}`}
				subtitleStyle={jobPostListItemStyles.subtitle}
				containerStyle={jobPostListItemStyles.container}
				leftAvatar={
					<Avatar
						rounded
						size='medium'
						title={keyContact && keyContact.fullname.substring(0, 2)}
						source={{
							uri:
								keyContact && keyContact.avatar,
						}}
					/>
				}
			/>

			<Text style={jobPostStyles.jobTitle}>{basicInformation.title}</Text>

			<View style={jobPostStyles.basicInfoContainer}>
				<View style={jobPostStyles.basicInfoItemContainer}>
					<IonIcons name='ios-pin' size={16} color='#3F7DFB' />
					<Text style={jobPostStyles.basicInfoItemText}>{basicInformation.city}</Text>
				</View>
				<View style={jobPostStyles.basicInfoItemContainer}>
					<Icons name='dollar-sign' size={16} color='#3F7DFB' />
					<Text style={jobPostStyles.basicInfoItemText}>{basicInformation.hourly_rate}.00 / hour</Text>
				</View>
			</View>

			<View style={jobPostStyles.servicesContainer}>
				{serviceDetails.map(service => (
					<View
						key={service.service_id}
						style={jobPostStyles.serviceBubble}
					>
						<Text style={jobPostStyles.serviceText}>
							{service.getService.title}
						</Text>
					</View>
				))}
			</View>

		</Card>
	)
}