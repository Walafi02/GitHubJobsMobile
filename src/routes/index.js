/* eslint-disable react/prop-types */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {DrawerContent} from '~/components';
import {Jobs, JobDetails, JobsWorks, JobsApi} from '~/pages';

import Screens from './Screens';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const JobsStack = ({...props}) => (
  <Screens {...props}>
    <Stack.Screen name="Jobs" component={Jobs} />
    <Stack.Screen name="JobDetails" component={JobDetails} />
  </Screens>
);

const JobsWorksStack = ({...props}) => (
  <Screens {...props}>
    <Stack.Screen name="JobsWorks" component={JobsWorks} />
  </Screens>
);

const JobsApiStack = ({...props}) => (
  <Screens {...props}>
    <Stack.Screen name="JobsApi" component={JobsApi} />
  </Screens>
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
