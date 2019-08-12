import { StyleSheet } from 'react-native'

const basicBlueColor = '#244397'
const multilineTextHeight = 300

export const basicInformationStyles = StyleSheet.create({
	mainContainer: {
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
	},

	titleContainer: {
		flex: 1,
		alignItems: 'center',

		marginVertical: 15,
		width: '100%',
	},

	title: {
		color: basicBlueColor,
		fontSize: 26,
		width: '90%',
	},

	buttonContainer: {
		flex: 1,
		alignItems: 'center',

		width: '100%',
	},

	buttonOuter: {
		width: '90%',
	},

	button: {
		backgroundColor: 'white',
		borderColor: basicBlueColor,
		borderRadius: 30,
		borderWidth: 1,
		fontFamily: 'SFProText-Bold',
		marginVertical: 5,
		width: '100%',
	},

	buttonText: {
		color: basicBlueColor
	},

	descriptorContainer: {
		marginBottom: 24,
	},

	addressSectionContainer: {
		marginBottom: 24,
	},
})

export const createSeniorProfile = StyleSheet.create({
	mainContainer: {
		marginVertical: 32,
	},

	question: {
		color: basicBlueColor,
		fontSize: 22,
		fontWeight: '500',
	},

	multilineTextBox: {
		backgroundColor: '#FFF',
		height: multilineTextHeight,
	},

	multilineTextArea: {
		height: multilineTextHeight,
	}
})