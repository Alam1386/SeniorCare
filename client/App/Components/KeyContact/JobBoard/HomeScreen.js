import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Auth from '@aws-amplify/auth'

export default class HomeScreen extends React.Component {


  componentDidMount() {
    this.getCurrentSession()
  }

  getCurrentSession = async () => {
    await Auth.currentSession()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Home</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5059ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: '#fff'
  }
})
