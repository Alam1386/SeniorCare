import React, { useState } from 'react'
import { ScrollView, Text, Alert } from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../Styles/Profile/Account'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';


// AWS Amplify modular import
import Auth from '@aws-amplify/auth'

const Account = props => {
  const user_id = props.navigation.getParam('user_id');
  const data = props.navigation.getParam('data');

  // Sign out from the app
  const signOutAlertLogout = async () => {
    await Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out from the app?',
      [
        { text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel' },
        { text: 'OK', onPress: () => signOut() },
      ],
      { cancelable: false }
    )
  }

  const signOutAlertForgotPassword = async () => {
    await Alert.alert(
      'Reset your password',
      'In order to reset your password, we will first sign you out of the app.  Are you sure you want to sign out from the app?',
      [
        { text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel' },
        { text: 'OK', onPress: () => props.navigation.navigate('ForgetPassword') },
      ],
      { cancelable: false }
    )
  }

  const signOut = async () => {
    await Auth.signOut()
      .then(() => {
        console.log('Sign out complete')
        props.navigation.navigate('AuthJobLoading')
      })
      .catch(err => console.log('Error while signing out!', err))
  }

  return (
    <ScrollView style={styles.MainContainer}>
      <Text style={styles.Title}> Phone & Email</Text>
      <Text style={styles.phoneNumber}> {`Number: ${data && data.phone_number}`} </Text>
      <Text style={styles.email}> {`Email: ${data && data.email}`} </Text>

      <Text style={styles.Title}> Notifications</Text>
      <TouchableOpacity
        style={styles.accountButton}
      >
        <Text style={styles.phoneNumber}> Push Notifications </Text>
        <Icons name={`bell`} style={styles.arrowIcon} />
      </TouchableOpacity>
      <Text style={styles.email}> Email / SMS </Text>

      <Text style={styles.Title}> Membership</Text>
      <TouchableOpacity
        style={styles.accountButton}
      >
        <Text style={styles.membership}> Upgrade your membership </Text>
        <Icons name={`chevron-right`} style={styles.arrowIcon} />
      </TouchableOpacity>

      <Text style={styles.Title}> Legal</Text>
      <TouchableOpacity
        style={styles.accountButton}
      >
        <Text style={styles.legal}> Privacy Policy </Text>
        <Icons name={`chevron-right`} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.accountButton}
      >
        <Text style={styles.legal}> Terms of Service </Text>
        <Icons name={`chevron-right`} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.accountButton}
      >
        <Text style={styles.legal}> Cookies Policy </Text>
        <Icons name={`chevron-right`} style={styles.arrowIcon} />
      </TouchableOpacity>

      <Text style={styles.Title}></Text>
      <TouchableOpacity
        style={styles.ProfileButtonForgot}
        onPress={() => signOutAlertForgotPassword()}
      >
        <Text style={styles.logout}> Reset your password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ProfileButton}
        onPress={() => signOutAlertLogout()}
      >
        <Text style={styles.logout}> Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Account



