import React from 'react'

import SeniorName from './SeniorName'
import SeniorGender from './SeniorGender'
import SeniorBirthdate from './SeniorBirthdate'
import SeniorRelation from './SeniorRelation'
import SeniorBio from './SeniorBio'
import SeniorMedicalCondition from './SeniorMedicalCondition'
import SeniorLanguage from './SeniorLanguage'
import SeniorUploadAvatar from './SeniorUploadAvatar'

export default SeniorDetailsBody = props => {
	switch (props.formPosition) {
		case 0:
			return (
				<SeniorName
					navigation={props.navigation}
				/>
			)
		case 1:
			return (
				<SeniorGender
					navigation={props.navigation}
				/>
			)
		case 2:
			return (
				<SeniorBirthdate
					navigation={props.navigation}
				/>
			)
		case 3:
			return (
				<SeniorRelation
					navigation={props.navigation}
				/>
			)
		case 4:
			return (
				<SeniorBio
					navigation={props.navigation}
				/>
			)
		case 5:
			return (
				<SeniorMedicalCondition
					navigation={props.navigation}
				/>
			)
		case 6:
			return (
				<SeniorLanguage
					navigation={props.navigation}
				/>
			)
		case 7:
			return (
				<SeniorUploadAvatar
					navigation={props.navigation}
				/>
			)
		default: 
			return (
				props.navigation.navigate('Overview')
			)
	}
}