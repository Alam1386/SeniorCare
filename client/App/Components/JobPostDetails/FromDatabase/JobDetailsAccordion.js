import React from 'react'

import { Text, TouchableOpacity, View} from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { backgroundStyles } from '../../Styles/GeneralStyles'
import { submitJobOverview } from '../../Styles/PostJob/SubmitJobStyles'

import SubmitJobAccordionBody from './JobDetailsAccordionBody';

export default SubmitJobAccordion = props => {
	const { sectionName, sectionData, collapsableState, handleCollapsable } = props

	const collapsableIcon = collapsableState ? 'chevron-up' : 'chevron-down'

	return (
		<TouchableOpacity onPress={handleCollapsable}>
			<View style={{...backgroundStyles.background, ...submitJobOverview.sectionTitle} }>
				<Text style={submitJobOverview.sectionTitleText}>{sectionName}</Text>
				<AwesomeIcon name={collapsableIcon} size={20} color='#A3A3A3' />
			</View>
			{collapsableState && 
				<SubmitJobAccordionBody
					sectionName={sectionName}
					sectionData={sectionData}
				/>
			}
		</TouchableOpacity>
	)
}