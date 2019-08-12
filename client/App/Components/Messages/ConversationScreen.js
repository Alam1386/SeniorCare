import React from 'react'
import { Dimensions, ScrollView, Text, View, Image } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { useQuery } from 'react-apollo-hooks'
import { GET_CAREGIVER_CONVO } from "../../graphql-queries/queries"
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import Loading from '../Loading/Loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const blueCurve = require('../../Images/WelcomeScreen/blue-curve.png')

const mapStateToProps = state => {
  return {
    user_id: state.user_id
  }
}

const ConversationScreen = (props) => {

  const { data, error, loading, refetch } = useQuery(GET_CAREGIVER_CONVO, {
    variables: { key_contact_id: props.user_id }
  })


  if (data.getCaregiverConvos === undefined) { return (<Loading />) }

  function handlePress(conversation_id, user_id) {
    props.navigation.navigate("MessagesScreen", {
      conversation_id: conversation_id,
      user_id: user_id
    })
  }


  const height = Dimensions.get("window").height

  return (
    <View style={styles.MainContainer}>
      <Image
        source={blueCurve}
        style={{ height: hp(44), width: wp(100), position: 'absolute', bottom: 0, padding: 0, margin: 0 }}
      />
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: 'transparent', height: height, position: 'relative' }} >
          {
            data.getCaregiverConvos.map((d, i) =>
              <View key={i} style={styles.conversationContainer} >
                <ListItem
                  onPress={() => handlePress(d.conversation_id, props.user_id)}
                  leftAvatar={{ source: { uri: d.avatar } }}
                  title={<Text> {d.fullname}</Text>}
                  rightIcon={{ name: 'chevron-right' }}
                />
              </View>
            )
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default connect(mapStateToProps)(ConversationScreen)
