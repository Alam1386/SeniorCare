import gql from 'graphql-tag'

export const GET_KEY_CONTACT_CONVO = gql`
  query getKeyContactConvosQuery ($caregiver_id: ID) {
    getKeyContactConvos(caregiver_id: $caregiver_id) {
      email
      fullname
      caregiver_id
      conversation_id
      key_contact_id
			avatar
    }
  }
`

export const GET_CAREGIVER_CONVO = gql`
  query getCaregiverConvoQuery ($key_contact_id: ID) {
    getCaregiverConvos(key_contact_id: $key_contact_id) {
      email
      fullname
      caregiver_id
      conversation_id
      key_contact_id
			avatar
    }
  }
`

export const GET_MESSAGES = gql`
  query getMessagesQuery($conversation_id:ID) {
    getMessages (conversation_id: $conversation_id){
      id
      conversation_id
      from_user
      date_created
      content
    }
  }
`

export const GET_KEY_CONTACT = gql`
	query getKeyContactProfileVars($id: ID!) {
		getKeyContactProfile(id: $id) {
			id
			fullname
			avatar
		}
	}
`

export const GET_BASIC_JOB_POSTING = gql`
	query {
		getJobPosts {
			id
			date_created
			key_contact_id
			getKeyContact {
				id
				fullname
				avatar
			}
			getBasicInformation {
				title
				city
				hourly_rate
			}
			getServiceDetails {
				job_id
				service_id
				getService {
					id
					title
				}
			}
		}
	}
`

export const GET_FULL_JOB_POSTING = gql`
	query getJobVars($id: ID!) {
		getJobPost(id: $id) {
			id
			key_contact_id
			date_created
			getKeyContact {
				id
				fullname
				avatar
			}
			getBasicInformation {
				title
				start_date
				end_date
				address
				city
				province
				postal_code
				hourly_rate
			}
			getServiceDetails {
				job_id
				service_id
				getService {
					id
					title
				}
			}
			getSeniorDetails {
				fullname
				gender
				birthdate
				relation
				bio
				medical_condition
				language
			}
			getHouseDetails {
				cig_smoking
				pets
				cannabis
			}
			getCaregiverPreferences {
				availability
				gender_pref
				req_drivers_license
			}
		}
	}
`

export const GET_APPLIED_JOBS = gql`
	query getJobsVars($id: ID!) {
		getCaregiverJobApplications(id: $id) {
			id
			jobpost_id
			caregiver_id
			keycontact_id
			date_created
			getJobPost {
				id
				key_contact_id
				date_created
				getKeyContact {
					id
					fullname
					avatar
				}
				getBasicInformation {
					title
					start_date
					end_date
					address
					city
					province
					postal_code
					hourly_rate
				}
				getServiceDetails {
					job_id
					service_id
					getService {
						id
						title
					}
				}
			}
		}
	}
`