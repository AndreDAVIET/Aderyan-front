import React, {useContext} from 'react';
import {Container, Content, Text, List, Button, Body} from 'native-base';
import {MarketContext} from '../provider/MarketProvider';

const Market = () => {
  const marketCtxt = useContext(MarketContext);

  return (
    <Container>
      <Content padder>
        <Body>
          <Text>Marchand de vivre :</Text>
          <List>
            <Text>Eau</Text>
            <Button>
              <Text>Acheter</Text>
            </Button>
            <Text>Nourriture</Text>
            <Button>
              <Text>Acheter</Text>
            </Button>
          </List>
        </Body>
      </Content>
    </Container>
  );
};

export default Market;
