import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from "../Styles/searchStyles/searchFilterStyles"
import { Slider } from 'react-native-elements';

function HourlyRateFilter(props) {
  return (
    <>
      <Text style={{ fontSize: 15 }}>{`$${props.filterObj.hourly_rate}`}</Text>
      <Slider
        value={props.filterObj.hourly_rate}
        onValueChange={value => props.hourlyRateChange(value)}
        minimumValue={14}
        maximumValue={100}
        step={1}
        thumbStyle={{ backgroundColor: "white", elevation: 1, borderColor: "grey", }}
        trackStyle={{ backgroundColor: "#C7C7CC" }}
      />
      <Text style={{ fontSize: 12, color: "#525252" }}>{"$14"}</Text>
    </>
  )
}

export default HourlyRateFilter