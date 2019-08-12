import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Button, TouchableOpacity, View } from 'react-native'
import Overview from '../../Components/KeyContact/JobPost/Overview'
import { PostAJobStack } from './PostAJobStack'
import JobBoardScreen from '../../Components/KeyContact/JobBoard/JobBoardScreen'
import ArchiveScreen from '../../Components/KeyContact/JobBoard/Archive'
import NavBarAdd from './NavBarAdd'
import NavBarArchive from './NavBarArchive'


export const JobBoardStack = createStackNavigator(
  {
    JobBoard: {
      screen: JobBoardScreen,
      navigationOptions: (props) => ({
        headerTitle: 'Job Board',
        headerRight: <NavBarAdd {...props} />,
        headerLeft: <NavBarArchive {...props} />
      })
    },
    Overview: {
      screen: Overview,
      navigationOptions: {
        title: 'Overview',

      }
    },
    Archive: {
      screen: ArchiveScreen,
      navigationOptions: {
        headerTitle: 'Past Jobs'

      },
    },
    PostAJobStack: PostAJobStack
  },

)


// }
// This hides bottom tab navigator for post a job
JobBoardStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index]

  let tabBarVisible = true
  if (routeName === 'Overview' || routeName === 'PostAJobStack') {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}


