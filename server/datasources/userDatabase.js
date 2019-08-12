const { DataSource } = require('apollo-datasource')


class UserDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async keyContactSignup(input) {
    try {
      let { id, fullname, email, phone_number, avatar } = input
      fullname = fullname.toLowerCase()
      email = email.toLowerCase()

      const newUserInsert = {
        text: "INSERT INTO seniorcare.key_contact( id, fullname, email, phone_number, avatar) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        values: [id, fullname, email, phone_number, avatar]
      }

      await this.context.postgres.query(newUserInsert)

      return {
        token: id
      }

    } catch (err) {
      throw err
    }
  }


  async caregiverSignup(input) {
    try {
      let { id, fullname, email, phone_number, avatar } = input
      fullname = fullname.toLowerCase()
      email = email.toLowerCase()

      const newUserInsert = {
        text: "INSERT INTO seniorcare.caregiver( id, fullname, email, phone_number, avatar) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        values: [id, fullname, email, phone_number, avatar]
      }

      await this.context.postgres.query(newUserInsert)

      return {
        token: id
      }

    } catch (err) {
      throw err
    }
  }

  async changeKeyContactAvatar(input) {
    try {
      let { id, avatar } = input

      const newAvatarInsert = {
        text: "UPDATE seniorcare.key_contact SET avatar = ($1) WHERE id = ($2) RETURNING avatar",
        values: [avatar, id]
      }

      await this.context.postgres.query(newAvatarInsert)

      return {
        avatar: avatar
      }

    } catch (err) {
      throw err
    }
  }

  async changeCaregiverAvatar(input) {
    try {
      let { id, avatar } = input

      const newAvatarInsert = {
        text: "UPDATE seniorcare.caregiver SET avatar = ($1) WHERE id = ($2) RETURNING avatar",
        values: [avatar, id]
      }

      await this.context.postgres.query(newAvatarInsert)

      return {
        avatar: avatar
      }

    } catch (err) {
      throw err
    }
  }
}

module.exports = UserDatabase