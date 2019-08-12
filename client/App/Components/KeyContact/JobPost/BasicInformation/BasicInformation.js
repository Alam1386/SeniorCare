import React from 'react'
import { connect } from 'react-redux'

import { View } from 'react-native'

import { backgroundStyles } from '../../../Styles/GeneralStyles'
import { overview } from '../../../Styles/PostJob/OverviewStyles'

import PostJobTop from '../PostJobTop'
import BasicInformationBody from './BasicInformationBody'


const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const BasicInformation = props => {
	return (
		<View style={{...backgroundStyles.background, ...overview.mainContainer}}>
			<PostJobTop
				title={'Basic information'}
				currentPosition={props.formPosition}
				stepCount={4}
			/>
			<BasicInformationBody
				formPosition={props.formPosition}
				navigation={props.navigation}
			/>
		</View>
	)
};

export default connect(mapStateToProps)(BasicInformation)