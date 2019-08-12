import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#E9F6FF',
  },
  MainView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#FFFFFF",
  },
  ExempleText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 22,
    color: '#98A6B5'
  },
  ExempleButton: {
    backgroundColor: '#569CF2',
  },
  bluebox: {
    backgroundColor: '#244397',
    position: 'absolute',
    // left:     100,
    // top:      0,
  },
  Card: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "white",
    marginLeft: 15,
    width: 240,
    marginRight: 8,
    height: 140,
  },
  CutCard: {
    flex: 1,
    flexDirection: 'row',
    shadowOffset: { width: 1, height: 1, },
    shadowColor: '#CCCCCC',
    shadowOpacity: 1.0,
  },
  Applicants: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#244397",
    height: 140,
    marginLeft: 5,
    padding: 10,
    marginRight: 0,
    justifyContent: "center",
    alignItems: "center"

  },
  AppText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 14,
    color: 'blue',
    marginLeft: -5,
  },
  DateText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 12,
    color: '#98A6B5',
    lineHeight: 20
  },
  JobText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 20,
    color: '#151515',
    marginBottom: '10%',
  },
  JobText2: {
    fontFamily: 'SFProText-Bold',
    fontSize: 15,
    color: 'white',
    marginTop: "auto",
    fontWeight: '600',
    paddingBottom: 20
  },
  JobInfo: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
  },
})



export default styles