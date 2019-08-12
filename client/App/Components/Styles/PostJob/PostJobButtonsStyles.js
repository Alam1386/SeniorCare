import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  buttonContainer: {
    flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		left: 0,
		bottom: 0,
  },
  splitButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 7,
  },
  serviceButtonContainer: {
    width: '50%',
  },
  serviceButton: {
    marginHorizontal: 5,
    borderRadius: 20,
  },
  startContinue: {
    width: '100%',
    borderRadius: 0,
    backgroundColor: "#314592",
	},
	buttonTitle: {
		color: '#4d4d4d',
	},
  back: {
		borderRadius: 0,
		backgroundColor: '#F0F0F0',
		padding: 16,
  },
  next: {
		borderRadius: 0,
    backgroundColor: "#314592",
		padding: 16,
  },
  containerBack: {
		width: '50%',
  },
  containerNext: {
		width: '50%',
  }
})