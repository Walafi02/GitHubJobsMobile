import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {DrawerContent} from '~/components';
import {Dashboard, JobsWorks} from '~/pages';
import logo from '~/assets/logo.png';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DashboardStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#2B7FC3',
      },
      headerTitle: () => <Image source={logo} />,
      headerLeft: () => (
        <Icon.Button
          size={25}
          name="menu"
          onPress={() => navigation.openDrawer()}
          backgroundColor="transparent"
          iconStyle={{marginRight: 0}}
        />
      ),
    }}>
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);

const JobsWorksStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="JobsWorks"
      options={{
        title: 'JobsWorks',
      }}
      component={JobsWorks}
    />
  </Stack.Navigator>
);

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        backBehavior="none"
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: '#2B7FC3',
          activeBackgroundColor: '#eee',
          // labelStyle: {marginLeft: -20},
        }}
        drawerStyle={{
          backgroundColor: '#eee',
          width: 250,
        }}>
        <Drawer.Screen
          name="DashboardDrawer"
          options={{
            title: 'Dashboard',
            unmountOnBlur: true,
          }}
          component={DashboardStack}
        />
        <Drawer.Screen
          name="JobsWorksDrawer"
          options={{
            title: 'JobsWorks',
            unmountOnBlur: true,
          }}
          component={JobsWorksStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
