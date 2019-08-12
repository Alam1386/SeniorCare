import React from 'react'

import { ScrollView, Text, TextInput, View } from 'react-native'		

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { backgroundStyles } from '../../../Styles/GeneralStyles'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'
import { overview } from '../../../Styles/PostJob/OverviewStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { medicalCondition } = state.postJob.seniorDetails
	return {
		medicalCondition: medicalCondition
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorMedicalConditionUpdate: (value) => dispatch({
			type: 'SENIORMEDICALCONDITION',
			payload: value
		})
	}
}

const SeniorMedicalCondition = props => {
	const initialFormValues = {
		medicalCondition: props.medicalCondition,
	}

	return (		
		<Formik
			initialValues={initialFormValues}
			onSubmit={async (values, { setSubmitting }) => {
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
					<View style={{...backgroundStyles.background, ...overview.mainContainer}}>
						<ScrollView style={createSeniorProfile.mainContainer}>
							<Text style={general.question}>
								Are there any medical conditions to be aware of?
							</Text>
							<View style={createSeniorProfile.multilineTextBox}>
								<TextInput
									value={values.medicalCondition}
									onChangeText={handleChange('medicalCondition')}
									placeholder='Tell us about any medical conditions that we need to be aware of.'
									editable={true}
									multiline={true}
									numberOfLines={4}
									style={createSeniorProfile.multilineTextArea}
								/>
							</View>
						</ScrollView>
						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values.medicalCondition}
							storeReduxFunction={props.onSeniorMedicalConditionUpdate}
							handleSubmit={handleSubmit}
							errors={errors}
							touched={touched}
							lastPosition={6}
						/>
						</View>
				)
			}}
		</Formik>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeniorMedicalCondition)