import React, { useState } from 'react'

import { Alert, ScrollView, Text, View } from 'react-native'
import { Avatar, Button, ListItem } from 'react-native-elements'

import { useQuery, useMutation } from 'react-apollo-hooks'
import { SUBMIT_JOB_POST } from '../../../../graphql-queries/mutation'
import { GET_KEY_CONTACT } from '../../../../graphql-queries/queries'
import { connect } from 'react-redux'

import { listItemStyles, submitJobOverview } from '../../../Styles/PostJob/SubmitJobStyles'

import SubmitJobAccordion from './SubmitJobAccordion'

const mapStateToProps = state => {
	const { postJob, user_id } = state
	return {
		user_id: user_id,
		postJob: postJob
	}
}

const initialActiveSections = {
	basicInformation: true,
	serviceDetails: true,
	seniorDetails: true,
	houseDetails: true,
	caregiverPreferences: true,
}

const JobPostSubmit = props => {
	const { data, loading, error } = useQuery(GET_KEY_CONTACT, {
		variables: { id: props.user_id }
	})
	const submitJobPost = useMutation(SUBMIT_JOB_POST)
	const [activeSections, setActiveSections] = useState(initialActiveSections)

	const handleCollapsable = key => {
		setActiveSections(prevState => {
			return { ...prevState, [key]: !prevState[key] }
		})
	}

	const handleConfirmSubmitJob = () => {
		Alert.alert(
			'Confirm Job Posting',
			'Are you sure you want to post this job?',
			[
				{ text: 'Yes', onPress: () => handleSubmitJob() },
				{ text: 'Not yet', style: 'cancel' }
			]
		)
	}

	const handleSubmitJob = async () => {
		try {
			const result = await submitJobPost({
				variables: {
					input: {
						key_contact_id: props.user_id,
						basicInformation: {
							title: props.postJob.basicInformation.title,
							start_date: props.postJob.basicInformation.startDate,
							end_date: props.postJob.basicInformation.endDate,
							address: props.postJob.basicInformation.address,
							city: props.postJob.basicInformation.city,
							province: props.postJob.basicInformation.province,
							postal_code: props.postJob.basicInformation.postalCode,
							hourly_rate: props.postJob.basicInformation.rate,
						},
						serviceDetails: {
							appointments: props.postJob.serviceDetails.appointments,
							bathing: props.postJob.serviceDetails.bathing,
							companionship: props.postJob.serviceDetails.companionship,
							dressing: props.postJob.serviceDetails.dressing,
							driving: props.postJob.serviceDetails.driving,
							errands: props.postJob.serviceDetails.errands,
							feeding: props.postJob.serviceDetails.feeding,
							grooming: props.postJob.serviceDetails.grooming,
							housekeeping: props.postJob.serviceDetails.housekeeping,
							laundry: props.postJob.serviceDetails.laundry,
							meal_prep: props.postJob.serviceDetails.mealPrep,
							mobility: props.postJob.serviceDetails.mobility,
							shopping: props.postJob.serviceDetails.shopping,
						},
						seniorDetails: {
							fullname: props.postJob.seniorDetails.seniorName,
							gender: props.postJob.seniorDetails.gender,
							birthdate: props.postJob.seniorDetails.birthdate,
							relation: props.postJob.seniorDetails.relationship,
							bio: props.postJob.seniorDetails.bio,
							medical_condition: props.postJob.seniorDetails.medicalCondition,
							language: props.postJob.seniorDetails.language,
						},
						houseDetails: {
							cig_smoking: props.postJob.houseDetails.cigSmoking,
							pets: props.postJob.houseDetails.pets,
							cannabis: props.postJob.houseDetails.cannabis,
						},
						caregiverPreferences: {
							availability: props.postJob.caregiverPreferences.availability,
							gender_pref: props.postJob.caregiverPreferences.preferredGender,
							req_drivers_license: props.postJob.caregiverPreferences.validDriverLicense,
						},
					}
				}
			})
			if (result.data.addJobRequest.message === 'success') {
				props.navigation.navigate('JobPostComplete')
			}
		} catch (err) {
			throw err
		}
	}

	if (loading) return <View><Text>Loading</Text></View>

	if (error) return <View><Text>Error</Text></View>

	return (
		<View style={submitJobOverview.mainContainer}>
			<ScrollView>
				<View>
					<ListItem
						title={data.getKeyContactProfile && data.getKeyContactProfile.fullname}
						titleStyle={listItemStyles.title}
						containerStyle={listItemStyles.container}
						leftAvatar={
							<Avatar
								rounded
								size='small'
								title={data.getKeyContactProfile && data.getKeyContactProfile.fullname.substring(0, 2)}
								source={{
									uri:
										data.getKeyContactProfile && data.getKeyContactProfile.avatar
								}}
							/>
						}
					/>
					<Text style={submitJobOverview.jobTitle}>
						{props.postJob.basicInformation.title || 'job title'}
					</Text>
				</View>

				<SubmitJobAccordion
					sectionName='Basic Information'
					sectionData={props.postJob.basicInformation}
					collapsableState={activeSections['basicInformation']}
					handleCollapsable={() => handleCollapsable('basicInformation')}
				/>
				<SubmitJobAccordion
					sectionName='Service Details'
					sectionData={props.postJob.serviceDetails}
					collapsableState={activeSections['serviceDetails']}
					handleCollapsable={() => handleCollapsable['serviceDetails']}
				/>
				<SubmitJobAccordion
					sectionName='Senior Details'
					sectionData={props.postJob.seniorDetails}
					collapsableState={activeSections['seniorDetails']}
					handleCollapsable={() => handleCollapsable('seniorDetails')}
				/>
				<SubmitJobAccordion
					sectionName='House Details'
					sectionData={props.postJob.houseDetails}
					collapsableState={activeSections['houseDetails']}
					handleCollapsable={() => handleCollapsable('houseDetails')}
				/>
				<SubmitJobAccordion
					sectionName='Caregiver Preference'
					sectionData={props.postJob.caregiverPreferences}
					collapsableState={activeSections['caregiverPreferences']}
					handleCollapsable={() => handleCollapsable('caregiverPreferences')}
				/>

			</ScrollView>
			<View>
				<Button
					title='Post'
					buttonStyle={submitJobOverview.postButton}
					onPress={handleConfirmSubmitJob}
				/>
			</View>
		</View>
	)
}

export default connect(mapStateToProps)(JobPostSubmit)