import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#E9F6FF'
  },
  MainView:{
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    backgroundColor: "#FFFFFF",
  },
  AppText:{
    fontFamily: 'SFProText-Bold',
    fontSize: 14,
    color: 'blue',
    marginLeft: '5%',
    marginTop: '1%'
  },
  DateText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 14,
    color: '#98A6B5',
  }, 
  JobText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 20,
    color: 'black',
    flex: 1,
    marginBottom: '10%'
  },  
  JobInfo:{
    flex: 1,
    flexDirection: 'row',
  },
  Archived:{
    fontSize: 45, 
  },
  ActionSheet:{
    position: 'absolute',
    left:     290,
    top:      -20,
    fontSize:30
  }, 
  HourlyRate:{
    fontSize: 16,
    position: 'absolute',
    left:     230,
    top:     0,
  }, 
  }
)

export default styles