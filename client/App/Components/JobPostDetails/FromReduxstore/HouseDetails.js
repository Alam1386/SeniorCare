import React from 'react'

import { Text, View} from 'react-native'

import { sectionContent } from '../../Styles/PostJob/SubmitJobStyles'

export default BasicInformation = props => {
	return (
		<View style={sectionContent.container}>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Smoking
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData.cigSmoking ? 'Yes' : 'No'}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Pets
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData.pets ? 'Yes' : 'No'}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Cannabis
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData.cannabis ? 'Yes' : 'No'}
				</Text>
			</View>

		</View>
	)
}