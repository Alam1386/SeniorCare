import React, { useState} from 'react'
import { ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

import { useMutation } from 'react-apollo-hooks';
import { connect } from 'react-redux'

import styles from '../../Components/Styles/Profile/Edit'
import { EDIT_KEY_CONTACT_DETAILS } from '../../graphql-queries/mutation'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  Container,
  Input,
  Card,
  CardItem
} from 'native-base'
const yellowCurve = require('../../Images/WelcomeScreen/yellow-curve.png')

const mapStateToProps = state => {
  const { user_id } = state
  return {
    user_id: user_id
  }
}

const Edit = props => {
  console.log('are you sure ', fullname)
  const submitUpdates = useMutation(EDIT_KEY_CONTACT_DETAILS)
  
  const [fullname, setFullName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async () => {
    const updateForm = {
      id: props.user_id,
      fullname: fullname,
      phone_number: phonenumber,
      location: location,
    }
    try {
      const result = await submitUpdates({
        variables: {input: updateForm}
      })
    } catch (error) {
      throw error
    }
  }
 
  return (
    <ScrollView style={styles.MainContainer}>
      <Card style={{ zIndex: 100, position: 'relative', width: wp(90), marginLeft: wp(5) }}>
        <View style={styles.formContainer}>
          <Text style={styles.label}> Full name </Text>
          <TextInput style={styles.input}
            onChangeText={(e) => setFullName(e)}
            placeholder="Claudia Dominguez"/>
          
          <Text style={styles.label}> Phone Number </Text>
          <TextInput style={styles.input}
            onChangeText={(e) => setPhoneNumber(e)}
            placeholder="416 1234567"
            keyboardType={"number-pad"}
            />
          
          <Text style={styles.label}> Location </Text>
          <TextInput style={styles.input}
              onChangeText={(e) => setLocation(e)}
              placeholder="B1, 33 ABC Dr, Toronto, M000N0"/>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            >
            <Text style={styles.buttonText}> Submit</Text>
          </TouchableOpacity> 
        </View> 
      </Card>
      <View style = {styles.e}></View>
      <Image
        source={yellowCurve}
        style={{ height: hp(44), width: wp(100), zIndex: 0, position: 'relative', padding: 0, margin: 0 }}
      />
    </ScrollView>
  )
}

export default connect(mapStateToProps)(Edit)





