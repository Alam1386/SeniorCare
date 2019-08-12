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

// Import data for countries
import data from './countriesData'

// Load the app logo
const logo = require('../../Images/WelcomeScreen/logo-circle.png')


// Default render of country flag
const defaultFlag = data.filter(
  obj => obj.name === 'Canada'
)[0].flag

// Default render of country code
const defaultCode = data.filter(
  obj => obj.name === 'Canada'
)[0].dial_code

export default class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      fullname: '',
      username: '',
      password: '',
      email: '',
      phone_number: '',
      role: '',
      flag: defaultFlag,
      modalVisible: false,
      authCode: '',
    }
  }

  // navigation upon submiting signup

  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination, {
      id: this.state.id,
      username: this.state.username,
      fullname: this.state.fullname,
      email: this.state.email,
      phone_number: this.state.phone_number,
      role: this.state.role
    })
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
    this.roleToState()
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

  async getCountry(country) {
    const countryData = await data
    try {
      const countryCode = await countryData.filter(
        obj => obj.name === country
      )[0].dial_code
      const countryFlag = await countryData.filter(
        obj => obj.name === country
      )[0].flag
      // Set data from user choice of country
      this.setState({ phoneNumber: countryCode, flag: countryFlag })
      await this.hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }
  // Sign up user with AWS Amplify Auth
  async signUp() {
    const { username, password, email, phone_number, role } = this.state
    // rename variable to conform with Amplify Auth field phone attribute

    await Auth.signUp({
      username,
      password,
      attributes: { email, phone_number, 'custom:role': role }
    })
      .then((data) => {
        // console.log('this is signUp userId:', data.userSub)
        this.setState({ id: data.userSub })
        console.log('sign up successful!')
        Alert.alert('Enter the confirmation code you received.')
        this.handleRoute('Verification')
      })
      .catch(err => {
        if (!err.message) {
          console.log('Error when signing up: ', err)
          Alert.alert('Error when signing up: ', err)
        } else {
          console.log('Error when signing up: ', err.message)
          Alert.alert('Error when signing up: ', err.message)
        }
      })
  }

  render() {
    let { fadeOut, fadeIn, isHidden, flag } = this.state
    const countryData = data
    return (
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
                <Animated.Image
                  source={logo}
                  style={{ width: 85, height: 85 }} />
              </View>
              <Container style={styles.infoContainer}>
                <View style={styles.container}>
                  <Text style={styles.h1}>
                    Welcome!
                   </Text>
                  {/* username section  */}
                  <Card >
                    <CardItem style={styles.itemStyle} >
                      <Icons name="user" style={styles.iconStyle} />
                      <Input
                        style={styles.input}
                        placeholder='Full Name'
                        placeholderTextColor='#adb4bc'
                        keyboardType={'email-address'}
                        returnKeyType='next'
                        autoCapitalize='none'
                        autoCorrect={false}
                        ref='fristInput'
                        onSubmitEditing={(event) => { this.refs.firstInput._root.focus() }}
                        onChangeText={value => { this.onChangeText('fullname', value) }}
                      />
                    </CardItem>
                    {/* email section */}
                    <CardItem style={styles.itemStyle} >
                      <Icons name="mail" style={styles.iconStyle} />
                      <Input
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='#adb4bc'
                        keyboardType={'email-address'}
                        returnKeyType='next'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={false}
                        ref='ThirdInput'
                        onSubmitEditing={(event) => { this.refs.FourthInput._root.focus() }}
                        onChangeText={value => { this.onChangeText('username', value), this.onChangeText('email', value) }}
                      />
                    </CardItem>
                    {/*  password section  */}
                    <CardItem style={styles.itemStyle} >
                      <Icons name="lock" style={styles.iconStyle} />
                      <Input
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='#adb4bc'
                        returnKeyType='next'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        ref='SecondInput'
                        onSubmitEditing={(event) => { this.refs.ThirdInput._root.focus() }}
                        onChangeText={value => this.onChangeText('password', value)}
                      />
                    </CardItem>
                    {/* phone section  */}
                    <CardItem style={styles.itemStyleNoBorder}  >
                      <Icons name="phone" style={styles.iconStyle} />
                      {/* country flag */}
                      <View><Text style={{ fontSize: 40 }}>{flag}</Text></View>
                      {/* open modal */}
                      <Icons
                        name="down"
                        style={[styles.iconStyle, { marginLeft: 5 }]}
                        onPress={() => this.showModal()}
                      />
                      <Input
                        style={styles.input}
                        placeholder='+14161234567'
                        placeholderTextColor='#adb4bc'
                        keyboardType={'phone-pad'}
                        returnKeyType='done'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={false}
                        ref='FourthInput'
                        value={this.state.phone_number}
                        onChangeText={(val) => {
                          if (this.state.phone_number === '') {
                            // render Canada phone code by default when Modal is not open
                            this.onChangeText('phone_number', defaultCode + val)
                          } else {
                            // render country code based on users choice with Modal
                            this.onChangeText('phone_number', val)
                          }
                        }
                        }
                      />
                      {/* Modal for country code and flag */}
                      <Modal
                        animationType="slide" // fade
                        transparent={false}
                        visible={this.state.modalVisible}>
                        <View style={{ flex: 1 }}>
                          <View style={{ flex: 10, paddingTop: 80, backgroundColor: '#eef5fb' }}>
                            <FlatList
                              data={countryData}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={
                                ({ item }) =>
                                  <TouchableWithoutFeedback
                                    onPress={() => this.getCountry(item.name)}>
                                    <View
                                      style={
                                        [
                                          styles.countryStyle,
                                          {
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                          }
                                        ]
                                      }>
                                      <Text style={{ fontSize: 45 }}>
                                        {item.flag}
                                      </Text>
                                      <Text style={{ fontSize: 20, color: '#244392' }}>
                                        {item.name} ({item.dial_code})
                                    </Text>
                                    </View>
                                  </TouchableWithoutFeedback>
                              }
                            />
                          </View>
                          <TouchableOpacity
                            onPress={() => this.hideModal()}
                            style={styles.closeButtonStyle}>
                            <Text style={styles.textStyle}>
                              Close
                          </Text>
                          </TouchableOpacity>
                        </View>
                      </Modal>
                    </CardItem>
                    {/* End of phone input */}

                  </Card>
                  <TouchableOpacity
                    onPress={() => this.signUp()}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                      Create an account
                    </Text>
                  </TouchableOpacity>
                </View>
              </Container>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView >
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
    fontWeight: 'bold',
    color: '#525252',
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: hp(60),
    bottom: hp(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    backgroundColor: '#F4BB79',
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
    backgroundColor: '#244392',
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
    zIndex: 1,
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 600,
    bottom: hp(37),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
  countryStyle: {
    flex: 1,
    backgroundColor: '#eef5fb',
    borderTopColor: '#cccccc',
    borderTopWidth: 1,
    padding: 12,
    zIndex: 1,
  },
  closeButtonStyle: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#F89522',
    zIndex: 1,
  }
})
