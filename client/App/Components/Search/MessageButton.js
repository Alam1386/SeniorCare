import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useQuery } from 'react-apollo-hooks'
import gql from "graphql-tag";
import styles from "../Styles/searchStyles/searchStyles"
import { Button } from 'react-native-elements'

const MessageButton = (props) => {
  return (
    <View style={styles.MainContainer}>
      <Button
        buttonStyle={{
          backgroundColor: "#244397",
          // borderWidth: 1,
          // borderColor: '#244397',
          // borderRadius: 25,
          height: 28,
          margin: 2,
          padding: 0,
        }}
        onPress={() => props.handlePress(props.caregiver_id, props.key_contact_id)}
        containerStyle={{ width: "100%", margin: 0 }}
        titleStyle={{ color: "white", fontSize: 14 }}
        title="Message"
      />
    </View>
  )
}

export default MessageButton


