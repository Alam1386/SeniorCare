exports.up = pgm => {
	//1. Users Table
	pgm.sql(`
    CREATE TABLE "seniorcare"."key_contact" (
			"id" VARCHAR(255) PRIMARY KEY NOT NULL,
      "email" VARCHAR(255) NOT NULL,
      "date_created" DATE NOT NULL DEFAULT CURRENT_DATE,
			"fullname" VARCHAR(128),
			"phone_number" VARCHAR(32),
			"avatar" TEXT,
			"location" VARCHAR(64)
    );
	`),

		pgm.sql(`
		CREATE TABLE "seniorcare"."caregiver" (
			"id" VARCHAR(255) PRIMARY KEY NOT NULL,
      "email" VARCHAR(255) NOT NULL,
			"phone_number" VARCHAR(32),
			"fullname" VARCHAR(128),
      "date_created" DATE NOT NULL DEFAULT CURRENT_DATE,
			"avatar" TEXT,
			"location" VARCHAR(64),
			"birthdate" VARCHAR(64),
			"years_experience" INT,
			"description" TEXT,
			"gender" VARCHAR(32),
			"availability" VARCHAR(10),
			"average_rating" FLOAT(2),
			"hourly_rate" INT
		);
	`),

		pgm.sql(`
		CREATE TABLE "seniorcare"."senior" (
			"id" SERIAL PRIMARY KEY,
			"key_contact_id" VARCHAR(255) NOT NULL,
			"fullname" VARCHAR(128),
			"date_created" DATE NOT NULL DEFAULT CURRENT_DATE,
			"birthdate" VARCHAR(64),
			"gender" VARCHAR(32),
			"relation" VARCHAR(32),
			"language" VARCHAR(32),
			"medical_condition" TEXT,
			"bio" TEXT,
			"avatar" TEXT,
			FOREIGN KEY (key_contact_id) REFERENCES seniorcare.key_contact (id)
		);
	`),

		pgm.sql(`
		CREATE TABLE "seniorcare"."job_posting" (
			"id" SERIAL PRIMARY KEY,
			"key_contact_id" VARCHAR(255) NOT NULL,
			"date_created" DATE NOT NULL DEFAULT CURRENT_DATE,
			"title" VARCHAR(64) NOT NULL,
			"start_date" DATE NOT NULL,
			"end_date" DATE NOT NULL,
			"address" VARCHAR(64),
			"city" VARCHAR(32),
			"province" VARCHAR(16),
			"postal_code" VARCHAR(8),
			"availability" VARCHAR(10),
			"hourly_rate" INT,
			"gender_pref" VARCHAR(16),
			"req_drivers_license" BOOLEAN,
			"cig_smoking" BOOLEAN,
			"pets" BOOLEAN,
			"cannabis" BOOLEAN
		);
	`),

		pgm.sql(`
		CREATE TABLE "seniorcare"."conversations" (
			"id" SERIAL PRIMARY KEY,
			"caregiver_id" VARCHAR(255) NOT NULL,
			"key_contact_id" VARCHAR(255) NOT NULL,
			FOREIGN KEY (caregiver_id) REFERENCES seniorcare.caregiver (id),
			FOREIGN KEY (key_contact_id) REFERENCES seniorcare.key_contact (id)
		);
	`),

		pgm.sql(`
		CREATE TABLE "seniorcare"."messages" (
			"id" SERIAL PRIMARY KEY,
			"conversation_id" INT NOT NULL,
			"from_user" VARCHAR(255) NOT NULL,
			"date_created" DATE NOT NULL DEFAULT CURRENT_DATE,
			"content" TEXT,
			FOREIGN KEY (conversation_id) REFERENCES seniorcare.conversations (id)
		);
	`),

		pgm.sql(`
		CREATE TABLE "seniorcare"."caregiver_reviews" (
			"id" SERIAL PRIMARY KEY,
			"caregiver_id" VARCHAR(255) NOT NULL,
			"key_contact_id" VARCHAR(255) NOT NULL,
			FOREIGN KEY (caregiver_id) REFERENCES seniorcare.caregiver (id),
			FOREIGN KEY (key_contact_id) REFERENCES seniorcare.key_contact (id)
		);
	`),

		pgm.sql(`
		CREATE TABLE "seniorcare"."services" (
			"id" SERIAL PRIMARY KEY,
			"title" VARCHAR(64) NOT NULL
		);
	`),

		pgm.sql(`
		CREATE TABLE "seniorcare"."services_job" (
			"job_id" INT NOT NULL,
			"service_id" INT NOT NULL,
			FOREIGN KEY (job_id) REFERENCES seniorcare.job_posting (id),
			FOREIGN KEY (service_id) REFERENCES seniorcare.services (id)
		);
	`)

		pgm.sql(`
		CREATE TABLE "seniorcare"."applicants" (
			"id" SERIAL PRIMARY KEY,
			"jobpost_id" INT NOT NULL,
			"caregiver_id" VARCHAR(255) NOT NULL,
			"keycontact_id" VARCHAR(255) NOT NULL,
			"date_created" DATE NOT NULL DEFAULT CURRENT_DATE,
			FOREIGN KEY (caregiver_id) REFERENCES seniorcare.caregiver (id),
			FOREIGN KEY (keycontact_id) REFERENCES seniorcare.key_contact (id)
		);
	`)
};

