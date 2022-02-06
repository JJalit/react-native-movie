import React, { useContext, useEffect } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { UserContext } from '../../Context/User';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.View`
  width: 100%;
  padding: 40px;
`;

const PasswordReset = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

const Login = ({ navigation }: Props) => {
  const { login } = useContext<IUserContext>(UserContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <FormContainer>
        <Input style={styles.margin0} placeholder="이메일" />
        <Input style={styles.margin0} placeholder="비밀번호" secureTextEntry={true} />
        <Button style={styles.margin1} label="로그인" onPress={() => login('jaeha23@naver.com', 'password')} />
        <PasswordReset onPress={() => Linking.openURL('https://snspumasi.com')}>비밀번호 재설정</PasswordReset>
      </FormContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  margin0: {
    marginBottom: 16,
  },
  margin1: {
    marginBottom: 24,
  },
});

export default Login;
