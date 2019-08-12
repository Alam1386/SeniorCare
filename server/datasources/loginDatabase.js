const { DataSource } = require('apollo-datasource')
const authenticate = require('../utils/DSHelperFunctions/authenticate')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const { createCookie, setCookie } = require('../resolvers/mutation/setCookie')


class LoginDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async mutateLogin(input) {

    let { email, password } = input
        email = email.toLowerCase()

    try{

    const passwordCaregiverQuery = {
      text: "SELECT * FROM seniorcare.caregiver WHERE email = $1",
      values: [email]
    }

   const caregiver_result = await this.context.postgres.query(passwordCaregiverQuery)

   const passwordContactQuery = {
      text: "SELECT * FROM seniorcare.key_contact WHERE email = $1",
      values: [email]
    }
   const key_contact_result = await this.context.postgres.query(passwordContactQuery)

   if (!caregiver_result.rows.length && !key_contact_result.rows.length) throw 'incorrect email'

   let req = this.context.req


     if (key_contact_result.rows.length > 0) {

        const dbPassword = key_contact_result.rows[0].password
        const match = await bcrypt.compare(password, dbPassword)

        if (!match) throw 'incorrect password'

        const tokenData = key_contact_result.rows[0].id
        let myJWTToken = await createCookie(tokenData, 16)
        setCookie('seniorcare_app', myJWTToken, req.res)

        return {
          message: "key contact logged in!"
        }
     }
     else if (caregiver_result.rows.length > 0) {

      const dbPassword = caregiver_result.rows[0].password
      const match = await bcrypt.compare(password, dbPassword)

      if (!match) throw 'incorrect password'

      const tokenData = caregiver_result.rows[0].id
      let myJWTToken = await createCookie(tokenData, 16)
      setCookie('seniorcare_app', myJWTToken, req.res)

      return {
          message: "caregiver logged in!"
        }
     }

    } catch(err) {
      throw err
    }
  }

}

module.exports = LoginDatabase