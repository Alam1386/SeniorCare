import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button, ListItem, Avatar } from 'react-native-elements'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'

import { overview, overviewBottomButton } from '../../Styles/PostJob/OverviewStyles'
import { backgroundStyles } from '../../Styles/GeneralStyles'

const mapStateToProps = state => {
	const { formPosition, overviewPosition, completedSections } = state.postJob.position
	return {
		formPosition: formPosition,
		overviewPosition: overviewPosition,
		completedSections: completedSections,
		state: state,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onPositionUpdate: (value) => dispatch({
			type: 'CHANGEFORMPOSITION',
			payload: value
		}),
		onOverviewUpdate: (value) => dispatch({
			type: 'CHANGEOVERVIEWPOSITION',
			payload: value
		})
	}
}

const mapOverviewPosition = [
	{
		title: 'Basic Information',
		iconNumber: 1,
		destination: 'BasicInformation',
	},
	{
		title: 'Service Details',
		iconNumber: 2,
		destination: 'ServiceDetails',
	},
	{
		title: 'Senior Details',
		iconNumber: 3,
		destination: 'SeniorDetails',
	},
	{
		title: 'House Details',
		iconNumber: 4,
		destination: 'HouseDetails',
	},
	{
		title: 'Caregiver Preferences',
		iconNumber: 5,
		destination: 'CaregiverPreferences',
	},
]

const Overview = props => {
	const handleDirectNavigation = (destination, destinationIndex) => {
		props.onPositionUpdate(0)
		props.onOverviewUpdate(destinationIndex)
		props.navigation.navigate(destination)
	}

	const handleNavigation = () => {
		props.onPositionUpdate(0)
	
		const destinationIndex = mapOverviewPosition.findIndex((overviewSpot, index) => {
			return !props.completedSections.includes(index)
		})
		props.onOverviewUpdate(destinationIndex),
		props.navigation.navigate(mapOverviewPosition[destinationIndex].destination)
	}

	const handleGoToSubmit = () => {
		props.navigation.navigate('JobPostSubmit')
	}

	const handleServiceDetails = () => {
		props.navigation.navigate('ServiceDetails')
	}

	return (
		<View style={overview.mainContainer}>
			<ScrollView style={backgroundStyles.background}>
				<View style={overview.explanationContainer}>
					<Text style={overview.title}>Let's create a job post</Text>
					<Text style={overview.description}>A great connection is important to finding a good fit. To help us find the best care for your loved one, we’ll ask a series of questions to understand your family’s needs.</Text>
				</View>
				
				<View style={overview.sectionsContainer}>
					{mapOverviewPosition.map((overviewSpot, index) => (
						<ListItem
							key={index}
							title={overviewSpot.title}
							containerStyle={overview.overviewItem}
							leftAvatar={
								props.completedSections.includes(index) ?
								<IonIcon name='ios-checkmark-circle' color='#244392' size={33}/> :
								<Avatar
									rounded
									size={27}
									title={`${overviewSpot.iconNumber}`}
									avatarStyle={overview.buttonIcon}
								/>
							}
							onPress={() => handleDirectNavigation(overviewSpot.destination, index)}
						/>
					))}
				</View>

			</ScrollView>
			<View>
				{ props.completedSections.length < 5 ?
					<Button
						title={props.overviewPosition === 0 ? 'Get Started' : 'Continue'}
						buttonStyle={overviewBottomButton.button}
						onPress={handleNavigation}	
						/> :
					<Button
						title='My Job Post'
						buttonStyle={overviewBottomButton.button}
						onPress={handleGoToSubmit}
					/>
				}
			</View>
		</View>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview) 