import React, { useEffect, useState } from 'react'

import api from './src/services/api'
import {
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'

export default _ => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
      console.log(response.data)
    })
  }, [])

  const addProject = () => {
    const newProject = {
      title: 'ainda assim outro projeto'
    }
    api
      .post('/projects', newProject)
      .then(response => setProjects([...projects, response.data]))
  }
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
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={addProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
