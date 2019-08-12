import { StyleSheet } from 'react-native'

const basicBlueColor = '#244397'
const multilineTextHeight = 300

export const chooseProfile = StyleSheet.create({
	mainContainer: {
		marginVertical: 10,
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
		marginBottom: 8,
		width: '90%',
	},

	button: {
		backgroundColor: 'white',
		borderColor: basicBlueColor,
		borderRadius: 30,
		borderWidth: 1,
		marginVertical: 5,
		width: '100%',
	},

	buttonText: {
		color: basicBlueColor
	}
})

export const createSeniorProfile = StyleSheet.create({
	mainContainer: {
		marginTop: 32,
		padding: 14,
	},

	question: {
		color: basicBlueColor,
		fontSize: 22,
		fontWeight: '500',
	},

	multilineTextBox: {
		backgroundColor: '#FFF',
		height: multilineTextHeight,
		margin: 4,
		padding: 8,
	},
	
	multilineTextArea: {
		height: multilineTextHeight,
		margin: 4,
		padding: 8,
	}
})