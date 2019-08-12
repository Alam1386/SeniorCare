const queryResolvers = require('./resolvers/query/queryResolvers')
const mutationResolvers = require('./resolvers/mutation/mutationResolvers')
const keyContactResolvers = require('./resolvers/query/keyContactResolvers')
const subscriptionResolvers = require('./resolvers/subscription/subscriptionResolvers')

module.exports = () => {
  return {
    ...queryResolvers,
    ...mutationResolvers,
    ...keyContactResolvers,
    ...subscriptionResolvers,
  }
}
