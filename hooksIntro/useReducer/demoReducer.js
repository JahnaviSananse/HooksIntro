import React, {useState, useReducer} from 'react';
import {Button, Text, Span} from 'react-native';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1};
    case ACTIONS.DECREMENT:
      return {count: state.count - 1};
    default:
      return state;
  }
};
export default function demoReducer() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  //   const [count, setCount] = useState(0);

  const increment = () => {
    dispatch({type: ACTIONS.INCREMENT});
  };
  const decrement = () => {
    dispatch({type: ACTIONS.DECREMENT});
  };

  return (
    <>
      <Button title="-" onPress={() => decrement()}></Button>
      <Text style={{fontSize: 30}}> {state.count} </Text>
      <Button title="+" onPress={() => increment()}></Button>
    </>
  );
}
