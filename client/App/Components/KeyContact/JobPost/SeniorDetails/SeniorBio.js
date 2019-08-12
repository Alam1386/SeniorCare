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
	const { seniorName, bio } = state.postJob.seniorDetails
	return {
		seniorName: seniorName,
		bio: bio
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorBioUpdate: (value) => dispatch({
			type: 'SENIORBIO',
			payload: value
		})
	}
}

const SeniorBio = props => {
	const initialFormValues = {
		bio: props.bio,
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
								Tell us more about {props.seniorName}!
							</Text>
							<View style={createSeniorProfile.multilineTextBox}>
								<TextInput
									value={values.bio}
									onChangeText={handleChange('bio')}
									placeholder='Tell us anything! You can tell us about likes/dislikes or any activities they enjoy. We like to get a sense of personality.'
									editable={true}
									multiline={true}
									numberOfLines={4}
									style={createSeniorProfile.multilineTextArea}
								/>
							</View>
						</ScrollView>
						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values.bio}
							storeReduxFunction={props.onSeniorBioUpdate}
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

export default connect(mapStateToProps, mapDispatchToProps)(SeniorBio)