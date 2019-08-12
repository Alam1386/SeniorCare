import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from "../Styles/searchStyles/searchFilterStyles"
import { Slider } from 'react-native-elements';

function YearsExpFilter(props) {
  return (
    <>
      <Text style={{ fontSize: 15 }}>{`${props.filterObj.years_experience}`}</Text>
      <Slider
        value={props.filterObj.years_experience}
        onValueChange={value => props.yearsExpChange(value)}
        minimumValue={0}
        maximumValue={50}
        step={1}
        thumbStyle={{ backgroundColor: "white", elevation: 1, borderColor: "grey", }}
        trackStyle={{ backgroundColor: "#C7C7CC" }}
      />
      <Text style={{ fontSize: 12, color: "#525252" }}>0</Text>
    </>
  )
}

export default YearsExpFilter