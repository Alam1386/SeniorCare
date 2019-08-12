import React from 'react'
import { View, Text } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import styles from '../../Styles/JobDashboardScreen/PostJobStyle'
import { general } from '../../Styles/PostJob/PostJobGeneralStyles'
import { connect } from 'react-redux'


const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const PostJobTop = props => {
    return (
			<View>
				<Text style={general.title}>{props.title}</Text>
				{props.stepCount > 1 ? 
					<StepIndicator
						customStyles={styles}
						currentPosition={props.formPosition}
						stepCount={props.stepCount}
					/>
					: null
				}
			</View>
    )
}
export default connect(mapStateToProps)(PostJobTop)