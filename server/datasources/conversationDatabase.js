const { DataSource } = require('apollo-datasource')
const pubsub = require('../utils/subscriptions/pubsub')


class ConversationDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async mutationAddConversation(input) {

    const key_contact_id = input.key_contact_id
    const caregiver_id = input.caregiver_id

    const checkConversation = {
      text: "SELECT * FROM seniorcare.conversations WHERE seniorcare.conversations.key_contact_id = $1 AND seniorcare.conversations.caregiver_id = $2",
      values: [key_contact_id, caregiver_id]
    }

    const results = await this.context.postgres.query(checkConversation)

    // check if conversation exists. If it does return conversation id, if not then create a conversation
    if (results.rows.length > 0) {
      console.log("old convo")
      const conversation_id = results.rows[0].id
      return {
        id: conversation_id
      }
    }
    else {

      const newConversation = {
        text: 'INSERT INTO seniorcare.conversations (key_contact_id, caregiver_id) VALUES ($1, $2) RETURNING *',
        values: [key_contact_id, caregiver_id],
      }

      const result = await this.context.postgres.query(newConversation)

      const new_conversation_id = result.rows[0].id

      return {
        id: new_conversation_id
      }
    }
  }
  async queryGetConversation(input) {

    let myConversation = input.id;

    const conversation = {
      text: "SELECT * FROM seniorcare.conversations WHERE id = $1",
      values: [myConversation]
    };

    const result = await this.context.postgres.query(conversation);

    return result.rows[0]
  }
  async queryGetCaregiverConvos(input) {
    const key_contact_id = input.key_contact_id

    const caregiverConversations = {
      text: `SELECT email, fullname, avatar, seniorcare.conversations.caregiver_id, seniorcare.conversations.key_contact_id, seniorcare.conversations.id AS conversation_id
             FROM seniorcare.caregiver
             INNER JOIN seniorcare.conversations
             ON seniorcare.caregiver.id = seniorcare.conversations.caregiver_id
             WHERE seniorcare.conversations.key_contact_id = $1`,
      values: [key_contact_id]
    };

    const result = await this.context.postgres.query(caregiverConversations);

    return result.rows
  }
  async queryGetKeyContactConvos(input) {
    const user_id = input.caregiver_id

    const keyContactConversations = {
      text: `SELECT email, fullname, avatar, seniorcare.conversations.caregiver_id, seniorcare.conversations.key_contact_id, seniorcare.conversations.id AS conversation_id
             FROM seniorcare.key_contact
             INNER JOIN seniorcare.conversations
             ON seniorcare.key_contact.id = seniorcare.conversations.key_contact_id
             WHERE seniorcare.conversations.caregiver_id = $1`,
      values: [user_id]
    };

    const result = await this.context.postgres.query(keyContactConversations);

    return result.rows
  }
}

module.exports = ConversationDatabase