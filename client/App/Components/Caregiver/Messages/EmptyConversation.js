import React from 'react'
import { Dimensions, ScrollView, Text, View, Image } from 'react-native'
import styles from '../../Styles/Messages/MessagesStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card } from 'native-base'

const EmptyConversation = (props) => {

  return (
    <View>
      <Card style={{ zIndex: 100, position: 'relative', width: wp(90), marginLeft: wp(5), padding: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>You have no messages yet.</Text>
      </Card>
      <Card style={{ zIndex: 100, position: 'relative', width: wp(90), marginLeft: wp(5), padding: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Only a family member or a senior's key contact currently looking for a caregiver can start a conversation with you.</Text>
      </Card>
      <Card style={{ zIndex: 100, position: 'relative', width: wp(90), marginLeft: wp(5), padding: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#3F7DFB' }}> Tip! Try applying for more jobs </Text>
      </Card>
    </View>
  )
}

export default EmptyConversation
