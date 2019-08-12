import { connect } from 'react-redux'
import React, {useState} from 'react'
import { Formik } from 'formik';
import { ScrollView, View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import Slider from '@react-native-community/slider'

import PostJobBottomButtons from '../PostJobBottomButtons'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'
import { backgroundStyles } from '../../../Styles/GeneralStyles'
import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { overview } from '../../../Styles/PostJob/OverviewStyles'


const mapStateToProps = state => {
	const { rate } = state.postJob.basicInformation
  return {
    rate: rate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRateUpdate: (value) => dispatch({type: 'RATE', payload: value})
  }
}

const BasicInformationRate = (props) => {

  const minimumRate = 14
  const maximumRate = 150

  return (
		<View style={{...backgroundStyles.background, ...overview.mainContainer}}>
			<ScrollView style={createSeniorProfile.mainContainer}>
				<Text style={general.question}>The hourly rate is</Text>
				<Text>*Minimum wage varies per province/territory in Canada</Text>
				<Text style={general.rate}>${Math.round(props.rate)}</Text>
				<Slider
					// style={{width: 200, height: 40}}
					minimumValue={minimumRate}
					maximumValue={maximumRate}
					minimumTrackTintColor="#244397"
					maximumTrackTintColor="#c7c7cc"
					// onSlidingComplete={value => submitRateValue(value)}
					onSlidingComplete={value => props.onRateUpdate(Math.round(value))}
				/>
				<Text>${Math.round(minimumRate)}</Text>
			</ScrollView>
			<PostJobBottomButtons
				navigation={props.navigation}
				storeReduxData={props.rate}
				storeReduxFunction={props.onRateUpdate}
				handleSubmit={() => (null)}
				errors={{}}
				touched={{fake: 'fake'}}
				lastPosition={3}
			/>
		</View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationRate)