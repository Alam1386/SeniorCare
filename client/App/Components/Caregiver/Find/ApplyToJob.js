import React from 'react'

import { Alert, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'

import { connect } from 'react-redux'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { GET_FULL_JOB_POSTING } from '../../../graphql-queries/queries'
import { APPLY_JOB } from '../../../graphql-queries/mutation'

import { mainOverviewStyles } from '../../Styles/Caregiver/caregiverJobPostStyles'

import JobPostDetails from '../../JobPostDetails/FromDatabase/JobPostDetails'

const mapStateToProps = state => {
	const { user_id } = state
	return {
		user_id: user_id,
	}
}

const ApplyToJobs = props => {
	const {data, loading, error } = useQuery(GET_FULL_JOB_POSTING, {
		variables: { id: props.navigation.state.params.id }
	})
	const applyJob = useMutation(APPLY_JOB)

	const handleConfirmApply = () => {
		Alert.alert(
			'Confirm Application',
			'Are you sure you want to apply for this job?',
			[
				{text: 'Yes', onPress: () => handleApplyJob()},
				{text: 'No', style: 'cancel'}
			]
		)
	}

	const handleApplyJob = async () => {
		try {
			const result = await applyJob({
				variables: {input: {
					jobpost_id: data.getJobPost.id,
					keycontact_id: data.getJobPost.getKeyContact.id,
					caregiver_id: props.user_id,
				}}
			})
			if (result.data.applyJob.message === 'success') {
				props.navigation.navigate('CaregiverDoneApply')
			}
		} catch (err) {
			if (err.message === 'GraphQL error: duplicate application') {
				Alert.alert(
					'Sorry, it looks like you already applied for this job.',
				)
			}
		}
	}

	if (loading) return <View><Text>loading</Text></View>

	if (error) return <View><Text>error</Text></View>

	return (
		<View style={mainOverviewStyles.mainContainer}>
			<ScrollView>
				<JobPostDetails
					keyContact={data.getJobPost.getKeyContact}
					basicInformation={data.getJobPost.getBasicInformation}
					serviceDetails={data.getJobPost.getServiceDetails}
					seniorDetails={data.getJobPost.getSeniorDetails}
					houseDetails={data.getJobPost.getHouseDetails}
					caregiverPreferences={data.getJobPost.getCaregiverPreferences}
				/>
			</ScrollView>
			<View>
				<Button
					title='Apply'
					buttonStyle={mainOverviewStyles.applyButton}
					onPress={handleConfirmApply}
				/>
			</View>
		</View>
	)
}

export default connect(mapStateToProps)(ApplyToJobs)