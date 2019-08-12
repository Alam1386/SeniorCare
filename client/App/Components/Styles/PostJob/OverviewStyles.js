import { StyleSheet } from 'react-native'

const mainAppBlue = '#244392'
const backgroundBlue = '#EEF5FB'
const yellowBackground = '#FFAD05'
const greyText = '#525252'
const greyBorder = '#E6E6E6'

export const overview = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},

	explanationContainer: {
		padding: 16,
	},	

	title: {
		fontSize: 24,
		marginTop: '8%',
	},

	description: {
		color: greyText,
		fontSize: 18,
		marginVertical: 16,
	},

	sectionsContainer: {
		marginVertical: '8%',
	},

	buttonIcon: {
		backgroundColor: yellowBackground
	},

	checkedIcon: {
		backgroundColor: '#fff'
	},

	overviewItem: {
		backgroundColor: backgroundBlue,
		borderBottomWidth: 1,
		borderBottomColor: greyBorder,
		marginVertical: 0,
		paddingVertical: 10,
		paddingHorizontal: '10%',
	},
})

export const overviewBottomButton = StyleSheet.create({
	button: {
		backgroundColor: mainAppBlue,
		borderRadius: 0,
		paddingVertical: 20,
	}
})