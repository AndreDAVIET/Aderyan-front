import React from 'react';
import {Container, Content, Button, Text} from 'native-base';

const HomePage = ({navigation}) => {
  return (
    <Container>
      <Content>
        <Text>Bienvenur sur ADERYAN</Text>
        <Button>
          <Text onPress={() => navigation.navigate('History')}>Click Me!</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default HomePage;
