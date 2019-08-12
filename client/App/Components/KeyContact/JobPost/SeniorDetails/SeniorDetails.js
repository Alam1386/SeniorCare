import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { backgroundStyles } from '../../../Styles/GeneralStyles'
import { chooseProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorDetails = props => {
	const handleCreateNewProfile = () => {
		props.navigation.navigate('CreateNewSeniorProfile')
	}

	return (
		<ScrollView style={backgroundStyles.background}>
			<View style={chooseProfile.mainContainer}>
				<View style={chooseProfile.titleContainer}>
					<Text style={chooseProfile.title}>Senior's Profile</Text>
				</View>
				<View style={chooseProfile.buttonContainer}>
					<Button
						title='Create new profile'
						buttonStyle={chooseProfile.button}
						containerStyle={chooseProfile.buttonOuter}
						titleStyle={chooseProfile.buttonText}
						type='outline'
						onPress={handleCreateNewProfile}
					/>
					<Button
						title='Use existing profile'
						titleStyle={chooseProfile.buttonText}
						buttonStyle={chooseProfile.button}
						containerStyle={chooseProfile.buttonOuter}
						type='outline'
					/>
				</View>
			</View>
		</ScrollView>
	)
}

