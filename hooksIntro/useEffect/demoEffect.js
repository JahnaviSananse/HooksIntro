import React, {Component, useState, useEffect} from 'react';
import {Button, Text} from 'react-native';
const demoEffect = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // intially called ... works like compDidMount
  useEffect(() => {
    console.log('useEffect called one time...');
  }, []);

  // works like compDidUpdate
  useEffect(() => {
    console.log('useEffect called everytime...');
  });

  //act as watcher on state.....
  useEffect(() => {
    console.log('when ever counter value changed , occur');
  }, [counter]);

  useEffect(() => {
    if (counter2 <= 40) {
      console.log('when ever counter2 value changed , occur');
    }
  }, [counter2]);

  //   multiple watcher
  useEffect(() => {
    console.log('counter changed');
    if (counter2 <= 40) {
      console.log('count2 is Called upto 40 only....');
    }
  }, [counter, counter2]);

  const onClickButton = () => {
    setCounter(counter + 1);
  };
  const onClickButton2 = () => {
    setCounter2(counter2 + 10);
  };

  return (
    <>
      <Button title="PRESS" onPress={onClickButton}></Button>
      <Text style={{fontSize: 30}}>{counter}</Text>
      <Button title="PRESS2" onPress={onClickButton2}></Button>
      <Text style={{fontSize: 30}}>{counter2}</Text>
    </>
  );
};

export default demoEffect;
