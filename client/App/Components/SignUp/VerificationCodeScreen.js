import React from 'react'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Alert,
  Modal,
  FlatList,
  Animated,
  Image
} from 'react-native'

import gql from 'graphql-tag'
import { Mutation } from "react-apollo";

import Icons from 'react-native-vector-icons/AntDesign';

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

//  Mutation code from grapqh server

const keyContactSignup = gql`
  mutation keyContactSignupVars($input: SignupObject!) {
    keyContactSignup(input: $input) {
      token
    }
  }
`

const caregiverSignup = gql`
  mutation caregiverSignupVars($input: SignupObject!) {
    caregiverSignup(input: $input) {
      token
    }
  }
`

export default class VerificationCodeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeIn: new Animated.Value(0),  // Initial value for opacity: 0
      fadeOut: new Animated.Value(1),  // Initial value for opacity: 1
      isHidden: false,
      modalVisible: false,
      username: '',
      id: '',
      fullname: '',
      email: '',
      phone_number: '',
      role: '',
      authCode: '',
      avatar: 'https://external-preview.redd.it/GwbmojLD6jZlacsbWWNpTeL8MbkIHGnJR51vGkhngps.jpg?auto=webp&s=55bc78f44a3e81313a9abe1b3a1b4adcda300797'
    }
  }

  // navigation upon submiting signup
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination)
  }

  // Get user input
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  // Methods for logo animation
  componentDidMount() {
    // this.fadeIn()
    this.idToState()
    this.fullnameToState()
    this.emailToState()
    this.phoneToState()
    this.roleToState()
  }

  async idToState() {
    const { navigation } = this.props
    const id = navigation.getParam('id', 'No user id provided')
    await this.setState({ id: id })
  }


  async fullnameToState() {
    const { navigation } = this.props
    const fullname = navigation.getParam('fullname', 'No fullname provided')
    await this.setState({ fullname: fullname })
  }

  async emailToState() {
    const { navigation } = this.props
    const email = navigation.getParam('email', 'No email provided')
    await this.setState({ email: email, username: email })
  }

  async phoneToState() {
    const { navigation } = this.props
    const phone_number = navigation.getParam('phone_number', 'No phone_number provided')
    await this.setState({ phone_number: phone_number })
  }

  async roleToState() {
    const { navigation } = this.props
    const Role = navigation.getParam('role', 'No role provided')
    await this.setState({ role: Role })
  }

  // fadeIn() {
  //   Animated.timing(
  //     this.state.fadeIn,
  //     {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true
  //     }
  //   ).start()
  //   this.setState({ isHidden: true })
  // }
  // fadeOut() {
  //   Animated.timing(
  //     this.state.fadeOut,
  //     {
  //       toValue: 0,
  //       duration: 1000,
  //       useNativeDriver: true
  //     }
  //   ).start()
  //   this.setState({ isHidden: false })
  // }

  // Functions for Phone Input
  showModal() {
    this.setState({ modalVisible: true })
    // console.log('Shown')
  }
  hideModal() {
    this.setState({ modalVisible: false })
    // refocus on phone Input after selecting country and/or closing Modal
    this.refs.FourthInput._root.focus()
    // console.log('Hidden')
  }

  // Confirm users and redirect them to the SignIn page
  async confirmSignUp() {
    const { username, authCode } = this.state
    await Auth.confirmSignUp(username, authCode)
      .then(() => {

        this.props.navigation.navigate('SignIn')
        console.log('Confirm sign up successful')
      })
      .catch(err => {
        if (!err.message) {
          console.log('Error when entering confirmation code: ', err)
          Alert.alert('Error when entering confirmation code: ', err)
        } else {
          console.log('Error when entering confirmation code: ', err.message)
          Alert.alert('Error when entering confirmation code: ', err.message)
        }
      })
  }
  // Resend code if not received already
  async resendSignUp() {
    const { username } = this.state
    await Auth.resendSignUp(username)
      .then(() => console.log('Confirmation code resent successfully'))
      .catch(err => {
        if (!err.message) {
          console.log('Error requesting new confirmation code: ', err)
          Alert.alert('Error requesting new confirmation code: ', err)
        } else {
          console.log('Error requesting new confirmation code: ', err.message)
          Alert.alert('Error requesting new confirmation code: ', err.message)
        }
      })
  }
  render() {
    let { fadeIn, fadeOut, isHidden, flag } = this.state
    const { id, fullname, email, phone_number, role, avatar } = this.state
    return (
      <Mutation mutation={role === 'family' ? keyContactSignup : caregiverSignup} >
        {postMutation => (
          <SafeAreaView style={styles.container}>
            <StatusBar />
            <KeyboardAvoidingView
              style={styles.container}
              behavior='padding'
              enabled>
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                  {/* App Logo */}
                  <View style={styles.logoContainer}>
                    <Image
                      source={logo}
                      style={{ width: 117, height: 117 }} />
                  </View>
                  <Container style={styles.infoContainer}>
                    <View style={styles.container}>
                      {/* code confirmation section  */}
                      <Card>
                        <CardItem style={styles.itemStyle}>
                          <Icons name="check" style={styles.iconStyle} />
                          <Input
                            style={styles.input}
                            placeholder='Your verification code'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'numeric'}
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            onSubmitEditing={(event) => { this.refs.SecondInput._root.focus() }}
                            onChangeText={value => this.onChangeText('authCode', value)}
                          />
                        </CardItem>
                      </Card>
                      <TouchableOpacity
                        onPress={() => {
                          this.confirmSignUp().then(postMutation({
                            variables: {
                              input:
                                { id, fullname, email, phone_number, avatar }
                            }
                          }))
                        }}
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>
                          Verify your account
                    </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => this.resendSignUp()}
                        style={styles.buttonStyle2}>
                        <Text style={styles.buttonText2}>
                          Resend verification code
                    </Text>
                      </TouchableOpacity>
                    </View>
                  </Container>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </SafeAreaView >
        )}
      </Mutation>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4BB79',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    flex: 1,
    fontSize: 17,
    height: '100%',
    fontWeight: 'bold',
    color: '#525252',
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 370,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#F4BB79',
  },
  iconStyle: {
    color: '#F89522',
    fontSize: 28,
    marginRight: 15
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#244392',
    padding: 14,
    marginTop: hp(2),
    marginBottom: hp(1),
    borderRadius: 24,
    zIndex: 1,
  },
  buttonStyle2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1.2,
    borderColor: '#244392',
    padding: 14,
    marginTop: hp(2),
    marginBottom: hp(1),
    borderRadius: 24,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
  },
  buttonText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#244392",
  },
  logoContainer: {
    left: 0,
    right: 0,
    height: hp(20),
    bottom: hp(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    color: '#244392',
    fontFamily: 'GothamRounded-Bold',
    marginTop: hp(1)
  },
  textStyle: {
    padding: 5,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  itemStyle: {
    minHeight: hp(15),
    borderBottomWidth: 0.7,
    borderColor: '#cccccc',
    zIndex: 1,
  },
  countryStyle: {
    flex: 1,
    backgroundColor: '#5059ae',
    borderTopColor: '#211f',
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#b44666',
  }
})
