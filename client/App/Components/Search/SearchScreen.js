
import { Dimensions, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import gql from "graphql-tag";
import styles from "../Styles/searchStyles/searchStyles"
import Ratings from "./Ratings"
import calcAge from "../utils/calcAge"
import checkCognitoSession from "../utils/checkCognitoSession"
import { Avatar, Button } from 'react-native-elements'
import MessageButton from "./MessageButton"
import { ADD_CONVERSATION_MUTATION } from "../../graphql-queries/mutation"
import Loading from '../Loading/Loading'
import { GET_CAREGIVER_CONVO } from "../../graphql-queries/queries"
import { connect } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const mapStateToProps = state => {
  return {
    key_contact_id: state.user_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyContactIdUpdate: (value) => dispatch({ type: 'KEYCONTACTID', payload: value })
  }
}

// AWS Amplify modular import
import Auth from '@aws-amplify/auth'

const height = Dimensions.get("window").height

const yellowCurve = require('../../Images/WelcomeScreen/yellow-curve.png')

const GET_CAREGIVERS = gql`
   query GetCaregiver($input: FilterInput!) {
    getCaregiver(input: $input){
      id
      fullname
      location
      years_experience
      num_hired
      birthdate
      hourly_rate
      gender
      availability
      average_rating
      avatar
    }
  }
`;

const SearchScreen = (props) => {

  let [userId, setUserID] = useState('')

  useEffect(
    // Effect function from second render
    () => {
      checkCognitoSession(props)
    },
    [])


  let filterObj = {};

  if (props.navigation.getParam('filterObj') !== undefined) {
    filterObj = props.navigation.getParam('filterObj');
  }

  const [starCount, setStarCount] = useState(0)

  const { data, error, loading } = useQuery(GET_CAREGIVERS, { variables: { input: filterObj } })

  const addConversation = useMutation(ADD_CONVERSATION_MUTATION);

  if (data.getCaregiver === undefined) { return (<Loading />) }

  if (data.getCaregiver.length === 0) { return (<Text> No Results Found </Text>) }

  data.getCaregiver.forEach((d, i) => {
    if (d.birthdate) {
      calcAge(d)
    }
  })




  function onStarRatingPress(rating) {
    setStarCount(rating)
  }

  function handlePress(caregiver_id, key_contact_id) {
    addConversation({
      variables: { caregiver_id: caregiver_id, key_contact_id: key_contact_id },
      refetchQueries: [{ query: GET_CAREGIVER_CONVO, variables: { key_contact_id: key_contact_id } }]
    })
    props.navigation.navigate("Messages")
  }

  const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }

  const handleGoToCaregiverDetails = (id) => {
    props.navigation.navigate('Caregiver', {
      id: id
    })
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#EEF5FB' }}>
      <Image
        source={yellowCurve}
        style={{ height: hp(44), width: wp(100), position: 'absolute', bottom: 0, padding: 0, margin: 0, backgroundColor: 'transparent' }}
      />
      <ScrollView>
        <View>
          {data.getCaregiver.map((d, i) => (
            < TouchableOpacity
              onPress={() => handleGoToCaregiverDetails(d.id)}
              key={i}
            >
              <View style={styles.searchContainer}>
                <Avatar
                  size="large"
                  containerStyle={{ height: "100%" }}
                  source={{
                    uri: d.avatar,
                  }}
                />
                <View style={styles.infoContainer}>
                  <Text style={styles.fullName}> {d.fullname} </Text>
                  <View style={styles.ratingLocationContainer}>
                    <Ratings data={d.average_rating} />
                    <Text style={styles.ratingText}> {d.average_rating} </Text>
                    <Text style={styles.locationText}> | </Text>
                    <Text style={styles.locationText}> {d.location} </Text>
                  </View>
                  <View style={styles.experienceRateContainer}>
                    <Text style={styles.backgroundInfoText}> {`${d.years_experience} years experience`} </Text>
                    <Text style={styles.backgroundInfoText}> {`From $${d.hourly_rate}.00 / hour`} </Text>
                  </View>
                  <MessageButton key_contact_id={props.key_contact_id} caregiver_id={d.id} handlePress={handlePress} />
                </View>
              </View>
            </TouchableOpacity>
          ))
          }
        </View>
      </ScrollView >
    </View >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)


