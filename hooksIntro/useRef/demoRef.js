import React, {Component, useState, useEffect, useRef} from 'react';
import {Button, Text, TextInput, StyleSheet} from 'react-native';
const demoRef = () => {
  const [name, setName] = useState(0);
  const prevName = useRef('');

  // useEffect called everytime when name state changed....
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="type something..."
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.msg}>
        My name is... {name} ...and it used to be... {prevName.current} ...
      </Text>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  msg: {
    fontSize: 30,
  },
});
export default demoRef;
