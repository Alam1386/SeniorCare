import React from 'react'
import { ScrollView, Text, View, Image, Button } from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../../Styles/Profile/Senior/SeniorDetails'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import calcAge from '../../utils/calcAge';

const SeniorDetails = (props) => {
  const seniorData = props.navigation.getParam('data');

  calcAge(seniorData)
  return (
    <ScrollView style={styles.MainContainer}>
      <TouchableOpacity style={styles.Senior}
      >
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={{ uri: seniorData.avatar }}
        />
        <View style={styles.SeniorRow}>
          <Text style={styles.p2}> {seniorData.fullname} </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.Title}> Senior Details</Text>
      <View style={styles.textWrapper}>
        <View style={styles.textColumn}>
          <Text style={styles.h3}> Gender </Text>
          <Text style={styles.h3}> Relationship </Text>
          <Text style={styles.h3}> Age </Text>
          <Text style={styles.h3}> Language </Text>
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.p}>{seniorData.gender}</Text>
          <Text style={styles.p}>{seniorData.relation}</Text>
          <Text style={styles.p}>{seniorData.Age}</Text>
          <Text style={styles.p}>{seniorData.language}</Text>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.h3}> Bio </Text>
      </View>
      <View style={styles.p2}>
        <Text>{seniorData.bio}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.h3}> Medical Condition </Text>
      </View>
      <View style={styles.p2}>
        <Text>{seniorData.medical_condition}</Text>
      </View>

      <Text style={styles.Title}> Basic Information</Text>
      <View style={styles.textWrapper}>
        <View style={styles.textColumn}>
          <Text style={styles.h3}> Start date </Text>
          <Text style={styles.h3}> End date </Text>
          <Text style={styles.h3}> Hourly rate </Text>
          <Text style={styles.h3}> Address </Text>
        </View>

      </View>
      <Text style={styles.Title}> Service Details</Text>
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
      </View>

      <Text style={styles.Title}> House Details</Text>
      <View style={styles.textWrapper}>
        <View style={styles.textColumn}>
          <Text style={styles.h3}> Smoking </Text>
          <Text style={styles.h3}> Pets </Text>
          <Text style={styles.h3}> Cannabis </Text>
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.p}>Yes</Text>
          <Text style={styles.p}>No</Text>
          <Text style={styles.p}>No</Text>
        </View>
      </View>

      <Text style={styles.Title}> Caregiver Prefernce</Text>
      <View style={styles.textWrapper}>
        <View style={styles.textColumn}>
          <Text style={styles.h3}> Availability </Text>
          <Text style={styles.h3}> Gender </Text>
          <Text style={styles.h3}> Driving License </Text>
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.p}>Live out</Text>
          <Text style={styles.p}>Female</Text>
          <Text style={styles.p}>No</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default SeniorDetails


