import React from 'react';
// import { View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from '~/components';
import {Dashboard} from '~/pages';

// import { Container } from './styles';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        backBehavior="none"
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: '#000',
          // labelStyle: {marginLeft: -20},
        }}
        drawerStyle={{
          backgroundColor: '#ddd',
          width: 250,
        }}>
        <Drawer.Screen
          name="teste"
          options={{
            title: 'Teste 01',
            unmountOnBlur: true,
            //   drawerIcon: ({ color, size }) =>
            //     options.DrawerIcon.name ? (
            //       <Icon
            //         name={options.DrawerIcon.name}
            //         color={color}
            //         size={size}
            //       />
            //     ) : (
            //         <IconNotification color={color} size={size} />
            //       ),
          }}
          component={Dashboard}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
