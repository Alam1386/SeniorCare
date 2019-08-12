import React, {useState} from 'react'
import { TouchableOpacity, Dimensions, ScrollView, Text, View, Image, TextInput, DatePickerIOS, Switch} from 'react-native'
import { useMutation } from 'react-apollo-hooks';
import styles from '../../Styles/Profile/Edit'
import Icons from 'react-native-vector-icons/FontAwesome5'
import NumericInput from 'react-native-numeric-input'
import { Button, Card } from 'react-native-elements';
import {ADD_CARGIVER_DETAILS} from "../../../graphql-queries/mutation"
import { connect } from 'react-redux'


const mapStateToProps = state =>{
  const { user_id } = state.user_id
  return{
    user_id: state.user_id
  }
}

const EditCaregiver = (props) => {
let id = props.user_id

const date = new Date()

const [detailsObj, setDetailsObj] = useState({id: id, location: "", birthdate: date, gender: "Female", availability: "live out", hourly_rate: 14, years_experience: 0, description: "" })

const [availability, setAvailability] = useState(false)


function handleNumberChange(value) {
  setDetailsObj({ ...detailsObj, years_experience: Number(value) })

}

function handleHourlyRateChange(value) {
  setDetailsObj({ ...detailsObj, hourly_rate: Number(value) })
}

function handleAvailabilityChange(value) {
  if(value) {
    setAvailability(true)
    setDetailsObj({ ...detailsObj, availability: "live in" })
  } else {
    setAvailability(false)
    setDetailsObj({ ...detailsObj, availability: "live out" })
  }
}

function handleDateChange(newDate){
  setDetailsObj({...detailsObj, birthdate: newDate})
}

function handleNameChange(text) {
  setDetailsObj({ ...detailsObj, location: text })
}

function handleDescChange(text) {
  setDetailsObj({ ...detailsObj, description: text })
}

function handleGenderChange(text) {
  setDetailsObj({ ...detailsObj, gender: text })
}

  const addCargiver = useMutation(ADD_CARGIVER_DETAILS);

  function handleResultsPress() {
    addCargiver({variables: {input: detailsObj}})
  }

  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height


  return (
    <ScrollView style={styles.MainContainer}>
      <Card style={{ zIndex: 100, position: 'absolute', width: width, marginLeft: 10 }}>
        <View style = {styles.fieldContainer}>
          <Text style = {styles.headingsText}>Location</Text>
          <TextInput style={styles.input}
                    placeholder="Toronto"
                    onChangeText = {(text) => handleNameChange(text)}/>
        </View>
        <View style = {styles.fieldContainer}>
          <Text style = {styles.headingsText}> Birthdate </Text>
          <DatePickerIOS
                        date={detailsObj.birthdate}
                        mode={'date'}
                        onDateChange={newDate => handleDateChange(newDate)}
                      />
        </View>
        <View style = {styles.fieldContainer}>
          <Text style = {styles.headingsTextGender}> Gender </Text>
          <View style = {styles.fieldGenderContainer}>
            <Button
              onPress={() => handleGenderChange("Female")}
              containerStyle={{ width: "33%" }}
              buttonStyle={{
                backgroundColor: detailsObj.gender === "Female" ? "#244397" : "white",
                borderWidth: 1,
                borderColor: '#244397',
                borderRadius: 0,
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
              }}
              titleStyle={{ color: detailsObj.gender === "Female" ? "white" : "#244397" }}
              title="Female" />
            <Button
              onPress={() => handleGenderChange("Male")}
              containerStyle={{ width: "33%" }}
              buttonStyle={{
                backgroundColor: detailsObj.gender === "Male" ? "#244397" : "white",
                borderWidth: 1,
                borderColor: '#244397',
                borderRadius: 0,
              }}
              titleStyle={{ color: detailsObj.gender === "Male" ? "white" : "#244397" }}
              title="Male" />
            <Button
              onPress={() => handleGenderChange("other")}
              containerStyle={{ width: "33%" }}
              buttonStyle={{
                backgroundColor: detailsObj.gender === "other" ? "#244397" : "white",
                borderWidth: 1,
                borderColor: '#244397',
                borderRadius: 0,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}
              titleStyle={{ color: detailsObj.gender === "other" ? "white" : "#244397" }}
              title="other" />
          </View>
        </View>
        <View style = {styles.numberInputsContainer}>
            <View>
              <Text style = {styles.headingsText}> Years Experience </Text>
              <TextInput
                keyboardType = "numeric"
                style={styles.inputNumber}
                placeholder = {"2"}
                onChangeText = {(value) => handleNumberChange(value)}
              />
            </View>
            <View>
                <Text style = {styles.headingsText}> hourly rate </Text>
                <TextInput
                  keyboardType = "numeric"
                  style={styles.inputNumber}
                  placeholder = {"14"}
                  onChangeText = {(value) => handleHourlyRateChange(value)}
                  />
            </View>
          </View>
          <View style = {styles.fieldContainer}>
            <Text style = {styles.availabilityTextPadding}> Availability </Text>
            <View style = {styles.switchContainer}>
              <Switch
                trackColor = {{true: "#244397"}}
                onValueChange = {(value) => handleAvailabilityChange(value)}
                value = {availability}
                />
                <Text style = {styles.availabilityOptionText}> {detailsObj.availability} </Text>
            </View>
          </View>
          <View style = {styles.fieldContainer}>
            <Text style = {styles.headingsText}> Description </Text>
            <TextInput style={styles.inputDesxription}
                      placeholder="Description..."
                      multiline = {true}
                      onChangeText = {(text) => handleDescChange(text)}/>
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleResultsPress}
            >
              <Text style={styles.buttonText}> Submit</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
  )
}

export default connect(mapStateToProps)(EditCaregiver)




