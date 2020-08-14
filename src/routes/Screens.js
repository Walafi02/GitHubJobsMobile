import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';

const Stack = createStackNavigator();

const Screens = ({navigation, children, ...rest}) => {
  return (
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
      }}
      {...rest}>
      {children}
    </Stack.Navigator>
  );
};

Screens.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Screens;
