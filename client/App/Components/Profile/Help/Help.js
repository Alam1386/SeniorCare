import React from 'react'
import { ScrollView, Text, View, Image, WebView } from 'react-native'
import { Button } from '@ant-design/react-native';
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Help = (props) =>{

  return(
    <WebView
    source={{uri: 'https://www.seniorcareconnect.ca/termsofuse'}}
    style={{marginTop: 20}}
  />
  )
}
export default Help