const { DataSource } = require('apollo-datasource')

const { createSelectQuery, createInsertQuery } = require('../utils/DSHelperFunctions/makeQueries')

class ServicesDatabase extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {
		this.context = config.context
	}


	async getServiceDetails(parent) {
		try {
			const { id: job_id } = parent
			const selectForServiceIdColumns = [
				'job_id',
				'service_id',
			]
			const selectForServiceIdQuery = createSelectQuery(selectForServiceIdColumns, 'seniorcare.services_job', 'job_id', job_id)
			const selectForServiceIdResult = await this.context.postgres.query(selectForServiceIdQuery)
			return selectForServiceIdResult.rows
		} catch(err) {
			throw err
		}
	}

	async getService(parent) {
		try {
			const { service_id: id } = parent
			const selectServiceColumns = [
				'id',
				'title',
			]
			const selectServiceQuery = createSelectQuery(selectServiceColumns, 'seniorcare.services', 'id', id)
			const selectServiceResult = await this.context.postgres.query(selectServiceQuery)
			return selectServiceResult.rows[0]
		} catch(err) {
			throw err
		}
	}

	async addJobServices(input) {
		try {
			const { jobId } = input

			const selectServicesArray = Object.keys(input.serviceDetails).filter(service => 
				input.serviceDetails[service]
			)

			const selectServicesObjects = await Promise.all(selectServicesArray.map( async service => {
				const selectServiceColumns = ['id']
				const selectServiceQuery = createSelectQuery(selectServiceColumns, 'seniorcare.services', 'title', service)
				const selectServiceResult = await this.context.postgres.query(selectServiceQuery)

				return {
					job_id: jobId,
					service_id: selectServiceResult.rows[0].id,
				}
			}))

			await selectServicesObjects.forEach(async serviceObject => {
				const insertServicesJobsQuery = createInsertQuery(serviceObject, 'seniorcare.services_job', true)
				await this.context.postgres.query(insertServicesJobsQuery)
			})
		} catch(err) {
			throw err
		}
	}

}

module.exports = ServicesDatabase