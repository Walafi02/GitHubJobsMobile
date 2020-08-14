/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {DrawerContent} from '~/components';
import {Jobs, JobDetails, JobsWorks, JobsApi} from '~/pages';
import logo from '~/assets/logo.png';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const JobsStack = ({navigation}) => (
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
    <Stack.Screen name="Jobs" component={Jobs} />
    <Stack.Screen name="JobDetails" component={JobDetails} />
  </Stack.Navigator>
);

const JobsWorksStack = ({navigation}) => (
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
    <Stack.Screen name="JobsWorks" component={JobsWorks} />
  </Stack.Navigator>
);

const JobsApiStack = ({navigation}) => (
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
    <Stack.Screen name="JobsApi" component={JobsApi} />
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
        }}
        drawerStyle={{
          backgroundColor: '#eee',
          width: 250,
        }}>
        <Drawer.Screen
          name="JobsDrawer"
          options={{
            title: 'Jobs',
            unmountOnBlur: true,
          }}
          component={JobsStack}
        />
        <Drawer.Screen
          name="JobsWorksDrawer"
          options={{
            title: 'How It GitHub',
            unmountOnBlur: true,
          }}
          component={JobsWorksStack}
        />
        <Drawer.Screen
          name="JobsApiStackDrawer"
          options={{
            title: 'GitHub Jobs API',
            unmountOnBlur: true,
          }}
          component={JobsApiStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
