import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {FilterModal} from '~/components';

// import {
//   // TextHotSearche,
//   // HotSearches,
//   // HotSearchesButton,
//   // HotSearchesButtonText,
//   // CheckBoxText,
//   // CheckBoxButton,
// } from './styles';

const Dashboard = ({navigation}) => {
  const [hasFilter, setHasFilter] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          size={25}
          name="filter-list"
          onPress={() => setOpenModal((state) => !state)}
          backgroundColor="transparent"
          iconStyle={{marginRight: 0, color: hasFilter ? '#18133A' : '#fff'}}
        />
      ),
    });
  }, [navigation, hasFilter]);

  return (
    <>
      <View>
        <Text>Dashboard</Text>
      </View>

      <FilterModal
        visible={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={() => {}}
      />
    </>
  );
};

export default Dashboard;
