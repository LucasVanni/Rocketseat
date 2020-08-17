import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import api from '../services/api';
import styled from 'styled-components/native';

export default ({navigation: {navigate}}) => {
  const [olderDocs, setOlderDocs] = useState([]);
  const [docsState, setDocs] = useState([]);
  const [page, setPage] = useState(1);
  const [productInfo, setProductInfo] = useState({});

  const fetchApi = useCallback(async (page) => {
    const response = await api.get(`/products?page=${page}`)

    const { docs, ...productInfo } = response.data;

    if(page === 1 ){
      setDocs(docs);
    } else {
      const newArray = [ ...olderDocs, ...docs];
    

      setDocs(newArray)
    }
    setProductInfo(productInfo);
    setPage(page);
  }, [])

  useEffect(() => {
    fetchApi(page);
  }, [fetchApi, page]);

  const loadMore = () => {
    if(page === productInfo.pages) return;
    setOlderDocs(docsState);
    const numberPage = page + 1;
    fetchApi(numberPage);
  };


  const renderItem = ({ item, navigate }) => (
    <ContainerItem>
      <TextItem>{item.title}</TextItem>
      <TextDescription>{item.description}</TextDescription>

      <ButtonItem onPress={() => {navigate('Product')}}>
        <TextButton>Acessar</TextButton>
      </ButtonItem>
    </ContainerItem>
  )

  return (
    <Container>
      <FlatList 
        contentContainerStyle={styles.list}
        data={docsState}
        keyExtractor={item => item._id}
        renderItem={(item) => renderItem(item, navigate)}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.1}
      />      
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20
  }
});


const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

const Text = styled.Text`
  font-size: 20px;
`;

const ContainerItem = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #DDD;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const TextItem = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const TextDescription = styled.Text`
  font-size: 16px;
  color: #999;
  margin-top: 5px;
  line-height: 24px;
`;

const ButtonItem = styled.TouchableOpacity`
  margin-top: 10px;
  height: 42px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #DA552F;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

const TextButton = styled.Text`
  font-size: 16px;
  color: #DA552F;
  font-weight: bold;
`;