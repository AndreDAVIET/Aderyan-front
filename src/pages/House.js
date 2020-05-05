import React from 'react';
import {View} from 'native-base';
import {Button, Text} from 'native-base';

const House = ({navigation}) => {
  return (
    <View>
      <Text>Maison</Text>
      <Button>
        <Text onPress={() => navigation.navigate('BottonNav')}>Commencez</Text>
      </Button>
    </View>
  );
};

export default House;
