const initialState = {

	user_id: '',

// 	postJob: {
// 		position: {
// 			formPosition: 0,
// 			overviewPosition: 0,
// 			completedSections: [0, 1, 2, 3, 4]
// 		},
// 		serviceDetails: {
// 			appointments: true,
// 			bathing: false,
// 			companionship: true,
// 			dressing: false,
// 			driving: false,
// 			errands: true,
// 			feeding: true,
// 			grooming: true,
// 			housekeeping: false,
// 			laundry: false,
// 			mealPrep: true,
// 			mobility: true,
// 			shopping: false,
// 		},
// 		basicInformation: {
// 			title: 'Finding Nemo',
// 			startDate: '2003-05-30 11:11:30-07',
// 			endDate: '2003-06-18 20:15:40-07',
// 			address: '42 Wallaby Way',
// 			city: 'Sydney',
// 			province: 'Austrailia?',
// 			postalCode: 'A1A1A1',
// 			rate: 20,
// 		},
// 		seniorDetails: {
// 			seniorName: 'Marlin',
// 			gender: 'MALE',
// 			birthdate: '2000-06-18 03:22:01-07',
// 			relationship: 'son',
// 			bio: 'a clownfish',
// 			medicalCondition: 'sharkphobia',
// 			language: 'fish',
// 		},
// 		houseDetails: {
// 			cigSmoking: false,
// 			pets: true,
// 			cannabis: false
// 		},
// 		caregiverPreferences: {
// 			availability: 'LIVEIN',
// 			preferredGender: 'MALE',
// 			validDriverLicense: true,
// 		},
// 	},
	postJob: {
		position: {
			formPosition: 0,
			overviewPosition: 1,
			completedSections: []
		},
		serviceDetails: {
			appointments: false,
			bathing: false,
			companionship: false,
			dressing: false,
			driving: false,
			errands: false,
			feeding: false,
			grooming: false,
			housekeeping: false,
			laundry: false,
			mealPrep: false,
			mobility: false,
			shopping: false,
		},
		basicInformation: {
			title: '',
			startDate: '',
			endDate: '',
			address: '',
			city: '',
			province: '',
			postalCode: '',
			rate: 0,
		},
		seniorDetails: {
			seniorName: '',
			gender: '',
			birthdate: new Date(),
			relationship: '',
			bio: '',
			medicalCondition: '',
			language: '',
		},
		houseDetails: {
			cigSmoking: '',
			pets: '',
			cannabis: '',
		},
		caregiverPreferences: {
			availability: '',
			preferredGender: '',
			validDriverLicense: '',
		},
	}
}

const reducer = (state = initialState, action )  => {
	console.log('REDUCER', state, action)




	switch (action.type) {
		case 'BATHING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						bathing: action.payload
					}
				}
			}

		case 'GROOMING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						grooming: action.payload
					}
				}
			}

		case 'DRESSING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						dressing: action.payload
					}
				}
			}

		case 'FEEDING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						feeding: action.payload
					}
				}
			}

		case 'COMPANIONSHIP':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						companionship: action.payload
					}
				}
			}

		case 'DRIVING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						driving: action.payload
					}
				}
			}

		case 'APPOINTMENTS':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						appointments: action.payload
					}
				}
			}

			case 'MOBILITY':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							mobility: action.payload
						}
					}
				}

			case 'ERRANDS':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							errands: action.payload
						}
					}
				}


			case 'MEALPREP':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							mealPrep: action.payload
						}
					}
				}

			case 'HOUSEKEEPING':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							housekeeping: action.payload
						}
					}
				}


			case 'LAUNDRY':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							laundry: action.payload
						}
					}
				}
				case 'SHOPPING':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							shopping: action.payload
						}
					}
				}

		case 'KEYCONTACTID':
			return {
				...state,
				user_id: action.payload
			}

		case 'TITLE':
			return {
				...state,
				postJob: {
					...state.postJob,
					basicInformation: {
						...state.postJob.basicInformation,
						title: action.payload.title,
					}
				}
			}

		case 'ADDRESS':
			return {
				...state,
				postJob: {
					...state.postJob,
					basicInformation: {
						...state.postJob.basicInformation,
						address: action.payload.address,
						city: action.payload.city,
						province: action.payload.province,
						postalCode: action.payload.postalCode,
					}
				}
			}

		case 'STARTDATE':
			return {
				...state,
				postJob: {
					...state.postJob,
					basicInformation: {
						...state.postJob.basicInformation,
						startDate: action.payload
					}
				}
			}

		case 'ENDDATE':
				return {
					...state,
					postJob: {
						...state.postJob,
						basicInformation: {
							...state.postJob.basicInformation,
							endDate: action.payload
						}
					}
				}

		case 'RATE':
			return {
				...state,
				postJob: {
					...state.postJob,
					basicInformation: {
						...state.postJob.basicInformation,
						rate: action.payload
					}
				}
			}

		case 'SENIORNAME':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						seniorName: action.payload,
					},
				}
			}

		case 'SENIORGENDER':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						gender: action.payload,
					},
				}
			}

		case 'SENIORBIRTHDATE':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						birthdate: action.payload,
					},
				}
			}

		case 'SENIORRELATION':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						relationship: action.payload,
					},
				}
			}

		case 'SENIORBIO':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						bio: action.payload,
					},
				}
			}

		case 'SENIORMEDICALCONDITION':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						medicalCondition: action.payload,
					},
				}
			}

		case 'SENIORLANGUAGE':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						language: action.payload,
					},
				}
			}

		case 'HOUSEDETAILS':
			return {
				...state,
				postJob: {
					...state.postJob,
					houseDetails: action.payload
				}
			}

		case 'CAREGIVERPREF1':
			return {
				...state,
				postJob: {
					...state.postJob,
					caregiverPreferences: {
						...state.postJob.caregiverPreferences,
						availability: action.payload.availability,
						preferredGender: action.payload.preferredGender,
					}
				}
			}

		case 'CAREGIVERPREF2':
			return {
				...state,
				postJob: {
					...state.postJob,
					caregiverPreferences: {
						...state.postJob.caregiverPreferences,
						validDriverLicense: action.payload
					}
				}
			}

		case 'CHANGEFORMPOSITION':
			return{
				...state,
				postJob: {
					...state.postJob,
					position: {
						...state.postJob.position,
						formPosition: action.payload,
					}
				}
			}

		case 'GET_AUTH_TOKEN':
			return {
				...state,
				user_id: action.payload.substring(0,36)
			}

		case 'CHANGEOVERVIEWPOSITION':
			return{
				...state,
				postJob: {
					...state.postJob,
					position: {
						...state.postJob.position,
						overviewPosition: action.payload,
					}
				}
			}
	}

  return state
}

export default reducer

