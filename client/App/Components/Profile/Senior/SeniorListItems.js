import React from 'react'
import { Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import styles from '../../Styles/Profile/Senior/Senior'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SeniorListItems = props => {

  const {d, i, handleSeniorDetails} = props

  return (
    <TouchableOpacity key={i} style={styles.Senior}
      onPress={() => handleSeniorDetails(d)}
      id={d.id}
    >
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: d.avatar } }}
        title={<Text style={styles.SeniorName}> {d.fullname}, {d.Age} </Text>}
        subtitle={
          <Text style={styles.Relation}>{d.relation} </Text>
        }
        rightIcon={{ name: 'chevron-right' }}
      />
    </TouchableOpacity>
  )
}

export default SeniorListItems


