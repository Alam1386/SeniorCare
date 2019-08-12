import React from 'react'
import { connect } from 'react-redux'

import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
  const { formPosition } = state.postJob.position
  const { errands, mealPrep, housekeeping, laundry, shopping } = state.postJob.serviceDetails
  return {
    formPosition: formPosition,
    errands: errands,
    mealPrep: mealPrep,
    housekeeping: housekeeping,
    laundry: laundry,
    shopping: shopping
  }
 }
 
 const mapDispatchToProps = dispatch => {
   return {
      onErrandsUpdate: (value) => dispatch({
        type: 'ERRANDS', payload: value
      }),
      onMealPrepUpdate: (value) => dispatch({
        type: 'MEALPREP', payload: value
      }),
      onHouseKeepingUpdate: (value) => dispatch({
        type: 'HOUSEKEEPING', payload: value
      }),
      onLaundryUpdate: (value) => dispatch({
        type: 'LAUNDRY', payload: value
      }),
      onShoppingUpdate: (value) => dispatch({
        type: 'SHOPPING', payload: value
      }),
   }
 }

const HouseHoldNeeds = (props) => {

  return (
    <>
      <ScrollView style={createSeniorProfile.mainContainer}>
        <Text style={general.question}>
        	Select all the household needs
        </Text>

        <View style={postJobButtons.mainButtonContainer}>
          <Button
						title='Errands'
						titleStye={props.errands === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.errands === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
            type={props.errands === true ? 'solid' : 'outline'}
            onPress={() => props.onErrandsUpdate(!props.errands)}
          />
          <Button
						title='Meal Prep'
						titleStye={props.mealPrep === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.mealPrep === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
            type={props.mealPrep === true ? 'solid' : 'outline'}
            onPress={() => props.onMealPrepUpdate(!props.mealPrep)}
          />
        </View>
				
				<View style={postJobButtons.mainButtonContainer}>
					<Button
						title='Housekeeping'
						titleStye={props.housekeeping === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.housekeeping === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.housekeeping === true ? 'solid' : 'outline'}
						onPress={() => props.onHouseKeepingUpdate(!props.housekeeping)}
					/>
					<Button
						title='Laundry'
						titleStye={props.laundry === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.laundry === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.laundry === true ? 'solid' : 'outline'}
						onPress={() => props.onLaundryUpdate(!props.laundry)}
					/>
				</View>

				<View style={postJobButtons.mainButtonContainer}>
					<Button
						title='Shopping'
						titleStye={props.shopping === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
						containerStyle={postJobButtons.buttonContainer}
						buttonStyle={props.shopping === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
						type={props.shopping === true ? 'solid' : 'outline'}
						onPress={() => props.onShoppingUpdate(!props.shopping)}
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

export default connect(mapStateToProps, mapDispatchToProps)(HouseHoldNeeds)