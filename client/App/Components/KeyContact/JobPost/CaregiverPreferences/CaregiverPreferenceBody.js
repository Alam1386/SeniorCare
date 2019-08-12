import React from 'react'

import CaregiverPref1 from './CaregiverPref1'
import CaregiverPref2 from './CaregiverPref2'

export default CaregiverPreferencesBody = props => {
	switch (props.formPosition) {
		case 0:
			return (
				<CaregiverPref1
					navigation={props.navigation}
				/>
			)
		case 1:
			return (
				<CaregiverPref2
					navigation={props.navigation}
				/>
			)
	}
}