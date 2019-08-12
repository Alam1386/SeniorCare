import { StyleSheet } from 'react-native'

const mainBlue = '#244392'

const mainFontColor = '#525252'
const sectionFontColor = '#777'
const labelFontColor = '#333'

export const listItemStyles = StyleSheet.create({
	container: {
		marginBottom: -10,
	},

	title: {
		fontSize: 14,
		marginLeft: -4,
	},
})

export const submitJobOverview = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},

	jobTitle: {
		fontSize: 22,
		margin: 10,
		marginLeft: 16,
		marginBottom: 20,
	},

	sectionTitle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',

		padding: 10,
		paddingLeft: 16,
		paddingRight: 20,
	},

	sectionTitleText: {
		color: sectionFontColor,
		fontSize: 18,
	},

	postButton: {
		backgroundColor: mainBlue,
		borderRadius: 0,
		paddingVertical: 14
	},
})

export const sectionContent = StyleSheet.create({
	container: {
		padding: 16,
	},

	servicesContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',

		padding: 16,
	},

	dualColumn: {
		flex: 1,
		flexDirection: 'row',

		paddingVertical: 10,
	},

	dualColumnLabel: {
		color: labelFontColor,
		width: '50%',
	}, 

	dualColumnValue: {
		color: mainFontColor,
	},

	singleColumn: {
		paddingVertical: 8,
	},

	singleColumnLabel: {
		color: labelFontColor,
		marginBottom: 5,
		width: '50%',
	}, 

	singleColumnValue: {
		color: mainFontColor,
	},
})