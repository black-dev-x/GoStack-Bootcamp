import React, { useEffect, useState } from 'react'

import api from './src/services/api'
import {
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native'

export default _ => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
      console.log(response.data)
    })
  }, [])
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"></StatusBar>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item }) => (
            <Text style={styles.project}>{item.title}</Text>
          )}
        ></FlatList>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },
  project: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
