import React from 'react'

import { Text, View } from 'react-native'

import moment from 'moment'

import { sectionContent } from '../../Styles/PostJob/SubmitJobStyles'

export default BasicInformation = props => {
	return (
		<View style={sectionContent.container}>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Start Date
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{moment(props.sectionData.startDate).format('LL')}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					End Date
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{moment(props.sectionData.endDate).format('LL')}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Hourly Rate
				</Text>
				<Text style={sectionContent.dualColumnValue}>
					{props.sectionData.rate}
				</Text>
			</View>

			<View style={sectionContent.dualColumn}>
				<Text style={sectionContent.dualColumnLabel}>
					Address
				</Text>
				<View>
					<Text style={sectionContent.dualColumnValue}>
						{props.sectionData.address}
					</Text>
					<Text style={sectionContent.dualColumnValue}>
						{props.sectionData.city && props.sectionData.province ?
							`${props.sectionData.city}, ${props.sectionData.province}` :
							`${props.sectionData.city}${props.sectionData.province}`
						}
					</Text>
					<Text style={sectionContent.dualColumnValue}>
						{props.sectionData.postalCode}
					</Text>
				</View>
			</View>

		</View>
	)
}