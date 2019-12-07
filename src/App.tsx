import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TempLabel = Styled.Text`
    font-size: 24px;
`;

const App = () => {
  return (
    <Container>
      <TempLabel>Hello World!</TempLabel>
    </Container>
  );
};

export default App;
