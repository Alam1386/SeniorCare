import { createStackNavigator } from 'react-navigation'

import JobDashboard from '../../Components/Caregiver/Jobs/Jobs'

export const CaregiverJobsStack = createStackNavigator(
  {
    CaregiverJobs: {
      screen: JobDashboard,
      navigationOptions: {
        title: 'Jobs',
      }
    },
	},
  {
    defaultNavigationOptions: {
      title: 'Jobs',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Jobs',
    },
  }
)