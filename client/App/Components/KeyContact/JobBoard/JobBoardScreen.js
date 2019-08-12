import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import JobBoardJobs from './JobBoardJobs'


const JobBoardScreen = (props) => {

  return (
    <ScrollView style={styles.MainContainer}>
      <JobBoardJobs />
    </ScrollView>
  )
}

export default JobBoardScreen


