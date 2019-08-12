
const buildSelect = (input) => {
  console.log(input)

  const validKeys = Object.keys(input).filter(
      key => input[key] != undefined
    );

  const finalString = validKeys
    .map((key, i) => {
      switch (key) {
        case "hourly_rate":
          return `${key} <= $${i + 1} AND ${key} >= 14`
        case "years_experience":
          return `${key} >= $${i + 1}`
        default:
          return `${key} = $${i + 1}`
      }
    })
    .join(" AND ")

  const queryValues = validKeys.map(key => input[key]);

  if (Object.keys(input).length > 0) {
    return {
      text: `SELECT * FROM seniorcare.caregiver WHERE ${finalString}`,
      values: queryValues
    }
  }
  else {
    return {
      text: `SELECT * FROM seniorcare.caregiver`
    }
  }
}

module.exports = buildSelect;
