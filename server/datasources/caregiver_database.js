const { DataSource } = require('apollo-datasource')
const authenticate = require('../utils/DSHelperFunctions/authenticate')
const buildSelect = require('../utils/DSHelperFunctions/buildSelect')

class CaregiverDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async queryCaregiver(input) {
    try {

      if(input.gender) {
        input.gender = input.gender.toUpperCase()
      }
      if(input.availability) {
        input.availability = input.availability.toUpperCase().replace(/\s/g, "")
      }

      const selectCaregiver = buildSelect(input)

      const result = await this.context.postgres.query(selectCaregiver)

      return result.rows

    } catch(err) {
      throw err
    }
  }
  async getCaregiverDetails(input) {
    try {
      let user_id = input

      const selectCaregiverDetails = {
        text: `SELECT * FROM seniorcare.caregiver WHERE id = $1`,
        values: [user_id]
      }
      const result = await this.context.postgres.query(selectCaregiverDetails)
      return result.rows[0]
    } catch (e) {
      throw e
    }
  }
  async getCaregiverProfile(input) {
    try {
      let user_id = input.id
      const selectCaregiverProfile = {
        text: `SELECT * FROM seniorcare.caregiver WHERE id = $1`,
        values: [user_id]
      }
      const result = await this.context.postgres.query(selectCaregiverProfile)

      return result.rows[0]
    } catch (e) {
      throw e
    }
  }
  async addCaregiverDetails(input) {
    const {id, location, birthdate, years_experience, gender, description, availability, average_rating, hourly_rate} = input

    const caregiverDetails = {
      text: `UPDATE seniorcare.caregiver SET location = $2, birthdate = $3, gender = $4, years_experience = $5, description = $6, availability = $7, average_rating = $8, hourly_rate = $9 WHERE id = $1`,
      values: [id, location, birthdate, gender, years_experience, description, availability, average_rating, hourly_rate]
    }

    const result = await this.context.postgres.query(caregiverDetails)

    return {
      message: "it worked"
    }
  }

}

module.exports = CaregiverDatabase

