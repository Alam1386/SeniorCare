import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from "../Styles/searchStyles/searchFilterStyles"
import { Button } from 'react-native-elements';

function AvailabilityFilter(props) {
  return (
    <>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => props.handlePress(props.args.live_in)}
          containerStyle={{ width: "40%", marginRight: 5 }}
          buttonStyle={{
            backgroundColor: props.filterObj.availability === "live in" ? "#244397" : "white",
            borderWidth: 1,
            borderColor: '#244397',
            borderRadius: 25,
          }}
          titleStyle={{ color: props.filterObj.availability === "live in" ? "white" : "#244397" }}
          title="live in" />
        <Button
          onPress={() => props.handlePress(props.args.live_out)}
          containerStyle={{ width: "40%", marginRight: 5 }}
          buttonStyle={{
            backgroundColor: props.filterObj.availability === "live out" ? "#244397" : "white",
            borderWidth: 1,
            borderColor: '#244397',
            borderRadius: 25,
          }}
          titleStyle={{ color: props.filterObj.availability === "live out" ? "white" : "#244397" }}
          title="live out" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => props.handlePress(props.args.no_preference)}
          containerStyle={{ width: "40%", marginRight: 5 }}
          buttonStyle={{
            backgroundColor: props.filterObj.availability === undefined ? "#244397" : "white",
            borderWidth: 1,
            borderColor: '#244397',
            borderRadius: 25,
          }}
          titleStyle={{ color: props.filterObj.availability === undefined ? "white" : "#244397" }}
          title="no preference" />
      </View>
    </>
  )
}

export default AvailabilityFilter