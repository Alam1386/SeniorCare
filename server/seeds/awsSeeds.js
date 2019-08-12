const { Pool } = require('pg')
const squel = require('squel').useFlavour('postgres')
const config = require('../config/production.json')

const keyContactSeeds = [
  {
    id: 'b5926162-57e9-44cb-8540-eda1ce2f6b36',
    fullname: 'Vincent Dumouchel',
    email: 'vdumouchel@me.com',
    phone_number: '5147466616',
    location: 'Queen West',
    avatar: 'https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg',
  },
  {
    id: '835e2722-9ec2-4ffa-94f5-6c5051741261',
    fullname: 'Jeff Johnson',
    email: 'jeffalanjohnson22@gmail.com',
    phone_number: '5147466616',
    location: 'South Core',
    avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
  },
  {
    id: '90908eda-ec5c-4b9d-b432-3ee2f71b228e',
    fullname: 'Alam Talash',
    email: 'mail@alamtalash.com',
    phone_number: '5147466616',
    location: 'Kensington',
    avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
  },
  {
    id: 'aa0ea0ef-5d2d-494e-abaa-5198d6786aa1',
    fullname: 'Marl Olech',
    email: '	mark@olechconsulting.com',
    phone_number: '5147466616',
    location: 'Little Italy',
    avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
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
    avatar: 'https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg',
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
    description: 'I am a cat',
    average_rating: '4.20',
    hourly_rate: 18,
    availability: 'LIVEOUT',
    avatar: 'https://cdn.britannica.com/s:300x500/67/197567-131-1645A26E.jpg',
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
    description: 'I am a cat',
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
    description: 'I am a cat',
    average_rating: '4.20',
    hourly_rate: 18,
    availability: 'LIVEOUT',
    avatar: 'https://cdn.britannica.com/s:300x500/67/197567-131-1645A26E.jpg',
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
    description: 'I am a cat',
    average_rating: '4.20',
    hourly_rate: 18,
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
    bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
  },
  {
    fullname: 'Jorrin',
    key_contact_id: '835e2722-9ec2-4ffa-94f5-6c5051741261',
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
    key_contact_id: '90908eda-ec5c-4b9d-b432-3ee2f71b228e',
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
    address: '',
    city: 'Trinity Bellwoods',
    province: '',
    postal_code: '',
    availability: 'LIVEIN',
    hourly_rate: 17,
    gender_pref: 'FEMALE',
    req_drivers_license: true,
    cig_smoking: false,
    pets: true,
    cannabis: true
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
      )
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
