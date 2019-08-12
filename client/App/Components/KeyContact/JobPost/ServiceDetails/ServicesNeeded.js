import React, { useState } from 'react'
import { connect } from 'react-redux'

import { ScrollView, Text, View, ShadowPropTypesIOS } from 'react-native'
import { Button } from 'react-native-elements'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
  const { formPosition } = state.postJob.position
  const { bathing, grooming, dressing, feeding, companionship, driving, appointments, mobility } = state.postJob.serviceDetails
  return {
    formPosition: formPosition,
    bathing: bathing,
    grooming: grooming,
    dressing: dressing,
    feeding: feeding,
    companionship: companionship,
    driving: driving,
    appointments: appointments,
    mobility: mobility,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBathingUpdate: (value) => dispatch({
      type: 'BATHING', payload: value
    }),
    onGroomingUpdate: (value) =>  dispatch({
      type: 'GROOMING', payload: value
    }),
    onDressingUpdate: (value) =>  dispatch({
      type: 'DRESSING', payload: value
    }),
    onFeedingUpdate: (value) =>  dispatch({
      type: 'FEEDING', payload: value
    }),
    onCompanionshipUpdate: (value) =>  dispatch({
      type: 'COMPANIONSHIP', payload: value
    }),
    onDrivingUpdate: (value) =>  dispatch({
      type: 'DRIVING', payload: value
    }),
    onAppointmentsUpdate: (value) =>  dispatch({
      type: 'APPOINTMENTS', payload: value
    }),
    onMobilityUpdate: (value) =>  dispatch({
      type: 'MOBILITY', payload: value
    }),
  }
}

const ServicesNeeded = (props) => {
  return (
    <>
      <ScrollView style={createSeniorProfile.mainContainer}>
				<Text style={general.question}>
					Select the services you will need
				</Text>
				
				<View style={postJobButtons.mainButtonContainer}>
					<Button
						title='Bathing'
						titleStye={props.bathing === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.bathing === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.bathing === true ? 'solid' : 'outline'}
						onPress={() => props.onBathingUpdate(!props.bathing)}
					/>
					<Button
						title='Grooming'
						titleStye={props.grooming === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.grooming === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.grooming === true ? 'solid' : 'outline'}
						onPress={() => props.onGroomingUpdate(!props.grooming)}
					/>
				</View>

				<View style={postJobButtons.mainButtonContainer}>
					<Button
						title='Dressing'
						titleStye={props.dressing === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.dressing === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.dressing === true ? 'solid' : 'outline'}
						onPress={() => props.onDressingUpdate(!props.dressing)}
					/>
					<Button
						title='Feeding'
						titleStye={props.feeding === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.feeding === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.feeding === true ? 'solid' : 'outline'}
						onPress={() => props.onFeedingUpdate(!props.feeding)}
					/>
				</View>

				<View style={postJobButtons.mainButtonContainer}>
					<Button
						title='Companionship'
						titleStye={props.companionship === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.companionship === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.companionship === true ? 'solid' : 'outline'}
						onPress={() => props.onCompanionshipUpdate(!props.companionship)}
					/>
					<Button
						title='Driving'
						titleStye={props.driving === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.driving === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.driving === true ? 'solid' : 'outline'}
						onPress={() => props.onDrivingUpdate(!props.driving)}
					/>
				</View>

				<View style={postJobButtons.mainButtonContainer}>
					<Button
						title='Appointments'
						titleStye={props.appointments === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.appointments === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.appointments === true ? 'solid' : 'outline'}
						onPress={() => props.onAppointmentsUpdate(!props.appointments)}
					/>
					<Button
						title='Mobility'
						titleStye={props.mobility === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.mobility === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.mobility === true ? 'solid' : 'outline'}
						onPress={() => props.onMobilityUpdate(!props.mobility)}
					/>
				</View>
			</ScrollView>

      <PostJobBottomButtons
        navigation={props.navigation}
        storeReduxData={()=>null}
        storeReduxFunction={()=>null}
        handleSubmit={()=>null}
        errors={{}}
        touched={{}}
        lastPosition={1}
			/>
		</>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesNeeded)