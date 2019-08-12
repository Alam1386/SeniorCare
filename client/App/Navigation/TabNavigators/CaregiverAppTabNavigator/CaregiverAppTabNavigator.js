import React from 'react';

import {
  createMaterialTopTabNavigator,
} from 'react-navigation'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

// App stack screen imports
import { CaregiverFindStack } from '../../CaregiverStackNavigators/CaregiverFindStack'
import { CaregiverJobsStack } from '../../CaregiverStackNavigators/CaregiverJobsStack'
import { CaregiverMessagesStack } from '../../CaregiverStackNavigators/CaregiverMessagesStack'
import { CaregiverProfileStack } from '../../CaregiverStackNavigators/CaregiverProfileStack'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const configurations = {
  CaregiverFind: {
    screen: CaregiverFindStack,
    navigationOptions: {
      tabBarLabel: 'Find',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ fontSize: 24, color: tintColor }} name="magnifier" />
      )
    }
  },
  CaregiverJobs: {
    screen: CaregiverJobsStack,
    navigationOptions: {
      tabBarLabel: 'Jobs',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ fontSize: 24, color: tintColor }} name="briefcase" />
      )
    }
  },
  CaregiverMessages: {
    screen: CaregiverMessagesStack,
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ fontSize: 24, color: tintColor }} name="bubbles" />
      )
    }
  },
  CaregiverProfile: {
    screen: CaregiverProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ fontSize: 24, color: tintColor }} name="user" />
      )
    }
  },

}

const options = {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: true,
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#3F7DFB',
    inactiveTintColor: '#A3A3A3',
    style: {
      backgroundColor: '#f7f8f8',
      borderTopWidth: 0.7,
      borderColor: '#A3A3A3'
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: hp(1),
    },
    upperCaseLabel: false,
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
  }
}

const CaregiverAppTabNavigator = createMaterialTopTabNavigator(configurations, options)

CaregiverAppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index]
  let headerTitle = routeName
  return {
    headerTitle,
  }
}

export default CaregiverAppTabNavigator