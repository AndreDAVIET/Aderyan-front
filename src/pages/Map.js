import React, {useContext} from 'react';
import {
  Container,
  Content,
  Text,
  Button,
  List,
  Body,
  Card,
  CardItem,
} from 'native-base';
import {CityContext} from '../provider/CityProvider';

const Map = () => {
  const cityCtxt = useContext(CityContext);

  return (
    <Container>
      <Content>
        <List>
          {cityCtxt.infoVille.map((i) => (
            <Card>
              <CardItem header bordered>
                <Text>{i.name}</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Distance : {i.distance} km</Text>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <Button>
                  <Text>Partir</Text>
                </Button>
              </CardItem>
            </Card>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Map;
