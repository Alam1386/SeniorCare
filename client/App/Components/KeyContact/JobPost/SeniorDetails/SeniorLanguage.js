import React from 'react'

import { ScrollView, Text, View } from 'react-native'
import { Input } from 'react-native-elements'		

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { backgroundStyles } from '../../../Styles/GeneralStyles'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'
import { overview } from '../../../Styles/PostJob/OverviewStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { language } = state.postJob.seniorDetails
	return {
		language: language
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorLanguageUpdate: (value) => dispatch({
			type: 'SENIORLANGUAGE',
			payload: value
		})
	}
}

const SeniorLanguage = props => {
	const initialFormValues = {
		language: props.language,
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
								Do you have any language Preferences?
							</Text>
							<Input
								placeholder='Knows some English but mostly speaks french, etc.'
								value={values.language}
								containerStyle={general.inputContainer}
								onChangeText={handleChange('language')}
								onBlur={handleBlur}
							/>
						</ScrollView>
						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values.language}
							storeReduxFunction={props.onSeniorLanguageUpdate}
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

export default connect(mapStateToProps, mapDispatchToProps)(SeniorLanguage)