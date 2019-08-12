import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { Button } from 'react-native-elements'

// Load the app logo
const logoCircle = require('../../Images/WelcomeScreen/logo-circle.png')
const seniorCareConnect = require('../../Images/WelcomeScreen/senior-care-connect.png')
const documentCircle = require('../../Images/WelcomeScreen/document-circle.png')


export default class WelcomeScreen extends React.Component {
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination)
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.upperArea}>
          {/* App Logo */}
          <Image
            source={logoCircle}
            style={styles.logoCircle}
          />
          <Image source={seniorCareConnect} style={styles.seniorCareConnect} />
          <Text style={styles.h4}>
            We’re here to help families reduce stress, save time, and money finding care for their aging loved ones.
          </Text>
          <Image source={documentCircle} style={styles.documentCircle} />
          <Text style={styles.h1}>
            PRE-SCREENED CAREGIVERS
          </Text>
          <Text style={styles.h5}>
            No caregiver is listed on our marketplace until proof of qualifications and background checks are verified.
          </Text>
        </View>
        <View style={styles.bottomArea}>
          <View style={styles.buttonsRow}>
            <TouchableOpacity>
              <Button title='Sign Up' style={styles.signUp} buttonStyle={{
                borderRadius: 24, backgroundColor: '#244392', width: wp(40)
              }} onPress={() => this.handleRoute('SelectRole')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Button title='Log In' style={styles.signUp} titleStyle={{ color: '#244392' }} buttonStyle={{
                borderRadius: 24, backgroundColor: '#fff', borderWidth: 1.2, borderColor: '#244392', width: wp(40)
              }} onPress={() => this.handleRoute('SignIn')} />
            </TouchableOpacity>
          </View>
          <View style={styles.termsArea1}>
            <Text style={{ color: '#a3a3a3' }}>By continuing you accept the </Text>
          </View>
          <View style={styles.termsArea2}>
            <Text style={{ color: '#a3a3a3', textDecorationLine: 'underline' }}>Terms of Service</Text ><Text style={{ color: '#a3a3a3' }}> and </Text><Text style={{ color: '#a3a3a3', textDecorationLine: 'underline' }}>Privacy Policy</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  upperArea: {
    backgroundColor: '#EEF5FB', // #b13366
    alignItems: 'center',
    flex: 9,
  },
  bottomArea: {
    borderTopWidth: 0.7,
    borderColor: '#a3a3a3',
    backgroundColor: '#fff',
    flex: 2,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(2.2)
  },
  termsArea1: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: hp(3)
  },
  termsArea2: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center'
  },
  h1: {
    fontWeight: 'bold',
    color: '#244392',
    fontFamily: 'GothamRounded-Bold',
    marginTop: hp(2)
  },
  h4: {
    fontSize: 17,
    padding: 5,
    color: '#244392',
    fontFamily: 'SFProText-Medium',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: hp(1.2),
    paddingHorizontal: wp(4.2),
  },
  h5: {
    fontSize: 16,
    color: '#244392',
    fontFamily: 'SFProText-Regular',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: wp(4.2),
  },
  logoCircle: {
    height: hp(28.6),
    width: hp(28.6),
    marginTop: hp(5.6)
  },
  seniorCareConnect: {
    width: 186,
    height: 43.84,
    marginTop: hp(2.2)
  },
  documentCircle: {
    height: hp(11.4),
    width: hp(11.4)
  }
})
