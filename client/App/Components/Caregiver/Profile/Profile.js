import React, { useState } from 'react'
import { ScrollView, Text, View, Image, } from 'react-native'
import { useQuery, useMutation } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../../Styles/Caregiver/CaregiverProfile'
import Icons from 'react-native-vector-icons/FontAwesome5'
import ImagePicker from 'react-native-image-picker'
import Loading from '../../Loading/Loading'
import Amplify from '@aws-amplify/core'
import Storage from '@aws-amplify/storage'
import config from '../../../../aws-exports'
import RNFetchBlob from 'react-native-fetch-blob';
import files from '../../utils/files'
Amplify.configure(config)
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card } from 'native-base'
const yellowCurve = require('../../../Images/WelcomeScreen/yellow-curve.png')

const mapStateToProps = state => {
  const { user_id } = state.user_id
  return {
    user_id: state.user_id
  }
}
const GET_CAREGIVERPROFILE = gql`
  query getCaregiverProfile($id: ID!){
    getCaregiverProfile(id: $id){
      id
      fullname
      avatar
      location
      years_experience
      num_hired
      birthdate
      hourly_rate
      phone_number
      email
      gender
      availability
      average_rating
      description
    }
  }
`;

const changeCaregiverAvatar = gql`
  mutation caregiverAvatarVars($input: ProfileDetails!) {
    changeCaregiverAvatar(input: $input) {
      avatar
    }
  }
`
const Profile = props => {
  let id = props.user_id
  const [avatarSource, setAvatarSource] = useState(false)

  const changeAvatar = useMutation(changeCaregiverAvatar)

  const { data, error, loading } = useQuery(GET_CAREGIVERPROFILE, {
    variables: { id }
  })
  if (loading || (data && data.getCaregiverProfile === null)) {
    return (<Loading />)
  }
  if (error) {
    throw (error)
  }

  if (!avatarSource) setAvatarSource(data.getCaregiverProfile.avatar)

  const handleGoToJob = () => {
    props.navigation.navigate('JobDashboard')
  }

  const handleGoToHelp = () => {
    props.navigation.navigate('Help')
  }

  const handleGoToAccount = (id) => {
    props.navigation.navigate('AccountCaregiver', {
      user_id: id,
      data: data.getCaregiverProfile
    })
  }

  // adding the iOS image picker logic
  const options = {
    title: 'Select Your Profile Picture',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }

  const pickAnImage = id => {
    // let myMutationùfunction = useMutation();
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        // uploadImageToS3(response.uri)
        RNFetchBlob.config({
          fileCache: true,
          appendExt: 'png',
        })
          .fetch('GET', response.uri)
          .then((res) => {
            // upload to storageà
            setAvatarSource(response.uri)
            // setAvatarSource()
            files.readFile(res.data)
              .then(buffer => {
                return Storage.put('images/avatar/' + (id.substr(0, 8) + ".png"), buffer, { contentType: 'image/png' })
              })
              .then(async response => {
                const awsImageUrl = await Storage.get(response.key)
                // setAvatarSource(awsImageUrl)
                changeAvatar({
                  variables: { input: { id, avatar: awsImageUrl } },
                  // Optimisitc UI with Apollo
                  optimisticResponse: {
                    __typename: "Mutation",
                    changeCaregiverAvatar: {
                      id: id,
                      __typename: "avatar",
                      avatar: awsImageUrl,
                    }
                  },
                  update: (cache, { data: { changeCaregiverAvatar } }) => {
                    // Read the data from our cache for this query.
                    const data = cache.readQuery({ query: GET_CAREGIVERPROFILE, variables: { id } });
                    // Write our data back to the cache with the new comment in it
                    cache.writeQuery({
                      query: GET_CAREGIVERPROFILE, data: {
                        ...data,
                        avatar: changeCaregiverAvatar.avatar
                      }
                    })
                    setAvatarSource(changeCaregiverAvatar.avatar)
                  },
                })
              }
              )
          })
      }
    })
  }
  return (
    <View style={styles.MainContainer}>
      <View style={styles.Profile}>
        <TouchableOpacity onPress={() => pickAnImage(id)}>
          <Image style={styles.ProfileImage}
            style={{ width: 200, height: 200, borderRadius: 100, borderWidth: 3, borderColor: '#3F7DFB' }}
            source={{ uri: avatarSource }}
          />
          <View style={styles.Camera}>
            <Icons name="camera" size={20} color={'#3F7DFB'} />
          </View>
        </TouchableOpacity>
        <Text style={styles.ProfileName}> {data.getCaregiverProfile.fullname} </Text>
      </View>
      <Card style={{ zIndex: 100, position: 'relative', width: wp(90), marginLeft: wp(5) }}>
        <TouchableOpacity
          style={styles.ProfileButton}
          onPress={handleGoToJob}
        >
          <Text style={styles.ProfileButtonText}> Jobs</Text>
          <Icons name={`briefcase`} style={styles.ProfileButtonIcon} />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.ProfileButton}
          onPress={() => handleGoToAccount(id)}
        >
          <Text style={styles.ProfileButtonText}> Account</Text>
          <Icons name={`cog`} style={styles.ProfileButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ProfileButtonNoBottom}
          onPress={handleGoToHelp}
        >
          <Text style={styles.ProfileButtonText}> Help Center</Text>
          <Icons name={`question-circle`} style={styles.ProfileButtonIcon} />
        </TouchableOpacity>
      </Card>
      <Image
        source={yellowCurve}
        style={{ height: hp(44), width: wp(100), zIndex: 0, position: 'relative', padding: 0, margin: 0 }}
      />
    </View>
  )
}

export default connect(mapStateToProps)(Profile)