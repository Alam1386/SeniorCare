// import react
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

// packages imports
import { createStackNavigator } from 'react-navigation'

import SearchScreen from '../../Components/Search/SearchScreen'
import SearchFilter from '../../Components/Search/SearchFilter'
import styles from '../../Components/Styles/searchStyles/searchStyles';

import Caregiver from '../../Components/Caregiver/Caregiver'

export const SearchStack = createStackNavigator(
  {
    Search:
    {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight:
          <View style={{ padding: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchFilter")}
              style={{ flex: 1, flexDirection: 'row' }}
            >
              <View style={{ marginRight: 2, paddingTop: 1 }}>
                <Icon name="filter" size={17} color={'#3f7dfb'} />
              </View>
              <Text style={{ fontFamily: 'SFProText-Medium', color: '#3F7DFB', fontSize: 17 }}>Filter</Text>
            </TouchableOpacity>
          </View>
      })
    },
    SearchFilter: {
      screen: SearchFilter,
      navigationOptions: {
        title: 'Filter'
      },
    },
    Caregiver: {
      screen: Caregiver,
      navigationOptions: {
        title: 'Caregiver'
      },
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Find',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Find',
    },
  }
)