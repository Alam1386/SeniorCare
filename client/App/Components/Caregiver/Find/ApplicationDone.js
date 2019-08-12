import React from 'react'
import styles from '../../../Components/Styles/Caregiver/CaregiverFindApplicationDone'
 
import { ScrollView, Text, Image, View } from 'react-native'
import { Button } from 'react-native-elements'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

const yellowCurve = require('../../../Images/WelcomeScreen/yellow-curve.png')
const checkMark = require('../../../Images/WelcomeScreen/checkmark.png')


export default ApplicationDone = props => {
	const handleReturnToFind = () => {
		props.navigation.navigate('CaregiverFind')
	}
	return (
		<ScrollView style={styles.MainContainer}>
     <View style={styles.wrapper}>
          <Image
            source={checkMark}
            style={{ width: 200, height: 200, borderRadius: 100, }}
          /> 
        <Text style={styles.title}>Your application is sent. You will be notified if you are considered for the role.</Text>
        <TouchableOpacity
            onPress={handleReturnToFind}
            style={styles.button}
            >
            <Text style={styles.buttonText}> Done</Text>
          </TouchableOpacity> 
      </View>
      <Image
        source={yellowCurve}
        style={{ height: hp(30), width: wp(100), zIndex: 0, position: 'relative', padding: 0, margin: 0 }}
      />
		</ScrollView>
	)
}