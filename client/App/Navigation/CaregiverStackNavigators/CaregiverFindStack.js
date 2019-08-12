import { createStackNavigator } from 'react-navigation'

import Find from '../../Components/Caregiver/Find/Find'
import ApplyToJob from '../../Components/Caregiver/Find/ApplyToJob'
import ApplicationDone from '../../Components/Caregiver/Find/ApplicationDone'

export const CaregiverFindStack = createStackNavigator(
  {
    CaregiverFind: {
      screen: Find,
      navigationOptions: {
        title: 'Find',
      }
		},
		CaregiverApplyToJob: {
			screen: ApplyToJob,
			navigationOptions: {
				title: 'Job Post'
			}
		},
		CaregiverDoneApply: {
			screen: ApplicationDone,
			navigationOptions: {
				title: 'Job Post'
			}
		}
	},
  {
    defaultNavigationOptions: {
      title: 'Search',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Search',
    },
  }
)