const pubsub = require("../../utils/subscriptions/pubsub")
const { withFilter } = require("graphql-subscriptions")
module.exports = {
  Subscription: {
    messageAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(["messageAdded"]),
          (payload, variables) => {
               return Number(payload.messageAdded.conversation_id) == Number(variables.conversation_id)
          }
        )
    }
  }
}