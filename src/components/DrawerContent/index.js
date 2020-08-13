import React from 'react';
import {Image} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {Container, ViewLogo} from './styles';

import logo from '~/assets/logo.png';

const DrawerContent = ({...props}) => {
  return (
    <Container>
      <ViewLogo>
        <Image source={logo} />
      </ViewLogo>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Container>
  );
};

export default DrawerContent;
