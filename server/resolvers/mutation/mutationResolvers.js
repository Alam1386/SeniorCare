module.exports = {
	Mutation: {
		async placeholder(parent, { input }, { dataSources }) {
			return await dataSources.database.mutationPlaceholder('placeholder')
		},
		async placeholderApi(parent, { input }, { dataSources }) {
			return await dataSources.placeholderApi.mutationPlaceholder('placeholder')
		},
		async keyContactSignup(parent, { input }, { dataSources }) {
			return await dataSources.userDatabase.keyContactSignup(input)
		},
		async deleteit(parent, input, { dataSources }) {
			return dataSources.jobsDatabase.deleteit(input)
		},
		async duplicateRepost(parent, input, { dataSources }) {
			return dataSources.jobsDatabase.duplicateRepost(input)
		},
		async caregiverSignup(parent, { input }, { dataSources }) {
			return await dataSources.userDatabase.caregiverSignup(input)
		},
		async addCaregiverDetails(parent, { input }, { dataSources }){
			return await dataSources.caregiverDatabase.addCaregiverDetails(input)
		},
		async addKeyContactDetails(parent, { input }, { dataSources }){
			return await dataSources.keyContactDatabase.addKeyContactDetails(input)
		},
		async addMessages(parent, input, { dataSources }) {
			return await dataSources.chatDatabase.mutationAddMessage(input)
		},
		async addConversation(parent, input, { dataSources }) {
			return await dataSources.conversationDatabase.mutationAddConversation(input)
		},
		// async Delete(parent, { input }, { dataSources }) {
		// 	return dataSources.mutationDelete(input)
		// },
		async addJobRequest(parent, { input }, { dataSources }) {
			const jobId = await dataSources.jobsDatabase.addJobRequest(input)
			await dataSources.seniorDatabase.addSenior(input)
			await dataSources.servicesDatabase.addJobServices({ jobId, ...input })
			return {
				message: 'success'
			}
		},
		async changeKeyContactAvatar(parent, { input }, { dataSources }) {
			return await dataSources.userDatabase.changeKeyContactAvatar(input)
		},
		async changeCaregiverAvatar(parent, { input }, { dataSources }) {
			return await dataSources.userDatabase.changeCaregiverAvatar(input)
		},

		async applyJob(parent, { input }, { dataSources }) {
			return await dataSources.jobsDatabase.applyJob(input)
		},
	}
}




