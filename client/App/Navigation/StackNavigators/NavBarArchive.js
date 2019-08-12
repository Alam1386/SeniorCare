import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { Button, TouchableOpacity, View, StyleSheet, Text } from 'react-native'

const NavBarIcons = (props) => {


  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Archive")} style={styles.archive}>
        <Text style={{ color: '#3F7DFB' }}>Archives</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  overview: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  archive: {
    paddingRight: 15,
    paddingLeft: 15,
    color: '#3F7DFB',
  },

});


export default NavBarIcons