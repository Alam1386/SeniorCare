import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'

export default Cannabis = props => {
	const { setFieldValue, values } = props

	return (
		<View style={general.sectionContainer}>
			<Text style={general.question}>
				Cannabis?
			</Text>
			<View style={postJobButtons.mainButtonContainer}>
				<Button
					title='Yes'
					titleStye={values.cannabis === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
					containerStyle={postJobButtons.buttonContainer}
					buttonStyle={values.cannabis === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
					type={values.cannabis === true ? 'solid' : 'outline'}
					onPress={() => setFieldValue('cannabis', true)}
				/>
				<Button
					title='No'
					titleStye={values.cannabis === false ? postJobButtons.selectedText : postJobButtons.deselectedText}
					containerStyle={postJobButtons.buttonContainer}
					buttonStyle={values.cannabis === false ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
					type={values.cannabis === false ? 'solid' : 'outline'}
					onPress={() => setFieldValue('cannabis', false)}
				/>
			</View>
		</View>
	)
}