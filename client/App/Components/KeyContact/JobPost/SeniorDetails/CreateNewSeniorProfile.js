import React from 'react'

import { ScrollView, View } from 'react-native'

import { connect } from 'react-redux'

import { backgroundStyles } from '../../../Styles/GeneralStyles'

import PostJobTop from '../PostJobTop'
import SeniorDetailsBody from './SeniorDetailsBody'

const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const CreateNewSeniorProfile = props => {
	return (
		<>
		<View style={backgroundStyles.background}>
			<PostJobTop
				title="Senior's Profile"
				currentPosition={props.formPosition}
				stepCount={7}
			/>
		</View>

			<SeniorDetailsBody
				navigation={props.navigation}
				formPosition={props.formPosition}
			/>
		</>
	)
}

export default connect(mapStateToProps)(CreateNewSeniorProfile)