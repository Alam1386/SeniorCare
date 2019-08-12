import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Dimensions, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import gql from "graphql-tag";
import styles from "../../Styles/searchStyles/searchStyles"
import { Avatar, Button } from 'react-native-elements'
import Loading from '../../Loading/Loading'
import { GET_APPLIED_JOBS } from '../../../graphql-queries/queries'
import { connect } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const blueCurve = require('../../../Images/WelcomeScreen/blue-curve.png')

const mapStateToProps = state => {
	const { user_id } = state
	return {
		user_id: user_id
	}
}

const Jobs = props => {
	console.log(props.user_id)
	const { data, error, loading } = useQuery(GET_APPLIED_JOBS, {
		variables: { id: props.user_id }
	})

	const handleGoJobInformation = (id) => {
		props.navigation.navigate('CaregiverApplyToJob', { id: id })
	}

	if (loading) return <View><Text>loading!</Text></View>

	if (error) return <View><Text>Error!</Text></View>

	console.log('data', data)

	return (
		<View style={{ flex: 1, backgroundColor: '#EEF5FB' }}>
			<Image
				source={blueCurve}
				style={{ height: hp(44), width: wp(100), position: 'absolute', bottom: 0, padding: 0, margin: 0, backgroundColor: 'transparent' }}
			/>
			<ScrollView>
				<View>
					{data.getCaregiverJobApplications.map(jobPost => (
						<TouchableOpacity
							key={jobPost.id}
							onPress={() => handleGoJobInformation(jobPost.id)}
						>
							{console.log(jobPost)}
							<JobPosting
								keyContact={jobPost.getJobPost.getKeyContact}
								dateCreated={jobPost.getJobPost.date_created}
								basicInformation={jobPost.getJobPost.getBasicInformation}
								serviceDetails={jobPost.getJobPost.getServiceDetails}
							/>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

export default connect(mapStateToProps)(Jobs)