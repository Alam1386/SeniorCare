import { createStackNavigator } from 'react-navigation'
import { Text, View, TouchableOpacity } from 'react-native'
import Profile from '../../Components/Caregiver/Profile/Profile'
import JobDashboard from '../../Components/Caregiver/Jobs/Jobs'
import React from 'react'
import EditCaregiver from '../../Components/Caregiver/Profile/EditCaregiver'
import Help from '../../Components/Profile/Help/Help'

import Account from '../../Components/Caregiver/Profile/Account'

export const CaregiverProfileStack = createStackNavigator(
  {
    CaregiverProfile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
      }
    },
    Help: {
      screen: Help,
      navigationOptions: {
        title: 'Help Center',
      }
    },
    JobDashboard: {
      screen: JobDashboard,
      navigationOptions: {
        title: 'Jobs'
      },
    },
    EditCaregiver: {
      screen: EditCaregiver,
      navigationOptions: {
        title: 'Edit Account'
      },
    },
    AccountCaregiver: {
      screen: Account,
      navigationOptions: ({ navigation }) => ({
        title: 'Account',
        headerRight:
          <View style={{ padding: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditCaregiver')}
              style={{ flex: 1, flexDirection: 'row' }}
            >
              <Text style={{ fontFamily: 'SFProText-Medium', color: '#3F7DFB', fontSize: 17 }}>Edit</Text>
            </TouchableOpacity>
          </View>
      })
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Profile',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  }
)