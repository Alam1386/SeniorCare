import React from 'react'
import { connect } from 'react-redux'

import { View } from 'react-native'

import { backgroundStyles } from '../../../Styles/GeneralStyles'
import { overview } from '../../../Styles/PostJob/OverviewStyles'

import ServicesNeededBody from './ServicesNeededBody'
import PostJobTop from '../PostJobTop'

const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const ServiceDetails = (props) => {
  return (
		<View style={{...backgroundStyles.background, ...overview.mainContainer}}>
      <PostJobTop
        title={'Service Details'}
        currentPosition={props.formPosition}
        stepCount={2}
      />
      <ServicesNeededBody
        formPosition={props.formPosition}
        navigation={props.navigation}
      />
    </View>
  )
}

export default connect(mapStateToProps)(ServiceDetails)