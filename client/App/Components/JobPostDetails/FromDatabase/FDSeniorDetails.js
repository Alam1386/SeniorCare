import React from 'react'

import { Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

import calcAge from '../../utils/calcAge'

import { sectionContent } from '../../Styles/PostJob/SubmitJobStyles'
import { jobPostListItemStyles } from '../../Styles/Caregiver/caregiverJobPostStyles'

export default SeniorDetails = props => {
	return (
		<View style={sectionContent.container}>

			<ListItem
				title={props.sectionData && props.sectionData.fullname}
				titleStyle={jobPostListItemStyles.title}
				containerStyle={jobPostListItemStyles.container}
				leftAvatar={
					<Avatar
						rounded
						size='small'
						title={props.sectionData.fullname && props.sectionData.fullname.substring(0, 2)}
						source={{
							uri:
								props.keyContact && props.keyContact.avatar,
						}}
					/>
				}
			/>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Gender
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData.gender}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Age
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{/* {console.log(props.sectionData.birthdate)} */}
					{/* {calcAge(props.sectionData.birthdate)} */}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Relationship
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData.relation}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Language
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData.language}
				</Text>
			</View>

			<View style={sectionContent.singleColumn}>
				<Text style={sectionContent.singleColumnLabel}>
					Bio
				</Text>
				<Text style={sectionContent.singleColumnValue}>
					{props.sectionData.bio}
				</Text>
			</View>

			<View style={sectionContent.singleColumn}>
				<Text style={sectionContent.singleColumnLabel}>
					Medical Condition
				</Text>
				<Text style={sectionContent.singleColumnValue}>
					{props.sectionData.medical_condition}
				</Text>
			</View>

		</View>
	)
}