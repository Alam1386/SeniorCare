const { DataSource } = require('apollo-datasource')

const authenticate = require('../utils/DSHelperFunctions/authenticate')

class KeyContactDatabase extends DataSource {
  constructor(props) {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async getKeyContactProfile(input) {
    try {

      let user_id = input.id

      // !input.user_id ? user_id = authenticate(app, req) : user_id = input.user_id
      const selectKeyContactProfile = {
        text: `SELECT * FROM seniorcare.key_contact WHERE id = $1`,
        values: [user_id]
      }
      const result = await this.context.postgres.query(selectKeyContactProfile)

      return result.rows[0]
    } catch (e) {
      throw e
    }
  }
    async addKeyContactDetails(input) {
    const {id, fullname, phone_number, location} = input

    const keyContactDetails = {
      text: `UPDATE seniorcare.key_contact SET fullname = $2, phone_number = $3, location = $4 WHERE id = $1`,
      values: [id, fullname, phone_number, location]
    }

    const result = await this.context.postgres.query(keyContactDetails)

      return {
        message: "it worked!"
      }
    }
  }

module.exports = KeyContactDatabase