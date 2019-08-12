import { connect } from 'react-redux'
import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Formik } from 'formik';
import { Button, Input } from 'react-native-elements'
import PostJobBottomButtons from '../PostJobBottomButtons'

import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

const mapStateToProps = state => {
	const { title } = state.postJob.basicInformation
  return {
    title: title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTitleUpdate: (values) => dispatch({type: 'TITLE', payload: values}),
  }
}

const BasicInformationTitle = (props) => {
  return (
		<Formik
			initialValues={{ title: props.title }}
			//onSubmit={values => console.log(values)}
			// onSubmit={values => submitTitleValue(values)}
			onSubmit={values => props.onTitleUpdate(values)}
			// validate={values => {
			//     let errors = {};
			//     if (!values.email) {
			//     errors.email = 'Required';
			//     } else if (
			//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
			//     ) {
			//     errors.email = 'Invalid email address';
			//     }
			//     return errors;
			// }}
			// onSubmit={(values, { setSubmitting }) => {
			//     setTimeout(() => {
			//     alert(JSON.stringify(values, null, 2));
			//     setSubmitting(false);
			//     }, 400);
			// }}
			>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<>
					<ScrollView style={createSeniorProfile.mainContainer}>
						<Text style={general.question}>What is the title of this job?</Text>
						<View>
							<Input
								name="title"
								placeholder='Granny Needs Help'
								containerStyle={general.inputContainer}
								onChangeText={handleChange('title')}
								onBlur={handleBlur}
								value={values.title}
							/>
						</View>
					</ScrollView>
					<PostJobBottomButtons
						navigation={props.navigation}
						storeReduxData={values}
						storeReduxFunction={props.onTitleUpdate}
						handleSubmit={handleSubmit}
						errors={errors}
						touched={touched}
						lastPosition={3}
					/>
    		</>
			)}
		</Formik>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationTitle)