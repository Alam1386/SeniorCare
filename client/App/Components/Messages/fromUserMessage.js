import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'

const FromUserMessage = (props) => {
  return (
    <View style = {styles.fromMessages}>
      <View style = {styles.fromMessageBubble}>
        <Text style = {styles.fromText}> {props.d.content} </Text>
      </View>
    </View>
  )
}

export default FromUserMessage
