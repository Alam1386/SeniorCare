import React from 'react'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Alert,
  Modal,
  FlatList,
  Animated,
  Image
} from 'react-native'

import { Button } from 'react-native-elements'


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



// Load the app logo
const logo = require('../../Images/WelcomeScreen/senior-care-connect-left.png')
const families = require('../../Images/WelcomeScreen/families.png')
const caregiver = require('../../Images/WelcomeScreen/caregivers.png')

const SelectRoleScreen = props => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.valueProp}>
        <Image source={logo} style={styles.Logo} />
        <Text style={styles.h3}>
          What are you looking for with our app?
        </Text>
        <View style={styles.Columns}>
          <View style={styles.Column}>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp', {
              role: 'family'
            })}>
              <Image source={families} style={styles.Image} />
              <Text style={styles.Button}
              >Family</Text>
              <Text style={styles.Text}>
                We're looking for a caregiver
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Column}>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp', {
              role: 'caregiver'
            })}>
              <Image source={caregiver} style={styles.Image} />
              <Text style={styles.Button}
              >Caregiver</Text>
              <Text style={styles.Text}>
                I'm looking to provide care
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5FB',
  },
  valueProp: {
    margin: wp(3)
  },
  Logo: {
    width: 265.81,
    height: 89.28,
    marginTop: hp(5)
  },
  h3: {
    textAlign: 'center',
    fontSize: 16,
    color: '#244392',
    fontFamily: 'SFProText-Medium',
    marginTop: hp(10),
    marginBottom: hp(3)
  },
  Columns: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  Column: {
    maxWidth: wp(40),
    justifyContent: 'center'
  },
  Image: {
    height: wp(30),
    width: wp(30)
  },
  Button: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1.2,
    borderColor: '#244392',
    marginTop: hp(2),
    padding: 8,
    marginBottom: hp(1),
    borderRadius: 18,
    overflow: "hidden",
    fontFamily: 'SFProText-Medium',
    fontSize: 17,
    color: '#244392'
  },
  Text: {
    color: '#244392',
    maxWidth: wp(27),
    marginLeft: wp(0.5),
    textAlign: 'center',
    fontFamily: 'SFProText-Medium',
    marginTop: hp(1.5)
  }
})


export default SelectRoleScreen




