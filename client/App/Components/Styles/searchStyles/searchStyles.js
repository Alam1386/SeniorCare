import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#EEF5FB',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  infoContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
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
    fontSize: 13,

  },
  backgroundInfoText: {
    color: "#6F6F6F",
    fontSize: 12,
  },
  fullName: {
    color: "#151515",
    fontSize: 20,
    marginBottom: 5,
  },
  starRating: {
    paddingRight: 1,
    paddingLeft: 1,
  },
})

export default styles