import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { style } from '../../../Styles/PostJob/PostJobButtonsStyles'

export default cigSmoking = props => {
	const { setFieldValue, values } = props

	return (
		<View style={general.sectionContainer}>
			<Text style={general.question}>
				Cigarette smoking?
			</Text>
			<View style={postJobButtons.mainButtonContainer}>
				<Button
					title='Yes'
					titleStye={values.cigSmoking === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
					containerStyle={postJobButtons.buttonContainer}
					buttonStyle={values.cigSmoking === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
					type={values.cigSmoking === true ? 'solid' : 'outline'}
					onPress={() => setFieldValue('cigSmoking', true)}
				/>
				<Button
					title='No'
					titleStye={values.cigSmoking === false ? postJobButtons.selectedText : postJobButtons.deselectedText}
					containerStyle={postJobButtons.buttonContainer}
					buttonStyle={values.cigSmoking === false ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
					type={values.cigSmoking === false ? 'solid' : 'outline'}
					onPress={() => setFieldValue('cigSmoking', false)}
				/>
			</View>
		</View>
	)
}