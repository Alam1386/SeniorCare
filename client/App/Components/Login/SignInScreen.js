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
  CardItem
} from 'native-base'

// AWS Amplify modular import
import Auth from '@aws-amplify/auth'

// Load the app logo
const logo = require('../../Images/WelcomeScreen/logo-circle.png')
const yellowCurve = require('../../Images/WelcomeScreen/yellow-curve.png')

export default class SignInScreen extends React.Component {
  state = {
    username: '',
    password: '',
    fadeIn: new Animated.Value(0),
    fadeOut: new Animated.Value(0),
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
        toValue: 1,
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
  // Sign in users with Auth
  async signIn() {
    const { username, password } = this.state
    await Auth.signIn(username, password)
      .then(user => {
        this.setState({ user })
        this.props.navigation.navigate('AuthJobLoading')
      })
      .catch(err => {
        if (!err.message) {
          console.log('Error when signing in: ', err)
          Alert.alert('Error when signing in: ', err)
        } else {
          console.log('Error when signing in: ', err.message)
          Alert.alert('Error when signing in: ', err.message)
        }
      })
  }
  render() {
    let { fadeOut, fadeIn, isHidden } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              {/* App Logo */}
              <View style={styles.logoContainer}>
                {
                  isHidden ?
                    <Animated.Image
                      source={logo}
                      style={{ width: wp(45), height: wp(45) }} />
                    :
                    <Animated.Image
                      source={logo}
                      style={{ width: wp(45), height: wp(45) }} />
                }
              </View>
              <Container style={styles.infoContainer}>

                <View style={styles.container}>
                  <Text style={styles.h1}>
                    Welcome back!
                  </Text>
                  <Image
                    source={yellowCurve}
                    style={{ height: hp(44), width: wp(100), zIndex: 0, position: 'absolute', padding: 0, margin: 0 }}
                  />
                  <Card style={{ zIndex: 100, position: 'relative', width: wp(90), marginLeft: wp(5) }}>
                    <CardItem style={styles.itemStyle}>
                      <Icons name="mail" style={styles.iconStyle} />
                      <Input
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='#adb4bc'
                        keyboardType={'email-address'}
                        returnKeyType='next'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onSubmitEditing={(event) => { this.refs.SecondInput._root.focus() }}
                        onChangeText={value => this.onChangeText('username', value)}
                        onFocus={() => this.fadeOut()}
                        onEndEditing={() => this.fadeIn()}
                      />
                    </CardItem>
                    <CardItem style={styles.itemStyle2}>
                      <Icons style={styles.iconStyle} name="lock" />
                      <Input
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='#adb4bc'
                        returnKeyType='go'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        ref='SecondInput'
                        onChangeText={value => this.onChangeText('password', value)}
                        onFocus={() => this.fadeOut()}
                        onEndEditing={() => this.fadeIn()}
                      />
                    </CardItem>
                  </Card>
                  <TouchableOpacity
                    onPress={() => this.signIn()}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                      Log In
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ForgetPassword')}
                    style={styles.forgotPasswordStyle}>
                    <Text style={styles.forgotTextStyle}>
                      Forgot your password?
                    </Text>
                  </TouchableOpacity>
                </View>

              </Container>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
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
    height: hp(33),
    bottom: hp(6),
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
    marginLeft: wp(5),
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
    bottom: hp(32),
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
    marginBottom: hp(9),
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
