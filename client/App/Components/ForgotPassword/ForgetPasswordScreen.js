import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Animated,
  Image
} from 'react-native'

import Icons from 'react-native-vector-icons/AntDesign'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  Container,
  Input,
  Card,
  CardItem,
  Item
} from 'native-base'

// AWS Amplify modular import
import Auth from '@aws-amplify/auth'

// Load the app logo
const logo = require('../../Images/WelcomeScreen/logo-circle.png')
const yellowCurve = require('../../Images/WelcomeScreen/yellow-curve.png')

export default class ForgetPasswordScreen extends React.Component {
  state = {
    username: '',
    authCode: '',
    newPassword: '',
    fadeIn: new Animated.Value(0),  // Initial value for opacity: 0
    fadeOut: new Animated.Value(1),  // Initial value for opacity: 1
    isHidden: false
  }
  componentDidMount() {
    this.fadeIn()
  }
  fadeIn() {
    Animated.timing(
      this.state.fadeIn,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start()
    this.setState({ isHidden: true })
  }
  fadeOut() {
    Animated.timing(
      this.state.fadeOut,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }
    ).start()
    this.setState({ isHidden: false })
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  // Request a new password
  async forgotPassword() {
    const { username } = this.state
    await Auth.forgotPassword(username)
      .then(data => console.log('New code sent', data))
      .catch(err => {
        if (!err.message) {
          console.log('Error while setting up the new password: ', err)
          Alert.alert('Error while setting up the new password: ', err)
        } else {
          console.log('Error while setting up the new password: ', err.message)
          Alert.alert('Error while setting up the new password: ', err.message)
        }
      })
  }
  // Upon confirmation redirect the user to the Sign In page
  async forgotPasswordSubmit() {
    const { username, authCode, newPassword } = this.state
    await Auth.forgotPasswordSubmit(username, authCode, newPassword)
      .then(() => {
        this.props.navigation.navigate('SignIn')
        console.log('the New password submitted successfully')
      })
      .catch(err => {
        if (!err.message) {
          console.log('Error while confirming the new password: ', err)
          Alert.alert('Error while confirming the new password: ', err)
        } else {
          console.log('Error while confirming the new password: ', err.message)
          Alert.alert('Error while confirming the new password: ', err.message)
        }
      })
  }
  render() {
    let { fadeOut, fadeIn, isHidden } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <KeyboardAvoidingView
          style={styles.container}
          behavior='padding'
          enabled
          keyboardVerticalOffset={23}>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              {/* App Logo */}
              <View style={styles.logoContainer}>
                {
                  isHidden ?
                    <Animated.Image
                      source={logo}
                      style={{ width: wp(30), height: wp(30) }}
                    />
                    :
                    <Animated.Image
                      source={logo}
                      style={{ width: wp(30), height: wp(30) }}
                    />
                }
              </View>
              {/* Infos */}
              <Container style={styles.infoContainer}>
                <View style={styles.container}>
                  <Text style={styles.h1}>
                    Reset password
                </Text>
                  {/* Username */}
                  <Card>
                    <CardItem style={styles.itemStyle2}>
                      <Icons name="mail" style={styles.iconStyle} />
                      <Input
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='#adb4bc'
                        keyboardType={'email-address'}
                        returnKeyType='go'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={value => this.onChangeText('username', value)}
                        onFocus={this.fadeOut.bind(this)}
                        onEndEditing={this.fadeIn.bind(this)}
                      />
                    </CardItem>
                  </Card>

                  <TouchableOpacity
                    onPress={() => this.forgotPassword()}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                      Send Code
                    </Text>
                  </TouchableOpacity>
                  {/* the New password section  */}
                  <Card>
                    <CardItem style={styles.itemStyle}>
                      <Icons name="lock" style={styles.iconStyle} />
                      <Input
                        style={styles.input}
                        placeholder='New password'
                        placeholderTextColor='#adb4bc'
                        returnKeyType='next'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        onSubmitEditing={(event) => { this.refs.SecondInput._root.focus() }}
                        onChangeText={value => this.onChangeText('newPassword', value)}
                        onFocus={this.fadeOut.bind(this)}
                        onEndEditing={this.fadeIn.bind(this)}
                      />
                    </CardItem>
                    {/* Code confirmation section  */}
                    <CardItem style={styles.itemStyle2}>
                      <Icons name="check" style={styles.iconStyle} />
                      <Input
                        style={styles.input}
                        placeholder='Confirmation code'
                        placeholderTextColor='#adb4bc'
                        keyboardType={'numeric'}
                        returnKeyType='done'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={false}
                        ref='SecondInput'
                        onChangeText={value => this.onChangeText('authCode', value)}
                        onFocus={this.fadeOut.bind(this)}
                        onEndEditing={this.fadeIn.bind(this)}
                      />
                    </CardItem>
                  </Card>
                  <TouchableOpacity
                    onPress={() => this.forgotPasswordSubmit()}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                      Confirm the new password
                    </Text>
                  </TouchableOpacity>

                </View>
              </Container>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef5fb',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container2: {
    flex: 1,
    backgroundColor: '#eef5fb',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 1
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#525252',
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: hp(37),
    bottom: hp(8),
    marginHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#eef5fb',
    zIndex: 1,
  },
  itemStyle: {
    marginBottom: 5,
    borderBottomWidth: 0.7,
    borderColor: '#cccccc',
    zIndex: 1,
  },
  itemStyleNoBorder: {
    marginBottom: 10,
  },
  iconStyle: {
    color: '#F89522',
    fontSize: 28,
    marginRight: 15
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1.2,
    borderColor: '#244392',
    padding: 14,
    marginTop: hp(2),
    marginBottom: hp(1),
    width: wp(90),
    borderRadius: 24,
    zIndex: 1,
  },
  forgotTextStyle: {
    fontFamily: 'SFProText-Medium',
    color: '#3F7DFB',
    textAlign: 'center',
    marginTop: hp(2),
    marginBottom: hp(3),
    zIndex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#244392",
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: hp(80),
    bottom: hp(35),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    zIndex: 1,
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    color: '#244392',
    fontFamily: 'GothamRounded-Bold',
    marginBottom: hp(2),
    zIndex: 1,
  },
  textStyle: {
    padding: 5,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  countryStyle: {
    flex: 1,
    backgroundColor: '#eef5fb',
    borderTopColor: '#cccccc',
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#F89522',
  }
})