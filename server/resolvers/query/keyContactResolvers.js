module.exports = {
  KeyContact: {
    async getSeniors(parent, { input }, { dataSources}) {
      
      return await dataSources.seniorDatabase.getSeniors(parent)
    }
  }
}