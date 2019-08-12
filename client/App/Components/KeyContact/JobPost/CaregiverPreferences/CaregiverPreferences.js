import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { connect } from 'react-redux'

import { backgroundStyles } from '../../../Styles/GeneralStyles'
import { overview } from '../../../Styles/PostJob/OverviewStyles'

import PostJobTop from '../PostJobTop'
import CaregiverPreferenceBody from './CaregiverPreferenceBody'

const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const CaregiverPreferences = props => {
	return (
		<View style={{...backgroundStyles.background, ...overview.mainContainer}}>
			<PostJobTop
				title='Caregiver Preference'
				currentPosition={props.formPosition}
				stepCount={2}
			/>

			<CaregiverPreferenceBody
				navigation={props.navigation}
				formPosition={props.formPosition}
			/>
		</View>
	)
}

export default connect(mapStateToProps)(CaregiverPreferences)