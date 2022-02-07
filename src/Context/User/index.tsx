import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: undefined,
  login: (email: string, password: string) => {},
  getUserInfo: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = (email: string, password: string): void => {
    AsyncStorage.setItem('token', 'ab1234').then(() => {
      setUserInfo({ name: 'jaeha', email: 'jaeha23@naver.com' });
      setIsLoading(true);
    });
  };

  const getUserInfo = (): void => {
    AsyncStorage.getItem('token')
      .then(value => {
        if (value) {
          setUserInfo({ name: 'jaeha', email: 'jaeha23@naver.com' });
          setIsLoading(true);
        } else {
          setUserInfo(undefined);
          setIsLoading(true);
        }
      })
      .catch(() => {
        setUserInfo(undefined);
        setIsLoading(true);
      });
  };

  const logout = (): void => {
    AsyncStorage.removeItem('token');
    setUserInfo(undefined);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return <UserContext.Provider value={{ isLoading, userInfo, login, getUserInfo, logout }}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
