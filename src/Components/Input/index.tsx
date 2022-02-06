import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  background-color: #333333;
`;

const InputField = styled.TextInput`
  flex: 1;
  color: #ffffff;
`;

interface Props {
  style?: Object;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  placeholder?: string;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({ style, secureTextEntry, keyboardType, placeholder, clearMode, onChangeText }: Props) => {
  return (
    <Container style={style}>
      <InputField
        selectionColor="#FFFFFF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        allowFontScaling={false}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF"
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;
