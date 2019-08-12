import React from 'react'
import { createStackNavigator, navigation } from 'react-navigation'
import { Text, View, TouchableOpacity } from 'react-native'
import ProfileScreen from '../../Components/Profile/ProfileScreen'
import Senior from '../../Components/Profile/Senior/Senior'
import Help from '../../Components/Profile/Help/Help'
import AccountDetails from '../../Components/Profile/Account'
import SeniorDetails from '../../Components/Profile/Senior/SeniorDetails'
import Edit from '../../Components/Profile/Edit'
import Overview from '../../Components/KeyContact/JobPost/Overview'

export const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    Help: {
      screen: Help,
      navigationOptions: {
        title: 'Help Center',
      }
    },
    Overview: {
      screen: Overview,
      navigationOptions: {
        title: 'Overview',
      }
    },
    Seniors: {
      screen: Senior,
      navigationOptions: {
        title: 'Seniors'
      },
    },
    SeniorDetails: {
      screen: SeniorDetails,
      navigationOptions: {
        title: 'Caregiver for'
      },
    },
    Edit: {
      screen: Edit,
      navigationOptions: {
        title: 'Edit Account'
      },
    },
    Account: {
      screen: AccountDetails,
      navigationOptions: ({ navigation }) => ({
        title: 'Account',
        headerRight:
          <View style={{ padding: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Edit')}
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
      headerStyle: {
        color: '#000',
        backgroundColor: '#f8f8f8'
      },
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
    },

  }
)
