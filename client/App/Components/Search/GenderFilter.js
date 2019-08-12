import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from "../Styles/searchStyles/searchFilterStyles"
import { Button } from 'react-native-elements';

function GenderFilter(props) {
  return (
    <>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => props.handlePress(props.args.female)}
          containerStyle={{ width: "40%", marginRight: 5 }}
          buttonStyle={{
            backgroundColor: props.filterObj.gender === "female" ? "#244397" : "white",
            borderWidth: 1,
            borderColor: '#244397',
            borderRadius: 25,
          }}
          titleStyle={{ color: props.filterObj.gender === "female" ? "white" : "#244397" }}
          title="female" />
        <Button
          onPress={() => props.handlePress(props.args.male)}
          containerStyle={{ width: "40%", marginRight: 5 }}
          buttonStyle={{
            backgroundColor: props.filterObj.gender === "male" ? "#244397" : "white",
            borderWidth: 1,
            borderColor: '#244397',
            borderRadius: 25,
          }}
          titleStyle={{ color: props.filterObj.gender === "male" ? "white" : "#244397" }}
          title="male" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => props.handlePress(props.args.other)}
          containerStyle={{ width: "40%", marginRight: 5 }}
          buttonStyle={{
            backgroundColor: props.filterObj.gender === "other" ? "#244397" : "white",
            borderWidth: 1,
            borderColor: '#244397',
            borderRadius: 25,
          }}
          titleStyle={{ color: props.filterObj.gender === "other" ? "white" : "#244397" }}
          title="other" />
        <Button
          onPress={() => props.handlePress(props.args.no_preference)}
          containerStyle={{ width: "40%", marginRight: 5 }}
          buttonStyle={{
            backgroundColor: props.filterObj.gender === undefined ? "#244397" : "white",
            borderWidth: 1,
            borderColor: '#244397',
            borderRadius: 25,
          }}
          titleStyle={{ color: props.filterObj.gender === undefined ? "white" : "#244397" }}
          title="no preference" />
      </View>
    </>
  )
}

export default GenderFilter