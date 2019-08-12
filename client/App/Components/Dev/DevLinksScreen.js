import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button } from 'react-native-elements'

// fix this
import styles from '../Styles/JobDashboardScreen/JobDashboardScreenStyle'

const DevLinksScreen = (props) => {
  return (
    <ScrollView style={styles.MainContainer}>
      <Text style={styles.ExempleText}>Welcome to DevLinks! We got you bro!</Text>
      <Button
				type="outline"
				title='Link 1'
				style={styles.ExempleButton}
        onPress={() => {
          props.navigation.navigate('JobDashboardScreen')
        }}
      />
      <Button
				type="outline"
				title='Link 2'
				style={styles.ExempleButton}
        onPress={() => {
          props.navigation.navigate('JobDashboardScreen')
        }}
      />
      <Button
				type="outline"
				title='Link 3'
				style={styles.ExempleButton}
        onPress={() => {
          props.navigation.navigate('JobDashboardScreen')
        }}
      />
    </ScrollView>
  )
}

export default DevLinksScreen


