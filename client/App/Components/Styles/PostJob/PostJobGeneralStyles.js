import { StyleSheet } from 'react-native'

const mainBlue = '#244397'
const darkGreyText = '#525252'
const backButtonGrey = '#F0F0F0'

export const general = StyleSheet.create({
	mainContainer: {
		padding: 14,
	},

	sectionContainer: {
		marginBottom: 24,
	},

	question: {
		color: mainBlue,
		fontSize: 22,
		fontWeight: '500',
		padding: 8,
		paddingLeft: 0,
	},

	inputContainer: {
		paddingHorizontal: 0,
	},

	title: {
		marginBottom: 10,
		marginLeft: 15,
		marginTop: 25
	},

	formInputTitle: {
		marginLeft: 10,
		marginTop: 20
	},

	rate: {
		textAlign: 'center',
		fontSize: 18
	},
})

export const postJobButtons = StyleSheet.create({
  mainButtonContainer: {
    flex: 1,
		flexDirection: 'row',
		marginHorizontal: -4,
		marginVertical: 7,
  },

  buttonContainer: {
		width: '50%',
	},

	selectedTitle: {
		color: mainBlue
	},

	deselectedTitle: {
		color: '#FFF'
	},
	
  selectedButton: {
		marginHorizontal: 5,
		backgroundColor: mainBlue,
		borderWidth: 0.5,
		borderColor: mainBlue,
    borderRadius: 20,
	},
	
	deselectedButton: {
		marginHorizontal: 5,
		backgroundColor: '#FFF',
    borderRadius: 20,
  },
})