module.exports = {
  Query: {
		async getCaregiver(parent, { input }, { dataSources }){
			return await dataSources.caregiverDatabase.queryCaregiver(input)
    }, 
    async getCaregiverDetails(parent, input, { dataSources }) {
			return await dataSources.caregiverDatabase.getCaregiverDetails(input.id)
    },
    async getCaregiverProfile(parent, input, { dataSources }) {
			return await dataSources.caregiverDatabase.getCaregiverProfile(input)
		},
		async getConversation(parent, input, { dataSources }){
			return await dataSources.conversationDatabase.queryGetConversation(input)
		},
		async getCaregiverConvos(parent, input, { dataSources }){
			return await dataSources.conversationDatabase.queryGetCaregiverConvos(input)
		},
		async getKeyContactConvos(parent, input, { dataSources }){
			return await dataSources.conversationDatabase.queryGetKeyContactConvos(input)
		},
		async getMessages(parent, input, { dataSources }){
			return await dataSources.chatDatabase.queryGetMessages(input)
		},
		async placeholderApi(parent, { input }, { dataSources }){
			return await dataSources.placeholderApi.queryPlaceholder('placeholder')
		},
		async testDatabase(parent, { input }, { dataSources }) {
			return await dataSources.database.queryPlaceholder('placeholder')
		},
		async getKeyContactProfile(parent, input, { dataSources }) {
			return await dataSources.keyContactDatabase.getKeyContactProfile(input)
		},

		async getSeniors(parent, { input }, { dataSources }) {
			return await dataSources.seniorDatabase.getSenior()
		},

    async getSenior(parent, input, { dataSources }) {
			return await dataSources.seniorDatabase.getSenior(input.id)
    },
    
		async ArchivedJobs(parent,  input, { dataSources }) {
			return await dataSources.jobsDatabase.queryArchiveJobs(input)
		},

		async getJobPosts(parent, { input }, { dataSources }) {
			return await dataSources.jobsDatabase.getJobPosts()
		},
    
		async getKeyContactJobPosts(parent, input, { dataSources }) {			
			return await dataSources.jobsDatabase.getKeyContactJobPosts(input)			
		},

		async getJobPost(parent, input, { dataSources }) {
			return await dataSources.jobsDatabase.getJobPost(input)
		},

		async getCaregiverJobApplications(parent, input, { dataSources }) {
			return await dataSources.jobsDatabase.getCaregiverJobApplications(input)
		},
	},

	JobPost: {
		async getKeyContact(parent, { input }, { dataSources }) {
			return await dataSources.keyContactDatabase.getKeyContactProfile({id: parent.key_contact_id})
		},

		async applicants(parent, { input }, { dataSources }) {
			return await dataSources.jobsDatabase.getApplicants(parent)
		},

		async getBasicInformation(parent, { input }, { dataSources }) {
			return await dataSources.jobsDatabase.getBasicInformation(parent)
		},

		async getServiceDetails(parent, { input }, { dataSources }) {
			return await dataSources.servicesDatabase.getServiceDetails(parent)
		},

		async getSeniorDetails(parent, { input }, { dataSources }) {
			return await dataSources.seniorDatabase.getSeniorDetails(parent)
		},

		async getHouseDetails(parent, { input }, { dataSources }) {
			return await dataSources.jobsDatabase.getHouseDetails(parent)
		},

		async getCaregiverPreferences(parent, { input }, { dataSources }) {
			return await dataSources.jobsDatabase.getCaregiverPreferences(parent)
		},
	},

	ServiceDetails: {
		async getService(parent, { input }, { dataSources }) {
			return await dataSources.servicesDatabase.getService(parent)
		},
	},

	Applications: {
		async getJobPost(parent, { input }, { dataSources }) {
			const id = parent.jobpost_id 
			return await dataSources.jobsDatabase.getJobPost({id: id})
		}
	}


}
