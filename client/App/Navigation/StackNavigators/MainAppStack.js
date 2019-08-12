import React from 'react';

import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

// Auth stack screen imports
import AuthLoadingScreen from '../../Components/AuthLoading/AuthLoadingScreen'
import WelcomeScreen from '../../Components/Welcome/WelcomeScreen'
import SignUpScreen from '../../Components/SignUp/SignUpScreen'
import SelectRoleScreen from '../../Components/SignUp/SelectRoleScreen'
import SignInScreen from '../../Components/Login/SignInScreen'
import VerificationCodeScreen from '../../Components/SignUp/VerificationCodeScreen'
import ForgetPasswordScreen from '../../Components/ForgotPassword/ForgetPasswordScreen'

// App stack screen imports
import { SearchStack } from './SearchStack'
import { JobBoardStack } from './JobBoardStack'
import { MessagesStack } from './MessagesStack'
import { ProfileStack } from './ProfileStack'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Import Caregiver Tab Navigator
import CaregiverAppTabNavigator from '../TabNavigators/CaregiverAppTabNavigator/CaregiverAppTabNavigator'

//Import Job Auth Loading
import AuthJobLoading from '../../Components/AuthLoading/AuthJobLoading'


// Amplify imports and config
import Amplify from '@aws-amplify/core'
import config from '../../../aws-exports'
Amplify.configure(config)

// Configurations and options for the AppTabNavigator
const configurations = {
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Find',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ fontSize: 26, color: tintColor }} name="magnifier" />
      )
    }
  },
  JobBoard: {
    screen: JobBoardStack,
    navigationOptions: {
      tabBarLabel: 'Job',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ fontSize: 24, color: tintColor }} name="briefcase" />
      )
    }
  },
  Messages: {
    screen: MessagesStack,
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ fontSize: 24, color: tintColor }} name="bubbles" />
      )
    },
  },
  Profile: {
    screen: ProfileStack,
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
  animationEnabled: false,
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

// Bottom App tabs
const AppTabNavigator = createMaterialTopTabNavigator(configurations, options)

// Making the common header title dynamic in AppTabNavigator
AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index]
  let headerTitle = routeName
  return {
    headerTitle,
  }
}

// const AppStackNavigator = createStackNavigator({
//   Header: {
//     screen: AppTabNavigator,
//     // Set the header icon
//     // navigationOptions: ({ navigation }) => ({
//     //   headerRight: (
//     //     <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//     //       <View style={{ paddingHorizontal: 10 }}>
//     //         <Ionicons size={24} name="md-menu" />
//     //       </View>
//     //     </TouchableOpacity>
//     //   )
//     // })
//   }
// })


// Auth stack
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      // title: `Welcome to this App`, // for the header screen
      headerBackTitle: 'Back',
      header: null
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Sign Up`,
    }),
  },
  SelectRole: {
    screen: SelectRoleScreen,
    navigationOptions: () => ({
      title: `Your Role`,
    }),
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log In`,
    }),
  },
  Verification: {
    screen: VerificationCodeScreen,
    navigationOptions: () => ({
      title: `Verify your account`,
    }),
  },
  ForgetPassword: {
    screen: ForgetPasswordScreen,
    navigationOptions: () => ({
      title: `Reset your password`,
    }),
  },
})

const MainAppStack = createSwitchNavigator({
  AuthJobLoading: AuthJobLoading,
  Auth: AuthStackNavigator, // the Auth stack
  App: AppTabNavigator, // the App stack
  CaregiverApp: CaregiverAppTabNavigator, // Caregiver App Stack
})

export default MainAppStack

 // Authloading: AuthLoadingScreen,