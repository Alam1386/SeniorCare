import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik';

import { ScrollView, View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'

import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'
import { basicInformationStyles } from '../../../Styles/PostJob/BasicInformationStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { address, city, postalCode, province } = state.postJob.basicInformation
  return {
    address: address,
    city: city,
    postalCode: postalCode,
    province: province,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddressUpdate: (values) => dispatch({type: 'ADDRESS', payload: values}),
  }
}

const BasicInformationAddress = (props) => {

  return (
    <>
			<Formik
				initialValues={{
					address: props.address,
					city: props.city,
					province: props.province,
					postalCode: props.postalCode,
				}}
				//onSubmit={values => console.log(values)}
				//onSubmit={values => submitAddressValues(values)}
				onSubmit={values => props.onAddressUpdate(values)}
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
					isSubmitting
				}) => (
					<>
						<ScrollView style={createSeniorProfile.mainContainer}>
							<View style={basicInformationStyles.descriptorContainer}>
								<Text style={general.question}>Where will the service take place?</Text>
								<Text>You address will not be displayed on your profile</Text>
							</View>

							<View style={basicInformationStyles.addressSectionContainer}>
								<Text>Address</Text>
								<Input
									placeholder="31 Iceboat Terrace"
									name="address"
									containerStyle={general.inputContainer}
									onChangeText={handleChange("address")}
									onBlur={handleBlur}
									value={values.address}
								/>
							</View>
							{/* <TextInput
										onChangeText={props.handleChange('email')}
										onBlur={props.handleBlur('email')}
										value={props.values.email}
								/> */}
							{/* {errors.email && touched.email && errors.email} */}

							<View style={basicInformationStyles.addressSectionContainer}>
								<Text>City</Text>
								<Input
									placeholder="Toronto"
									name="city"
									containerStyle={general.inputContainer}
									onChangeText={handleChange("city")}
									onBlur={handleBlur}
									value={values.city}
								/>
							</View>

							<View style={basicInformationStyles.addressSectionContainer}>
								<Text>Province</Text>
								<Input
									placeholder="Ontario"
									name="province"
									containerStyle={general.inputContainer}
									onChangeText={handleChange("province")}
									onBlur={handleBlur}
									value={values.province}
								/>
							</View>

							<View style={basicInformationStyles.addressSectionContainer}>
								<Text>Postal Code</Text>
								<Input
									placeholder="M5V 3E9"
									name="postalCode"
									containerStyle={general.inputContainer}
									onChangeText={handleChange("postalCode")}
									onBlur={handleBlur}
									value={values.postalCode}
								/>
							</View>
							{/* {errors.password && touched.password && errors.password} */}
						</ScrollView>

						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values}
							storeReduxFunction={props.onAddressUpdate}
							handleSubmit={handleSubmit}
							errors={errors}
							touched={touched}
							lastPosition={3}
						/>
					</>
				)}
			</Formik>
		</>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationAddress)