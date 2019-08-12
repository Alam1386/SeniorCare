import React from 'react'
import { ScrollView, Text, View , Image} from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../../Components/Styles/Caregiver/Caregiver'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ratings from '../Search/Ratings'
import { Button } from 'react-native-elements'
import calcAge from '../../Components/utils/calcAge'


const CaregiverDetails = props => {

  let d = props.data.getCaregiverDetails
 const handleInviteToJobPost = () =>{
   alert("Welcome to job page!")
 }
  calcAge(d)
  return (
    <ScrollView style={styles.MainContainer}>
      <View style = {styles.experienceContainer}>
        <Text style = {styles.title}> Skills and Services </Text>
        <View style={styles.serviceWrapper}>
          <TouchableOpacity style={styles.service}>
            <Text style={styles.serviceText}>Bathing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <Text style={styles.serviceText}>Compnionship</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <Text style={styles.serviceText}>Dressing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <Text style={styles.serviceText}>Grocery Shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <Text style={styles.serviceText}>Grooming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <Text style={styles.serviceText}>Housekeeping</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <Text style={styles.serviceText}>Alzheimer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <Text style={styles.serviceText}>Dementia</Text>
          </TouchableOpacity>
        </View>
        <Text style = {styles.title}> Work Experience </Text>

          <Text style = {styles.workExTitle}> In-House Caregive </Text>
          <Text style = {styles.locationText}> December 2018 - Present</Text>
          <Text style = {styles.text}> Building great relationship with many seniors. I provide the best tiem for them especially in their golden age. </Text>

        <View style = {styles.hr}></View>

          <Text style = {styles.workExTitle}> Nursing Home Caregiver </Text>
          <Text style = {styles.locationText}> Jan 2018 - Nov 2018| Wellington Nursing Home</Text>
          <Text style = {styles.text}> I was in the Wellington Nursing home for almost a year. I take care alzheimer and dementia seniors.  </Text>

        <View style = {styles.hr}></View>

          <Text style = {styles.workExTitle}> Caregiver Intern </Text>
          <Text style = {styles.locationText}> Sep 2017 - Dec 2017| Waterloo Nursing Home</Text>
          <Text style = {styles.text}> After getting my PSW certification, I work as an intern in the well known Waterloo Nursing Home </Text>
      </View>
    </ScrollView>
  )
}

export default CaregiverDetails



