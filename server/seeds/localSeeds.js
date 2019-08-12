const { Pool } = require('pg')
const squel = require('squel').useFlavour('postgres')
const config = require('../config/development.json')

const keyContactSeeds = [
	{
		id: 'b5926162-57e9-44cb-8540-eda1ce2f6b36',
		fullname: 'Vincent Dumouchel',
		email: 'vdumouchel@me.com',
		phone_number: '5147466616',
		location: 'Queen West',
		avatar: 'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fscontent-amt2-1.cdninstagram.com%2Fvp%2F71510ae3b542e7eab19ba30048a8cf19%2F5D37E5A5%2Ft51.2885-15%2Fe35%2F44580391_2183576808562825_3580599290827743053_n.jpg%3F_nc_ht%3Dscontent-amt2-1.cdninstagram.com%26se%3D7%26ig_cache_key%3DMTkxODIyNDcwNTYxNjAyNzEyNA%253D%253D.2',
	},
	{
		id: '835e2722-9ec2-4ffa-94f5-6c5051741261',
		fullname: 'Jeff Johnson',
		email: 'jeffalanjohnson22@gmail.com',
		phone_number: '5147466616',
		location: 'South Core',
		avatar: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/381079_2021461996262_2020060162_n.jpg?_nc_cat=108&_nc_oc=AQkMhrjmETABhWl4m9wzSjTnukuKJQcgdZ4JbCDXfqLa6JKwg43n_PxR2IWsQabxlfw&_nc_ht=scontent-yyz1-1.xx&oh=23cf1e9aaeb087b2e133c4d7d968d22a&oe=5DB8A76A',
	},
	{
		id: '90908eda-ec5c-4b9d-b432-3ee2f71b228e',
		fullname: 'Alam Talash',
		email: 'mail@alamtalash.com',
		phone_number: '5147466616',
		location: 'Kensington',
		avatar: 'https://www.alamtalash.com/assets/img/alam.jpeg',
	},
	{
		id: 'aa0ea0ef-5d2d-494e-abaa-5198d6786aa1',
		fullname: 'Marl Olech',
		email: '	mark@olechconsulting.com',
		phone_number: '5147466616',
		location: 'Little Italy',
		avatar: 'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fb.zmtcdn.com%2Fdata%2Fuser_profile_pictures%2F353%2Fcd97361149db1414db07685354a0b353.jpg%3Ffit%3Daround%257C400%253A400%26crop%3D400%253A400%253B%252A%252C%252A',
	},
	{
		id: 'ea488fc4-babc-436f-883b-c873f2a4629d',
		fullname: 'Julien Assouline',
		email: 'jassouline@ryerson.ca',
		phone_number: '5147466616',
		location: 'Bayview',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
	{
		id: 'c0589e4d-bf28-47ef-a361-c778f094606c',
		fullname: 'Kevin Li',
		email: 'unbakedmuffins@gmail.com',
		phone_number: '5147466616',
		location: 'Chinatown',
		avatar: 'https://avatars2.githubusercontent.com/u/46097378?s=400&u=5363c52aff5e94f617a26ee38d65128ce19c6d97&v=4',
	},
]

const caregiverSeeds = [
	{
		id: 'b3f6986c-8555-41c0-b264-69c9cdfc9e93',
		fullname: 'Alam Talash',
		email: 'talash.alam@gmail.com',
		phone_number: '905-905-0008',
		location: 'South Core, TO',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 7,
		description: 'I have had the privilege of providing care and assisting our elders for over 10 years. I have worked both for agencies and for private families and individuals with different needs and physical abilities. I am able to assist with dementia care, bathing, exercises and ROM, meal preparation and feeding, housekeeping, respite care, bed bound care, medicine reminders, transfers, lift experienced, transportation.',
		average_rating: '3.80',
		hourly_rate: 14,
		availability: 'LIVEOUT',
		avatar: 'https://www.alamtalash.com/assets/img/alam.jpeg',
	},
	{
		id: 'b4a92e58-899b-4762-b08a-952810670fa8',
		fullname: 'Julien Assouline',
		email: 'julien1993@hotmail.ca',
		phone_number: '905-905-0003',
		location: 'Corktown, TO',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 5,
		description: "I am a dependable , compassionate and loving caregiver. I have been working in the home care industry for 18 yrs . I pride myself on being able to quickly learn new skills and adapt to any situation. In the past I have clients who are diagnosed with Alzheimer, Dementia, Parkinson's , Mental , Cancer patient and Hospice. I assist them with their daily living activities , engaged in conversation , laundry , cooking meals . taken vital and maintained a clean household. I try to connect with my clients, spending time with them, going for walks and driving them to Dr's appointments , Shopping. etc I have my Washington State Caregiving Certificates, CPR license and Resume on hand",
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEIN',
		avatar: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
	},
	{
		id: 'bb515b7b-c037-4564-9c44-bdf60e54c636',
		fullname: 'Vincent Dumouchel',
		email: 'vincent@storydoc.ai',
		phone_number: '905-905-0008',
		location: 'Downtown West, TO',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 7,
		description: "I have been a caregiver for 15 + years. I have a passion for caring for the elderly and handicapped. I have had experience with handicapped, Parkinson's, cancer, stroke and elderly patients with dementia. I have also cared for patients who were in Hospice care. I have experience feeding, bathing, and giving meds. I am also a licensed cosmetologist, so I can use this experience with the people that I care for. I am dependable and reliable and have good references.",
		average_rating: '3.90',
		hourly_rate: 20,
		availability: 'LIVEOUT',
		avatar: 'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F446897593717493760%2Fksq1DKRE.jpeg',
	},
	{
		id: 'ac187694-bcc3-44a2-bc1f-1cf573d8c5bd',
		fullname: 'Kevin Li',
		email: 'munchedmuffins@gmail.com',
		phone_number: '905-905-0008',
		location: 'Kensington, TO',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 7,
		description: "I enjoy working with clients of all ages and socioeconomic backgrounds and have a demonstrated ability to develop great relationships with them and their families. Moreover, I am a trustworthy and responsible person who takes great pleasure in all kinds of care-giving tasks. Besides, I am dedicated to work hard and always accept challenges to produce winning outcomes. Over and above, I am an active team player who is able to work effectively with all involved. I have over 19 years hands on experience which includes a certification in Hospice care and Mental Health First Aid. As a passionate and reliable caregiver I LOVE my work. These rewarding experiences are never forgotten. I'd welcome a chance to meet with you to discuss how my education, experience and care-giving skills would be beneficial for you and your loved ones needs. I live in Morrisville, NC, and I understand the journey you're on.",
		average_rating: '4.20',
		hourly_rate: 15,
		availability: 'LIVEOUT',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
]

const seniorSeeds = [
	{
		fullname: 'Navi',
		key_contact_id: '835e2722-9ec2-4ffa-94f5-6c5051741261',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'FEMALE',
		avatar: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
		relation: 'Gran Dad',
		language: 'English',
		medical_condition: 'Vision Sickness',
		bio: '',
	},
	{
		fullname: 'Jorrin',
		key_contact_id: 'aa0ea0ef-5d2d-494e-abaa-5198d6786aa1',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'MALE',
		avatar: 'https://timedotcom.files.wordpress.com/2018/08/new-zealand-cat-ban.jpg',
		relation: 'Dad',
		language: 'French',
		medical_condition: 'Fractured leg',
		bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
	},
	{
		fullname: 'Eirian',
		key_contact_id: '90908eda-ec5c-4b9d-b432-3ee2f71b228e',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'FEMALE',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
		relation: 'Mom',
		language: 'English, German',
		medical_condition: 'Always has headaches and coughs a lot',
		bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
	},
	{
		fullname: 'Vaughn',
		key_contact_id: 'ea488fc4-babc-436f-883b-c873f2a4629d',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'MALE',
		avatar: 'https://cdn.britannica.com/s:300x500/67/197567-131-1645A26E.jpg',
		relation: 'Uncle',
		language: 'English, Persian',
		medical_condition: 'Nothing serious',
		bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
	},
	{
		fullname: 'Eirian',
		key_contact_id: 'aa0ea0ef-5d2d-494e-abaa-5198d6786aa1',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'FEMALE',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
		relation: 'Mom',
		language: 'English, German',
		medical_condition: 'Always has headaches and coughs a lot',
		bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
	},
]

const JobPostings = [
	{
		key_contact_id: 'aa0ea0ef-5d2d-494e-abaa-5198d6786aa1',
		date_created: '2001-06-22 19:10:25-07',
		title: "Take Care of Mom",
		start_date: "2001-07-22 19:10:25-07",
		end_date: "2001-06-22 19:10:25-07",
		address: 'Trinity Bellwoods',
		city: 'Toronto',
		province: 'Ontario',
		postal_code: 'a1s2d3',
		availability: 'LIVEIN',
		hourly_rate: 17,
		gender_pref: 'FEMALE',
		req_drivers_license: true,
		cig_smoking: false,
		pets: true,
		cannabis: true
	},
	{
		key_contact_id: '835e2722-9ec2-4ffa-94f5-6c5051741261',
		date_created: '2002-02-22 19:10:25-07',
		title: "Take Care of Dad",
		start_date: "2001-09-22 19:10:25-07",
		end_date: "2001-10-12 19:10:25-07",
		address: '352 King Street West',
		city: 'Toronto',
		province: 'Ontario',
		postal_code: 'h1h2h3',
		availability: 'LIVEIN',
		hourly_rate: 12,
		gender_pref: 'FEMALE',
		req_drivers_license: true,
		cig_smoking: false,
		pets: false,
		cannabis: true
	},
	{
		key_contact_id: 'c0589e4d-bf28-47ef-a361-c778f094606c',
		date_created: '2001-06-22 19:10:25-07',
		title: "Keep mom company",
		start_date: "2008-07-22 19:10:25-07",
		end_date: "2009-06-22 19:10:25-07",
		address: '123 Queen Street',
		city: 'Toronto',
		province: 'Ontario',
		postal_code: 'k1k2k3',
		availability: 'LIVEOUT',
		hourly_rate: 12,
		gender_pref: 'FEMALE',
		req_drivers_license: true,
		cig_smoking: false,
		pets: true,
		cannabis: false
	},
	{
		key_contact_id: 'aa0ea0ef-5d2d-494e-abaa-5198d6786aa1',
		date_created: '2001-06-22 19:10:25-07',
		title: "Granny needs help",
		start_date: "2005-02-22 19:10:25-07",
		end_date: "2005-04-22 19:10:25-07",
		address: '50 John St',
		city: 'Toronto',
		province: 'Ontario',
		postal_code: 'p1p1p1',
		availability: 'LIVEIN',
		hourly_rate: 12,
		gender_pref: 'FEMALE',
		req_drivers_license: true,
		cig_smoking: false,
		pets: false,
		cannabis: false
	},
]

const applicantsSeeds = [
	{
		jobpost_id: '1',
		date_created: '2001-06-22 19:10:25-07',
		caregiver_id: 'ac187694-bcc3-44a2-bc1f-1cf573d8c5bd',
		keycontact_id: 'c0589e4d-bf28-47ef-a361-c778f094606c'
	},
	{
		jobpost_id: '1',
		date_created: '2001-06-22 19:10:25-07',
		caregiver_id: 'b4a92e58-899b-4762-b08a-952810670fa8',
		keycontact_id: 'c0589e4d-bf28-47ef-a361-c778f094606c'
	}
]

const services = [
	{ title: 'appointments' },
	{ title: 'bathing' },
	{ title: 'companionship' },
	{ title: 'dressing' },
	{ title: 'driving' },
	{ title: 'errands' },
	{ title: 'feeding' },
	{ title: 'grooming' },
	{ title: 'housekeeping' },
	{ title: 'laundry' },
	{ title: 'meal_prep' },
	{ title: 'mobility' },
	{ title: 'shopping' },
]

const services_job = [
	{
		job_id: 1,
		service_id: 1,
	},
	{
		job_id: 1,
		service_id: 2,
	},
	{
		job_id: 1,
		service_id: 3,
	},
	{
		job_id: 1,
		service_id: 4,
	},
	{
		job_id: 1,
		service_id: 5,
	},
	{
		job_id: 1,
		service_id: 6,
	},

	{
		job_id: 2,
		service_id: 2,
	},
	{
		job_id: 2,
		service_id: 4,
	},
	{
		job_id: 2,
		service_id: 6,
	},
	{
		job_id: 2,
		service_id: 8,
	},

	{
		job_id: 3,
		service_id: 1,
	},
	{
		job_id: 3,
		service_id: 2,
	},
	{
		job_id: 3,
		service_id: 3,
	},
	{
		job_id: 3,
		service_id: 4,
	},
	{
		job_id: 3,
		service_id: 5,
	},
	{
		job_id: 3,
		service_id: 6,
	},
	{
		job_id: 3,
		service_id: 7,
	},
	{
		job_id: 3,
		service_id: 8,
	},

	{
		job_id: 4,
		service_id: 2,
	},
	{
		job_id: 4,
		service_id: 3,
	},
	{
		job_id: 4,
		service_id: 5,
	},
	{
		job_id: 4,
		service_id: 6,
	},
	{
		job_id: 4,
		service_id: 8,
	},
	{
		job_id: 4,
		service_id: 9,
	},
]

const seed = async () => {
	const pg = await new Pool(config.db).connect()

	try {
		await pg.query('BEGIN')

		console.log('Seeding...')

		await Promise.all(
			keyContactSeeds.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.key_contact')
						.setFields(seed)
						.toParam()
				)
			),
			caregiverSeeds.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.caregiver')
						.setFields(seed)
						.toParam()
				)
			),
			seniorSeeds.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.senior')
						.setFields(seed)
						.toParam()
				)
			),
			JobPostings.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.job_posting')
						.setFields(seed)
						.toParam()
				)
			),
			applicantsSeeds.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.applicants')
						.setFields(seed)
						.toParam()
				)
			),
			services.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.services')
						.setFields(seed)
						.toParam()
				)
			),
			services_job.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.services_job')
						.setFields(seed)
						.toParam()
				)
			),
		)
		await pg.query('COMMIT')
	} catch (e) {
		await pg.query('ROLLBACK')
		throw e
	} finally {
		pg.release()
	}
}

seed().catch(e => {
	setImmediate(() => {
		throw e
	})
})
