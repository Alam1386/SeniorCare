import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#EEF5FB',
  },
  genderContainer: {
    margin: 10,
    marginBottom: 10,
  },
  availabilityContainer: {
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: '#244397',
    borderRadius: 25,
    marginRight: 5,
  },
  buttonTextStyle: {
    color: '#244397',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterTitleText: {
    fontSize: 16,
    color: "#244397",
    marginLeft: 10,
  },
  sliderDescText: {
    fontSize: 12,
    color: "#525252",
    marginLeft: 10,
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginVertical: 15,
  },
})

export default styles