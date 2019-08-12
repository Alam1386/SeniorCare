import React from 'react'

import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { preferredGender, availability } = state.postJob.caregiverPreferences
	return {
		availability: availability,
		preferredGender: preferredGender,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCaregiverPref1Update: (value) => dispatch({
			type: 'CAREGIVERPREF1',
			payload: value
		})
	}
}

const CaregiverPref1 = props => {
	const initialFormValues = {
		availability: props.availability,
		preferredGender: props.preferredGender
	}

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={(values, { setSubmitting }) => {
				try {
					console.log(values)
				} catch(err) {
					throw err
				}
				setSubmitting(false)
			}}
		>
			{formikProps => {
				const {
					values,
					touched,
					errors,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
					handleReset,
					setFieldValue,
				} = formikProps

				return (
					<>
						<ScrollView style={createSeniorProfile.mainContainer}>
							<View style={general.sectionContainer}>
								<Text style={general.question}>Availability</Text>
								<View style={postJobButtons.mainButtonContainer}>
									<Button
										title='Live in'
										titleStye={values.availability === 'LIVEIN' ? postJobButtons.selectedText : postJobButtons.deselectedText}
										containerStyle={postJobButtons.buttonContainer}
										buttonStyle={values.availability === 'LIVEIN' ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
										type={values.availability === 'LIVEIN' ? 'solid' : 'outline'}
										onPress={() => setFieldValue('availability', 'LIVEIN')}
									/>
									<Button
										title='Live out'
										titleStye={values.availability === 'LIVEOUT' ? postJobButtons.selectedText : postJobButtons.deselectedText}
										containerStyle={postJobButtons.buttonContainer}
										buttonStyle={values.availability === 'LIVEOUT' ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
										type={values.availability === 'LIVEOUT' ? 'solid' : 'outline'}
										onPress={() => setFieldValue('availability', 'LIVEOUT')}
									/>
								</View>
							</View>

							<View style={general.sectionContainer}>
								<Text style={general.question}>Preferred Gender of the caregiver?</Text>
								<View style={postJobButtons.mainButtonContainer}>
									<Button
										title='Female'
										titleStye={values.preferredGender === 'FEMALE' ? postJobButtons.selectedText : postJobButtons.deselectedText}
										containerStyle={postJobButtons.buttonContainer}
										buttonStyle={values.preferredGender === 'FEMALE' ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
										type={values.preferredGender === 'FEMALE' ? 'solid' : 'outline'}
										onPress={() => setFieldValue('preferredGender', 'FEMALE')}
									/>
									<Button
										title='Male'
										titleStye={values.preferredGender === 'MALE' ? postJobButtons.selectedText : postJobButtons.deselectedText}
										containerStyle={postJobButtons.buttonContainer}
										buttonStyle={values.preferredGender === 'MALE' ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
										type={values.preferredGender === 'MALE' ? 'solid' : 'outline'}
										onPress={() => setFieldValue('preferredGender', 'MALE')}
									/>
								</View>
								<View style={postJobButtons.mainButtonContainer}>
									<Button
										title='Other'
										titleStye={values.preferredGender === 'OTHER' ? postJobButtons.selectedText : postJobButtons.deselectedText}
										containerStyle={postJobButtons.buttonContainer}
										buttonStyle={values.preferredGender === 'OTHER' ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
										type={values.preferredGender === 'OTHER' ? 'solid' : 'outline'}
										onPress={() => setFieldValue('preferredGender', 'OTHER')}
									/>
									<Button
										title='No preference'
										titleStye={values.preferredGender === 'NOPREFERENCE' ? postJobButtons.selectedText : postJobButtons.deselectedText}
										containerStyle={postJobButtons.buttonContainer}
										buttonStyle={values.preferredGender === 'NOPREFERENCE' ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
										type={values.preferredGender === 'NOPREFERENCE' ? 'solid' : 'outline'}
										onPress={() => setFieldValue('preferredGender', 'NOPREFERENCE')}
									/>
								</View>
							</View>
						</ScrollView>

						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values}
							storeReduxFunction={props.onCaregiverPref1Update}
							handleSubmit={handleSubmit}
							errors={errors}
							touched={touched}
							lastPosition={1}
						/>
					</>
				)
			}}
		</Formik>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(CaregiverPref1)