import { StyleSheet } from 'react-native'

const lightPurple = '#EEF5FB'
const mainBlue = '#244392'
const mainGreyText = '#525252'
const lightGreyText = '#A3A3A3'

export const mainOverviewStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
	},

	applyButton: {
		backgroundColor: mainBlue,
		borderRadius: 0,
		paddingVertical: 14
	},
})

export const jobPostListItemStyles = StyleSheet.create({
	container: {
		marginTop: -10,
		marginLeft: -12,
	},

	title: {
		fontSize: 17,
		marginLeft: -4,
	},

	subtitle: {
		color: '#707070',
		fontSize: 10,
		marginLeft: -4,
	},
})

export const jobPostStyles = StyleSheet.create({
	mainContainer: {
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

	jobTitle: {
		fontSize: 20,
		fontWeight: '500',
	},

	basicInfoContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'nowrap',
	},

	basicInfoItemContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'nowrap',

		marginVertical: 10,
	},

	basicInfoItemText: {
		color: mainGreyText,
		fontSize: 15,
		marginLeft: 6,
	},

	servicesContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},

	serviceBubble: {
		backgroundColor: lightPurple,
		borderRadius: 10,
		margin: 8,
		marginLeft: 0,
		paddingHorizontal: 16,
		paddingVertical: 2,
	},

	serviceText: {
		color: mainBlue,
		textTransform: 'capitalize',
	},
})