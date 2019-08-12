import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eef5fb'
  },
  Profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  ProfileName: {
    fontSize: 20,
    paddingBottom: 15,
    fontWeight: '600',
  },
  ProfileButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderBottomColor: '#eee',
    borderColor: '#fff',
    borderStyle: 'solid',
    marginRight: 20,
    marginLeft: 20,
  },
  ProfileButtonNoBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#fff',
    borderStyle: 'solid',
    marginRight: 20,
    marginLeft: 20,
  },
  ProfileButtonForgot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderBottomColor: '#eee',
    borderColor: '#fff',
    borderStyle: 'solid',
    marginRight: 20,
    marginLeft: 20,
  },
  ProfileButtonText: {
    fontSize: 16,
    padding: 15,
  },
  ProfileButtonIcon: {
    fontSize: 16,
    padding: 15,
    color: '#3F7DFB'
  },
  Camera: {
    borderWidth: 1,
    borderColor: '#3F7DFB',
    backgroundColor: '#FFF',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: -40,
    left: 150,
  },
})

export default styles