const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  type Query {
    getCaregiver(input: FilterInput!): [QueryGetCaregiver]
    getCaregiverDetails(id: ID) : QueryGetCaregiver
    getCaregiverProfile(id: ID): QueryGetCaregiver
		placeholderApi: QueryPlaceholder
		testDatabase: QueryPlaceholder
    getKeyContactProfile(id: ID!): KeyContact
    getSeniors: [QueryGetSenior]
    getSenior(id: ID!): QueryGetSenior
		ArchivedJobs(id:ID): [QueryArchiveJobs]
    getMessages(conversation_id:ID):[Messages]
    getConversation(id:ID): ConversationRoom
    getCaregiverConvos(key_contact_id: ID): [ConversationRoom]
    getKeyContactConvos(caregiver_id: ID): [ConversationRoom]
		getJobPosts: [JobPost]
		getJobPost(id: ID!): JobPost
		getKeyContactJobPosts(id: ID!): [JobPost]
		getCaregiverJobApplications(id: ID!): [Applications]
  }

	type Applicant {
		id: ID
		email: String
		phone_number: String
		fullname: String
		avatar: String
		date_created: Date
		caregiver_id: ID
	}

	type Applications {
		id: ID,
		jobpost_id: ID,
		caregiver_id: ID,
		keycontact_id: ID,
		date_created: Date,
		getJobPost: JobPost
	}

	type JobPost {
		id: ID
		key_contact_id: ID
		date_created: Date
    title: String
    start_date: Date
		hourly_rate: Int
		applicants: [Applicant]
		getKeyContact: KeyContact
		getBasicInformation: BasicInformation
		getServiceDetails: [ServiceDetails]
		getSeniorDetails: SeniorDetails
		getHouseDetails: HouseDetails
		getCaregiverPreferences: CaregiverPreferences
	}

  type ConversationRoom {
    email:String
    caregiver_id: ID
    fullname: String
    conversation_id: ID
    key_contact_id: ID
		avatar: String
  }

  type QueryPlaceholder{
  	id: ID
  }

  type KeyContact {
    id: ID
    fullname: String
    avatar: String
    phone_number: String
    email: String
    getSeniors: [QueryGetSenior]
  }

  type QueryGetSenior {
		id: ID
		fullname: String
		date_created: Date
		birthdate: String
		gender: String
		relation: String
		language: String
    medical_condition: String
    bio: String
    avatar: String
	}
  input FilterInput {
    gender: String
    availability: String
    hourly_rate: Int
    years_experience: Int
  }

	type QueryGetCaregiver {
		id: ID
		fullname: String
		location: String
		years_experience: Int
    email: String
    phone_number: String
		num_hired: Int
		birthdate: String
		hourly_rate: Int
    gender: String
    availability: String
    average_rating: Float
    avatar: String
    description: String
	}

	type QueryArchiveJobs {
		id: ID
		key_contact_id: ID
		date_created: Date
		title: String
		start_date: Date
		end_date: String
		address: String
		city:String
    province:String
    postal_code:String
    availability:String
    hourly_rate:Int
    gender_pref:String
    req_drivers_license: Boolean,
    cig_smoking: Boolean,
    pets: Boolean,
    cannabis: Boolean

	}



	type BasicInformation {
		title: String
		start_date: Date
		end_date: Date
		address: String
		city: String
		province: String
		postal_code: String
		hourly_rate: Int
	}

	type ServiceDetails {
		job_id: ID!
		service_id: ID!
		getService: Service
	}

	type Service {
		id: ID!
		title: String!
	}

	type SeniorDetails {
		fullname: String!
		gender: Gender
		birthdate: Date
		relation: String
		bio: String
		medical_condition: String
		language: String
	}

	type HouseDetails {
		cig_smoking: Boolean
		pets: Boolean
		cannabis: Boolean
	}

	type CaregiverPreferences {
		availability: LiveInAvailability
		gender_pref: Gender
		req_drivers_license: Boolean
	}

  type Messages {
    id: ID!
    conversation_id: ID!
    from_user: ID!
    date_created: Date
    content: String
  }

   type Subscription{
    messageAdded(conversation_id: ID!): Messages
  }



	type Mutation {
		placeholder: MutationPlaceholder
		placeholderApi: MutationPlaceholder
		keyContactSignup(input: SignupObject!): TokenResponse
		caregiverSignup(input: SignupObject!): TokenResponse
		login(input: LoginObject!): LoginResponse!
		deleteit(id:ID!):ID!
		duplicateRepost(id:ID!):QueryArchiveJobs!
    addMessages(content: String, conversation_id: ID, from_user: ID): addMessagesResponse!
    addConversation(caregiver_id: ID, key_contact_id: ID): addConversationResponse!
		addJobRequest(input: NewJobObject!): MessageResponse!
    addCaregiverDetails(input: CaregiverDetails): addCaregiverDetailsResponse!
    addKeyContactDetails(input: KeyContactDetails): addKeyContactDetailsResponse!
		changeKeyContactAvatar(input: ProfileDetails): changeAvatarResponse!
		changeCaregiverAvatar(input: ProfileDetails): changeAvatarResponse!
		applyJob(input: JobApplicationObject!): MessageResponse
	}

  input KeyContactDetails {
    id: ID,
    fullname: String,
    phone_number: String,
    location: String
  }

  type addKeyContactDetailsResponse {
    message: String
  }

  input CaregiverDetails{
    id: ID,
    location: String,
    birthdate: Date,
    gender: String,
    years_experience: Int,
    description: String,
    availability: String,
    average_rating: Float,
    hourly_rate: Int
  }

  type addCaregiverDetailsResponse {
    message: String
  }

  type addConversationResponse {
    id: ID
  }

  type addMessagesResponse {
    message: String
  }

	type MessageResponse {
		message: String
	}

	input SignupObject{
		id: ID!,
	  fullname: String,
		email: String,
		phone_number:String,
		avatar: String,
	}

  input LoginObject {
    email: String!,
    password: String!,
  }

	input NewJobObject {
		key_contact_id: ID
		basicInformation: BasicInformationObject
		serviceDetails: ServiceDetailsObject
		seniorDetails: SeniorDetailsObject
		houseDetails: HouseDetailsObject
		caregiverPreferences: CaregiverPreferencesObject
	}

	input BasicInformationObject {
		title: String
		start_date: Date
		end_date: Date
		address: String
		city: String
		province: String
		postal_code: String
		hourly_rate: Int
	}

	input ServiceDetailsObject {
		appointments: Boolean
		bathing: Boolean
		companionship: Boolean
		dressing: Boolean
		driving: Boolean
		errands: Boolean
		feeding: Boolean
		grooming: Boolean
		housekeeping: Boolean
		laundry: Boolean
		meal_prep: Boolean
		mobility: Boolean
		shopping: Boolean
	}

	input SeniorDetailsObject {
		fullname: String!
		gender: Gender
		birthdate: Date
		relation: String
		bio: String
		medical_condition: String
		language: String
	}

	input HouseDetailsObject {
		cig_smoking: Boolean
		pets: Boolean
		cannabis: Boolean
	}

	input CaregiverPreferencesObject {
		availability: LiveInAvailability
		gender_pref: Gender
		req_drivers_license: Boolean
	}

	enum LiveInAvailability {
		LIVEIN
		LIVEOUT
	}

	enum Gender {
		FEMALE
		MALE
		OTHER
		NOPREFERENCE
	}

	input JobApplicationObject {
		jobpost_id: ID
		caregiver_id: ID
		keycontact_id: ID
	}

  type LoginResponse {
    message: String
  }

	type MutationPlaceholder {
		id: ID
	}

	type TokenResponse {
  	token: String
	}

	type DeleteResponse{
		message: String
	}

	type duplicateRepostMessage{
		message: String
	}

	input ProfileDetails {
		id: ID!
		avatar: String!
	}

	type changeAvatarResponse {
		avatar: String
	}

`


