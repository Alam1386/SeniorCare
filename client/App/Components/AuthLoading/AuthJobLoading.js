import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import Auth from '@aws-amplify/auth'


const mapStateToProps = state => {
  const { user_id } = state.user_id
  return {
    user_id: user_id
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getAuthToken: (value) => dispatch({ type: 'GET_AUTH_TOKEN', payload: value })
  }
}

class AuthLoadingScreen extends React.Component {
  state = {
    userToken: null,
    role: ''
  }
  async componentDidMount() {

    await this.loadApp()
  }
  // Get the logged in users and remember them
  loadApp = async () => {
    await Auth.currentAuthenticatedUser()
      .then(user => {
        this.setState({ role: user.attributes['custom:role'] })
        this.setState({ userToken: user.signInUserSession.accessToken.jwtToken })
        this.props.getAuthToken(user.signInUserSession.accessToken.jwtToken)

        this.state.role === 'family' ?
          this.props.navigation.navigate('App') :
          this.props.navigation.navigate('CaregiverApp')

      })
      .catch(err => {
        this.props.navigation.navigate('Auth')
      })

  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)