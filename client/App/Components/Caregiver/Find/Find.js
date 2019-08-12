import React, { useEffect } from 'react'

import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useQuery } from 'react-apollo-hooks'
import { GET_BASIC_JOB_POSTING } from '../../../graphql-queries/queries'
import { connect } from 'react-redux'
import { backgroundStyles } from '../../Styles/GeneralStyles'
import checkCognitoSession from "../../utils/checkCognitoSession"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import JobPosting from '../JobPosting'


const mapStateToProps = state => {
	return {
		key_contact_id: state.user_id
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onKeyContactIdUpdate: (value) => dispatch({ type: 'KEYCONTACTID', payload: value })
	}
}

const yellowCurve = require('../../../Images/WelcomeScreen/yellow-curve.png')

const Find = props => {
	const { data, error, loading } = useQuery(GET_BASIC_JOB_POSTING)

	const handleGoJobInformation = (id) => {
		props.navigation.navigate('CaregiverApplyToJob', { id: id })
	}

	useEffect(
		() => {
			checkCognitoSession(props)
		},
		[])

	if (loading) return <View><Text>loading</Text></View>

	if (error) return <View><Text>Error</Text></View>

	return (
		<View style={{ flex: 1, backgroundColor: '#EEF5FB' }}>
			<Image
				source={yellowCurve}
				style={{ height: hp(44), width: wp(100), position: 'absolute', bottom: 0, padding: 0, margin: 0, backgroundColor: 'transparent' }}
			/>
			<ScrollView>
				<View>
					{data.getJobPosts.map(jobPost => (
						<TouchableOpacity
							key={jobPost.id}
							onPress={() => handleGoJobInformation(jobPost.id)}
						>
							<JobPosting
								keyContact={jobPost.getKeyContact}
								dateCreated={jobPost.date_created}
								basicInformation={jobPost.getBasicInformation}
								serviceDetails={jobPost.getServiceDetails}
							/>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Find)