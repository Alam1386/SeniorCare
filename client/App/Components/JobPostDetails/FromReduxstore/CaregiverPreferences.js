import React from 'react'

import { Text, View} from 'react-native'

import { sectionContent } from '../../Styles/PostJob/SubmitJobStyles'

export default BasicInformation = props => {
	return (
		<View style={sectionContent.container}>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Availability
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData ?
						props.sectionData.availability ? 'Live in' : 'Live out' :
						''
					}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Gender
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData && props.sectionData.preferredGender}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Driving license
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData && props.sectionData.validDriverLicense ? 'Yes' : 'No'}
				</Text>
			</View>

		</View>
	)
}