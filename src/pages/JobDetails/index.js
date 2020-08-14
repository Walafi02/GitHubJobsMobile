import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';
import api from '~/services/api';
import {Loading} from '~/components';

// import { Container } from './styles';
// const htmlContent = `
//     <h1>This HTML snippet is now rendered with native components !</h1>
//     <h2>Enjoy a webview-free and blazing fast application</h2>
//     <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
//     <em style="textAlign: center;">Look at how happy this native cat is</em>
// `;

const JobDetails = ({route}) => {
  const {id = null} = route.params;
  const [loading, setLoading] = useState(false);

  const [job, setJob] = useState({});

  const loadJob = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = await api.get(`/positions/${id}.json`);
      setJob(data);
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  }, []);

  const htmlContent = `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;

  useEffect(() => {
    if (id) loadJob();
  }, [id, loadJob]);

  return (
    <>
      <View>
        <Text>{job.title}</Text>
        <ScrollView>
          <HTMLView value={job.how_to_apply} stylesheet={styles} />
        </ScrollView>
      </View>
      <Loading isVisible={loading} />
    </>
  );
};

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
  p: {
    fontSize: 16,

    // lineHeight: '1.5',
    color: '#444',
  },
});

JobDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default JobDetails;
