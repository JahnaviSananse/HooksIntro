import React, {useState} from 'react';
import {Button, Text} from 'react-native';

export default function demoState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Button title="-" onPress={() => decrement()}></Button>
      <Text style={{fontSize: 30}}> {count} </Text>
      <Button title="+" onPress={() => increment()}></Button>
    </>
  );
}
