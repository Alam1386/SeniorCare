import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const height = Dimensions.get("window").height

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#EEF5FB'
  },
  InputContainer: {
    position: "absolute",
    borderTopWidth: 0,
    borderColor: 'white',
  },
  MessagesContainer: {
    padding: 20,
    // overflow-y: scroll;
    // height: height - 20,
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  conversationContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderBottomColor: "transparent",
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
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
  fullName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  arrowIcon: {
    marginRight: "auto",
  },
  fromText: {
    fontSize: 16,
  },
  toMessageBubble: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "lightgrey",
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    color: "black",
  },
  fromMessageBubble: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#B1D5F6",
    padding: 10,
    marginBottom: 10,
    color: "black",
  },
  fromMessages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  toMessages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
})

export default styles