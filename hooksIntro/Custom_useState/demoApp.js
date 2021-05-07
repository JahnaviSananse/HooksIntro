import React from 'react';
import {Text, Button} from 'react-native';
import useCustomCounter from './demoCustom';

function demoApp() {
  const data = useCustomCounter();
  return (
    <>
      <Text> Counts : {data.count} </Text>
      <Button title="click me" onPress={data.handleIncrement} />
    </>
  );
}

export default demoApp;
