import React from 'react'

import { Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

import { sectionContent } from '../../Styles/PostJob/SubmitJobStyles'

export default SeniorDetails = props => {
	return (
		<View style={sectionContent.container}>

			<ListItem
				title={props.sectionData && props.sectionData.seniorName}
				leftAvatar={
					<Avatar
						rounded
						size='medium'
						title={props.sectionData.seniorName && props.sectionData.seniorName.substring(0, 2)}
						source={{
							uri:
								props.sectionData.seniorName && props.sectionData.seniorName.avatar
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
					{/* {props.sectionData.birthdate} */}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Relationship
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData.relationship}
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
					{props.sectionData.medicalCondition}
				</Text>
			</View>

		</View>
	)
}