import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, Dimensions, Image } from 'react-native'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import FirstRoute from './CaregiverDetails'
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';
import styles from '../Styles/Caregiver/Caregiver'
import SecondRoute from './Experience'

const GET_CAREGIVERDETAILS = gql`
  query getCaregiverDetails($id: ID){
    getCaregiverDetails(id: $id){
      id
      avatar
      fullname
      location
      years_experience
      num_hired
      birthdate
      hourly_rate
      gender
      availability
      average_rating
      description
    }
  }
`;
const Caregiver = props => {
  const [ index, setIndex ] = useState(0)
  const [ routes, setRoutes ] = useState([
    {key: 'first', title: 'About'},
    {key: 'second', title: 'Experience'}
  ])

  const id = props.navigation.getParam('id');

  const {data, error, loading} = useQuery(GET_CAREGIVERDETAILS, {
    variables: {id}
  })

  if (data.getCaregiverDetails === undefined) {
    return (<Text> Loading...</Text>)
  }

  return (
    <ScrollView style={styles.MainContainer}>
    <Image style={styles.avatar}
          style={{ width: 'auto', height: 250 }}
          source={{ uri: data.getCaregiverDetails.avatar }}
        />

      <TabView
        navigationState={{
          index,
          routes
        }}
        renderScene={SceneMap({
          first: () => <FirstRoute data = {data} />,
          second: () => <SecondRoute data = {data} />,
        })}
        renderTabBar={props => (
          <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#244392' }}
          style={{ backgroundColor: '#E9F6FF', textTransform: 'capitalize'}}
          labelStyle={{color: '#244392'}}
          inactiveColor={'grey'}

          />
          )}
          onIndexChange={index => setIndex(index)}
          initialLayout={{ width: Dimensions.get('window').width }}
          />
    </ScrollView>
  )
}

export default Caregiver




