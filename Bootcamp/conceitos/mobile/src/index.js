import React, {useEffect, useState} from 'react';

import api from './services/api';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `New Project ${Date.now()}`,
      owner: 'Lucas Vanni',
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item}) => <Text style={styles.text}>{item.title}</Text>}
        />

        <TouchableOpacity
          onPress={handleAddProject}
          activeOpacity={0.9}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Projetos</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  text: {
    color: '#f5f5f5',
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
