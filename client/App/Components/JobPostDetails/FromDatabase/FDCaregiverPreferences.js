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
						props.sectionData.availability === 'LIVEIN' ? 'Live in' : 'Live out' :
						''
					}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Gender
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData && props.sectionData.gender_pref}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Driving license
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData && props.sectionData.req_driver_license ? 'Yes' : 'No'}
				</Text>
			</View>

		</View>
	)
}