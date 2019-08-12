import React from 'react'
import { createStackNavigator } from 'react-navigation'
import ConversationScreen from '../../Components/Messages/ConversationScreen.js'
import MessagesScreen from '../../Components/Messages/MessagesScreen.js'

export const MessagesStack = createStackNavigator(
  {
    Messages: { screen: ConversationScreen },
    MessagesScreen: { screen: MessagesScreen }
  },
  {
    defaultNavigationOptions: {
      title: 'Messages',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
      headerStyle: {
        color: '#000',
        backgroundColor: '#f8f8f8'
      },
    },
    navigationOptions: {
      tabBarLabel: 'Messages',
    },
  }
)

