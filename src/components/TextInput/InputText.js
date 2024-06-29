import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Modal} from 'react-native';
import style from './style';
const InputText = ({value,setValue}) => {
 
  return (
    <View style={style.container}>
      <Text style={style.text}>Enter Amount</Text>
      <TextInput
        style={style.textinput}
        placeholder="Enter Amount"
        autoCorrect={false}
        keyboardType="number-pad"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default InputText;
