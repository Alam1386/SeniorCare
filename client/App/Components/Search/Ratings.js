import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from "../Styles/searchStyles/searchStyles"
import StarRating from 'react-native-star-rating';

const Ratings = (props) => {

  const [starCount, setStarCount] = useState(props.data)

  function onStarRatingPress(rating) {
    setStarCount(rating)
  }


  return (
    <StarRating
      disabled={false}
      maxStars={5}
      rating={starCount}
      starSize={15}
      fullStarColor="#FAB730"
      emptyStarColor="#FAB730"
      starStyle={styles.starRating}
      selectedStar={(rating) => onStarRatingPress(rating)}
    />
  )
}

export default Ratings


