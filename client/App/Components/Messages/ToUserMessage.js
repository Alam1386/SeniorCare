import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { Avatar, Button } from 'react-native-elements'

const ToUserMessage = (props) => {

  return (
    <View style={styles.toMessages}>
      {/* <Avatar
        rounded
        size='small'
        title={props.d && props.d.substring(0, 2)}
        source={{
          uri:
            props.d && props.d.avatar,
        }}
      /> */}
      <View style={styles.toMessageBubble}>
        <Text style={styles.fromText}> {props.d.content} </Text>
      </View>
    </View>

  )
}

export default ToUserMessage
