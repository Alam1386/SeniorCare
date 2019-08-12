import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eef5fb',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    marginTop: 100,
  },
  title: {
    fontSize: 23,
    padding: 15,
    paddingBottom: 15,
    fontWeight: '500',
    width: 350,
    textAlign: 'center',
    color: '#244392',
  },
  button: {
    borderWidth: 1,
    borderRadius: 150,
    width: 300,
    backgroundColor: '#244392',
    borderColor: '#244392',
    borderStyle: 'solid',
    padding: 10,
    margin: 15,
    justifyContent: 'center',
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  
})

export default styles