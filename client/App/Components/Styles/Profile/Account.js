import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  Title: {
    fontSize: 16,
    color: '#525252',
    backgroundColor: '#E9F6FF',
    padding: 15,
    fontWeight: 'bold',

  },
  phoneNumber: {
    fontSize: 16,
    color: '#525252',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  email: {
    fontSize: 16,
    color: '#525252',
    paddingLeft: 15,
    paddingBottom: 15,
  },
  membership: {
    fontSize: 16,
    color: '#525252',
    padding: 15,
  },
  legal: {
    fontSize: 16,
    color: '#525252',
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 7,
  },
  logout: {
    fontSize: 16,
    padding: 15,
    color: '#525252',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  arrowIcon: {
    fontSize: 16,
    padding: 15,
    color: '#A3A3A3'
  },
  accountButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProfileButtonForgot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    borderBottomColor: '#eee',
    borderColor: '#fff',
    borderStyle: 'solid',
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