import gql from 'graphql-tag'


export const ADD_CONVERSATION_MUTATION = gql`
  mutation addConversationMutation($caregiver_id: ID, $key_contact_id: ID) {
    addConversation(caregiver_id: $caregiver_id, key_contact_id: $key_contact_id) {
      id
    }
  }
`

export const ADD_MESSAGES = gql`
	mutation addMessageMutation($content: String, $conversation_id: ID, $from_user: ID){
		addMessages(content: $content, conversation_id: $conversation_id, from_user: $from_user) {
			message
		}
	}
`

export const SUBMIT_JOB_POST = gql`
	mutation addJobPostVars($input: NewJobObject!) {
		addJobRequest(input: $input) {
			message
		}
	}
`

export const ADD_CARGIVER_DETAILS = gql`
  mutation addCaregiverDetailsMutation($input: CaregiverDetails) {
    addCaregiverDetails(input: $input) {
      message
    }
  }
`
export const EDIT_KEY_CONTACT_DETAILS = gql`
  mutation editKeyContactVars($input: KeyContactDetails!) {
    addKeyContactDetails(input: $input) {
      message
    }
  }
`

export const APPLY_JOB = gql`
	mutation applyJobVars($input: JobApplicationObject!) {
		applyJob(input: $input) {
			message
		}
	}
`