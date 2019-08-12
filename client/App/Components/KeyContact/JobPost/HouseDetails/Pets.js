import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { style } from '../../../Styles/PostJob/PostJobButtonsStyles'

export default Pets = props => {
	const { setFieldValue, values } = props

	return (
		<View style={general.sectionContainer}>
			<Text style={general.question}>
				Pets?
			</Text>
			<View style={postJobButtons.mainButtonContainer}>
				<Button
					title='Yes'
					titleStye={values.pets === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
					containerStyle={postJobButtons.buttonContainer}
					buttonStyle={values.pets === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
					type={values.pets === true ? 'solid' : 'outline'}
					onPress={() => setFieldValue('pets', true)}
				/>
				<Button
					title='No'
					titleStye={values.pets === false ? postJobButtons.selectedText : postJobButtons.deselectedText}
					containerStyle={postJobButtons.buttonContainer}
					buttonStyle={values.pets === false ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
					type={values.pets === false ? 'solid' : 'outline'}
					onPress={() => setFieldValue('pets', false)}
				/>
			</View>
		</View>
	)
}