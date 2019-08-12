import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function calcAge(d) {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const currentDay = new Date().getDate()

  const year = d.birthdate.split("-")[0]
  const month = +d.birthdate.split("-")[1]
  const day_time = d.birthdate.split("-")[2]
  const day = +day_time.split(" ")[0]

  if (currentMonth - month >= 0) {
    if (currentDay - day >= 0) {
      d.Age = currentYear - year
    }
    else {
      d.Age = currentYear - year - 1
    }
  }
  else {
    d.Age = currentYear - year - 1
  }
}