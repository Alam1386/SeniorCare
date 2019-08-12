import React from 'react'

import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { validDriverLicense } = state.postJob.caregiverPreferences
	return {
		validDriverLicense: validDriverLicense,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCaregiverPref2Update: (value) => dispatch({
			type: 'CAREGIVERPREF2',
			payload: value
		})
	}
}

const CaregiverPref1 = props => {
	const initialFormValues = {
		validDriverLicense: props.validDriverLicense,
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
							<Text style={general.question}>Should the caregiver have a valid driver's license?</Text>
							<View style={postJobButtons.mainButtonContainer}>
								<Button
									title='Yes'
									titleStye={values.validDriverLicense === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
									containerStyle={postJobButtons.buttonContainer}
									buttonStyle={values.validDriverLicense === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
									type={values.validDriverLicense === true ? 'solid' : 'outline'}
									onPress={() => setFieldValue('validDriverLicense', true)}
								/>
								<Button
									title='No'
									titleStye={values.validDriverLicense === false ? postJobButtons.selectedText : postJobButtons.deselectedText}
									containerStyle={postJobButtons.buttonContainer}
									buttonStyle={values.validDriverLicense === false ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
									type={values.validDriverLicense === false ? 'solid' : 'outline'}
									onPress={() => setFieldValue('validDriverLicense', false)}
								/>
							</View>
						</ScrollView>

						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values.validDriverLicense}
							storeReduxFunction={props.onCaregiverPref2Update}
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