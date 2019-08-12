import gql from 'graphql-tag'


export const MESSAGE_SUBSCRIPTION = gql`
  subscription onMessageAdded($conversation_id: ID!) {
    messageAdded(conversation_id: $conversation_id) {
      id
      from_user
      content
      date_created
      conversation_id
    }
  }
`;