import { createStackNavigator } from 'react-navigation'

import CaregiverConversationScreen from '../../Components/Caregiver/Messages/CaregiverConversationScreen'
import MessagesScreen from "../../Components/Messages/MessagesScreen"

export const CaregiverMessagesStack = createStackNavigator(
  {
    CaregiverMessages: {
      screen: CaregiverConversationScreen,
      navigationOptions: {
        title: 'Messages',
      }
    },
    MessagesScreen: { screen: MessagesScreen },
	},
  {
    defaultNavigationOptions: {
      title: 'CaregiverMessages',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Messages',
    },
  }
)