import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eef5fb'
  },
  Senior: {
    borderWidth: 1,
    borderBottomColor: '#CCCCCC',
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  SeniorRow: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
  },
  SeniorName: {
    fontSize: 16,
    paddingBottom: 5,
  },
  Relation: {
    fontSize: 12,
    color: '#A3A3A3',
    paddingLeft: 5,
  },
  SeniorButtonIcon: {
    fontSize: 16,
    padding: 15,
    color: '#A3A3A3',
  },
  SeniorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  SeniorPlusIcon: {
    fontSize: 16,
    padding: 15,
    color: '#3F7DFB'
  },
})

export default styles