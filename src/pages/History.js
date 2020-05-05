import React from 'react';
import {View} from 'native-base';
import {Button, Text} from 'native-base';

const History = ({navigation}) => {
  return (
    <View>
      <Text>Histoire d'Aderyan</Text>
      <Button>
        <Text onPress={() => navigation.navigate('House')}>Commencez</Text>
      </Button>
    </View>
  );
};

export default History;
