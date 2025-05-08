import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps, Text } from 'react-native';

type InputProps = TextInputProps & {
  error?: string
  correct?:boolean
};

const Input = ({error, correct,  ...props} : InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input,
          error && styles.error,
          correct && styles.correct
        ]}
        {...props}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
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
  error:{
    color: 'red',
    marginTop: 4,
    fontSize: 14
  },
  correct:{
    backgroundColor: '#f5efb3',
  }
});

export default Input;
