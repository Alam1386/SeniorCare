const { Pool } = require('pg')

let host, user, password, database

switch (process.env.NODE_ENV) {
  case 'staging':
    host = 'localhost'
    user = 'postgres'
    password = 'root'
    database = 'postgres'
    break;
  case 'development':
    host = 'localhost'
    user = 'postgres'
    password = 'root'
    database = 'postgres'
    break;
  case 'production':
    host = 'seniorcare.c4d2ofp8j3ou.us-east-1.rds.amazonaws.com'
    user = 'postgres'
    password = 'KeyContact&Caregivers'
    database = 'postgres'
  default:
    host = 'localhost'
    user = 'postgres'
    password = 'root'
    database = 'postgres'
    break;
}

const postgres = new Pool({
  host: host,
  user: user,
  password: password,
  database: database,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

module.exports = postgres