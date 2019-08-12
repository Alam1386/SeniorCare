import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'
import styles from "../Styles/searchStyles/searchFilterStyles"
import { Button } from 'react-native-elements';
import GenderFilter from "./GenderFilter"
import AvailabilityFilter from "./AvailabilityFilter"
import HourlyRateFilter from "./HourlyRateFilter"
import YearsExpFilter from "./YearsExpFilter"


const SearchFilter = (props) => {
  // TODO: improve performance

  const [filterObj, setFilterObj] = useState({ gender: null, availability: null, hourly_rate: 17, years_experience: 5 })

  function handleGenderPress(newGender) {
    // spread operator takes all other keys and sticks them into the object

    setFilterObj({ ...filterObj, gender: newGender })
  }

  function handleLivePress(newLive) {

    setFilterObj({ ...filterObj, availability: newLive })
  }

  function hourlyRateChange(value) {
    setFilterObj({ ...filterObj, hourly_rate: value })
  }

  function yearsExpChange(value) {
    setFilterObj({ ...filterObj, years_experience: value })
  }

  function handleResultsPress() {
    props.navigation.navigate("Search", {
      filterObj: filterObj,
    })
  }

  const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }

  return (
    <View style={styles.MainContainer}>
    <ScrollView>
        <View style={styles.genderContainer}>
          <Text style={{ fontSize: 16, color: "#244397", marginTop: 10 }}> Gender </Text>
          <GenderFilter
            filterObj={filterObj}
            args={{ female: "female", male: "male", other: "other", no_preference: undefined }}
            handlePress={handleGenderPress}
          />
        </View>
        <View style={styles.availabilityContainer}>
          <Text style={styles.filterTitleText}> Availability </Text>
          <AvailabilityFilter
            filterObj={filterObj}
            args={{ live_in: "live in", live_out: "live out", no_preference: undefined }}
            handlePress={handleLivePress}
          />
        </View>
        <View>
          <Text style={styles.filterTitleText}> Maximum hourly rate: </Text>
          <Text style={styles.sliderDescText}> *Minimum wage varies per province/territory in Canada </Text>
        </View>
        <View style={styles.sliderContainer}>
          <HourlyRateFilter hourlyRateChange={hourlyRateChange} filterObj={filterObj} />
        </View>
        <View>
          <Text style={styles.filterTitleText}> Minimum years of experience </Text>
        </View>
        <View style={styles.sliderContainer}>
          <YearsExpFilter yearsExpChange={yearsExpChange} filterObj={filterObj} />
        </View>
    </ScrollView>
    <Button
      onPress={handleResultsPress}
      buttonStyle={{
        backgroundColor: "#244397",
        borderWidth: 1,
        borderColor: '#244397',
        width: screen.width,
        borderRadius: 0,
        height: 60,
      }}
      containerStyle={{ width: "40%", marginRight: 5 }}
      titleStyle={{ color: "white" }}
      title="See Results" />
    </View>
  )
}

export default SearchFilter


