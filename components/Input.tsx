import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps } from 'react-native';

type InputProps = TextInputProps;

const Input = (props: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default Input;
