import React, {useEffect, useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import {FilterModal, Loading} from '~/components';

import Job from './Job';

import {JobsList} from './styles';

const Dashboard = ({navigation}) => {
  const [hasFilter, setHasFilter] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = await api.get('positions.json');
      setJobs(data);
    } catch (error) {
      setJobs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshList = useCallback(() => {
    load();
  }, []);

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

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <JobsList
        data={jobs}
        keyExtractor={({id}) => String(id)}
        onRefresh={refreshList}
        refreshing={false}
        renderItem={({item}) => <Job {...item} />}
      />

      <FilterModal
        visible={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={() => {}}
      />
      <Loading isVisible={loading} />
    </>
  );
};

export default Dashboard;
