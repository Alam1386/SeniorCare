import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  scene: {
    flex: 1,
  },
  experienceContainer: {
    flex: 1,
    margin: 10,
  },
  infoContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderBottomColor: '#6F6F6F',
    borderColor: '#fff',
    paddingBottom: 5,
  },
  hr: {
    borderWidth: 1,
    borderBottomColor: '#6F6F6F',
    borderColor: '#fff',
    paddingBottom: 5,
    paddingBottom: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    color: '#151515',
    paddingBottom: 5,
    fontWeight: '500',
    paddingTop: 15,
  },
  ratingLocationContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  experienceRateContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: "space-between",
  },
  ratingText: {
    color: "#3F7DFB",
  },
  locationText: {
    color: "#6F6F6F",
    fontSize: 14,
  },
  backgroundInfoText: {
    color: "#6F6F6F",
    fontSize: 12,
  },
  iconCover: {
    display: 'flex',
    flexDirection: 'row',
  },
  starRating: {
    paddingRight: 3,
    paddingLeft: 1,
  },
  text: {
    fontSize: 16,
    color: '#525252',
    textAlign: 'justify',
    margin: 10,
  },
  aboutMe: {
    fontSize: 18,
    color: '#525252',
    margin: 10,
    textAlign: 'left',
    fontWeight: '600'
  },
  workExTitle: {
    fontSize: 18,
    color: '#151515',
    paddingBottom: 5,
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 5,
  },
  button: {
    backgroundColor: '#0000',
    width: 300,
    height: 200,
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
    fontSize: 14,
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