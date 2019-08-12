import React, { useEffect } from 'react'
import { Text, ScrollView, View, ActionSheetIOS } from 'react-native'
import { Button, Card } from 'react-native-elements';

import gql from 'graphql-tag'
import { useQuery, useMutation } from 'react-apollo-hooks'
import styles from '../../Styles/JobDashboardScreen/ArchiveScreenStyles'
import Icon from "react-native-vector-icons/Ionicons";
import Loading from '../../Loading/Loading'

const ARCHIVED_JOBS = gql`
  query{
    ArchivedJobs{
      id
      title
      date_created
      start_date
      hourly_rate
    }
  }
`
const DUPLICATE = gql`
  mutation duplicateRepost($id: ID!) {
    duplicateRepost(id:$id){
      id
      title
      date_created
      start_date
      hourly_rate
    }
  }
`;
const DELETE = gql`
  mutation deleteit($id: ID!) {
    deleteit(id: $id)
  }
`;

const ArchiveScreen = (props) => {

  useEffect(() => {
    props.navigation.setParams({
      headerTitle: 'words',
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      )
    })
  }, [])

  const { data, error, loading } = useQuery(ARCHIVED_JOBS);

  const duplicate = useMutation(DUPLICATE)

  const remove = useMutation(DELETE)

  onclick = (id) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Delete Job', 'Duplicate and Repost Job'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {

          remove({
            variables: { id },
            optimisticResponse: {
              __typename: "Mutation",
              deleteit: { id },
            },
            update: (cache, { data: { deleteit } }) => {

              let data = cache.readQuery({ query: ARCHIVED_JOBS });

              let newArchivedJobs = data.ArchivedJobs.filter(elem => {
                return elem.id !== deleteit
              })

              cache.writeQuery({
                query: ARCHIVED_JOBS, data: {
                  ...data,
                  ArchivedJobs: newArchivedJobs
                }
              })
            },
          })
        } if (buttonIndex === 2) {
          duplicate({
            variables: { id },
            optimisticResponse: {
              __typename: "Mutation",
              duplicateRepost: {
                __typename: "QueryArchiveJobs",
                id: id,
                date_created: "Loading...",
                title: "Loading...",
                start_date: "Loading...",
                hourly_rate: "Loading..."
              }
            },
            update: (cache, { data: { duplicateRepost } }) => {

              const data = cache.readQuery({ query: ARCHIVED_JOBS });

              cache.writeQuery({
                query: ARCHIVED_JOBS, data: {
                  ...data,
                  ArchivedJobs: [...data.ArchivedJobs, duplicateRepost]
                }
              })
            },
          })
        }
      },
    );
  }
  if (loading) {
    return <Loading />;
  };
  if (error) {
    return <Text>Error!</Text>
  }
  return (

    <ScrollView style={styles.MainContainer}>
      {data.ArchivedJobs.map(elem => {
        let date = new Date(parseInt(elem.date_created));
        let options = {
          month: 'long', year: 'numeric', day: 'numeric',
        };
        let dateCreated = date.toLocaleDateString('en', options);

        let newDate = new Date(parseInt(elem.start_date));
        let startDate = newDate.toLocaleDateString('en', options)

        return (
          <ScrollView>

            <Text style={styles.AppText}>Completed</Text>
            <Card style={styles.MainView}>
              <View >
                <View>
                  <Text style={styles.DateText}> Posted {dateCreated}</Text>
                  <Text style={styles.ActionSheet} onPress={() => onclick(elem.id)}>...</Text>
                  <Text key={elem.id} style={styles.JobText}> {elem.title}</Text>

                </View>

                <View style={styles.JobInfo}>
                  <Text style={{ fontSize: 16 }}><Icon
                    name="ios-calendar"
                    color="#00a9c1"
                    size={20}
                  />  Starts {startDate}</Text>
                  <Text style={styles.HourlyRate}><Icon
                    name="ios-cash"
                    color="#00a9c1"
                    size={20}
                  />   ${elem.hourly_rate}/hr</Text>
                </View>

              </View>

            </Card>
          </ScrollView>

        )

      })}
    </ScrollView>
  )
}
ArchiveScreen.navigationOptions = {
  title: 'Home'
}


export default ArchiveScreen