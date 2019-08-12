import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  
  Title: {
    fontSize: 20,
    color: '#525252',
    backgroundColor: '#E9F6FF',
    padding: 15,
    marginTop: 15,
  },
  Senior: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  textWrapper: {
    fontSize: 16,
    color: '#525252',
    padding: 15,
    flex: 1,
    flexDirection: 'row',
  },
  textColumn:{
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexBasis: '50%',
  },
  
  h3: {
    fontSize: 18,
    color: '#151515',
    padding: 5,
  },
  p: {
    fontSize: 16,
    color: '#525252',
    padding: 5,
  },
  p2: {
    fontSize: 16,
    color: '#525252',
    paddingLeft: 25,
    paddingRight: 15,
    lineHeight: 15,
  },
  service: {
    borderColor: '#E9F6FF',
    backgroundColor: '#E9F6FF',
    borderWidth: 1,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
  },
  serviceText: {
    fontSize: 16,
    color: '#244392',
    textAlign: 'center',
    margin: 5,
  },
  serviceWrapper: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
})

export default styles