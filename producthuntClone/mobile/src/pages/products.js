import React from 'react';
import styled from 'styled-components/native';

export default () => (
  <Container>
    <Text>Produtos</Text>
  </Container>
);

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  font-size: 20px
`;