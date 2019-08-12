import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { Button, TouchableOpacity, View, StyleSheet, Text } from 'react-native'

const NavBarIcons = (props) => {


  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity
        style={styles.overview}
        onPress={() => props.navigation.navigate("Overview")}>
        <Text style={{ color: '#3F7DFB' }}>New Job</Text>
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
  },

});


export default NavBarIcons