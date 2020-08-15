import React, {useEffect, useState, useMemo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import api from '~/services/api';
import {FilterModal, Empty} from '~/components';

import Job from './Job';
import {JobsList} from './styles';

const Jobs = ({navigation}) => {
  const [openModal, setOpenModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [currentFilter, setCurrentFilter] = useState({
    description: '',
    location: '',
    full_time: false,
  });

  const hasFilter = useMemo(
    () =>
      !!currentFilter.description ||
      !!currentFilter.location ||
      currentFilter.full_time,
    [currentFilter]
  );

  const handleShowDescription = (job) => {
    navigation.navigate('JobDetails', {job});
  };

  const loadJobs = async (oldJobs = [], currentPage = 1) => {
    setLoading(true);

    try {
      const {data} = await api.get(
        `positions.json?page=${currentPage}${
          currentFilter.description ||
          currentFilter.full_time ||
          currentFilter.location
            ? `&utf8=✓&description=${currentFilter.description}&location=${
                currentFilter.location
              }${currentFilter.full_time ? '&full_time=on' : ''}`
            : ''
        }`
      );

      setPage(currentPage);
      setHasNextPage(data.length > 0);
      setJobs([...oldJobs, ...data]);
    } catch (error) {
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (hasNextPage) loadJobs(jobs, page + 1);
  };

  const refreshList = () => {
    loadJobs();
  };

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
    loadJobs();
  }, [currentFilter]);

  return (
    <>
      <JobsList
        data={jobs}
        keyExtractor={(item, index) => String(index)}
        onRefresh={refreshList}
        refreshing={loading}
        onEndReachedThreshold={0.2}
        onEndReached={handleLoadMore}
        ListEmptyComponent={() => (
          <Empty icon="visibility-off" message="Nothing found" />
        )}
        renderItem={({item}) => (
          <Job
            onShowDescription={() => handleShowDescription(item)}
            {...item}
          />
        )}
      />

      <FilterModal
        filter={{currentFilter, setCurrentFilter}}
        modal={{openModal, setOpenModal}}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

Jobs.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    setOptions: PropTypes.func,
  }).isRequired,
};

export default Jobs;
