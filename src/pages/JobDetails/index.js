import React, {useEffect} from 'react';
import {View, TouchableOpacity, Linking} from 'react-native';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';

import {Container, Title, P, Strong, Line, ImageLogo, H2} from './styles';

const JobDetails = ({navigation, route}) => {
  const {job = {}} = route.params;

  // eslint-disable-next-line consistent-return
  const renderNode = (node, index, siblings, parent, defaultRenderer) => {
    switch (node.name) {
      case 'p':
        return (
          <P key={index} style={{}}>
            {defaultRenderer(node.children, parent)}
          </P>
        );

      case 'strong':
        return (
          <Strong key={index}>{defaultRenderer(node.children, parent)}</Strong>
        );

      case 'h2':
        return <H2 key={index}>{defaultRenderer(node.children, parent)}</H2>;

      default:
        <>{defaultRenderer(node.children, parent)}</>;
    }
  };

  useEffect(() => {
    if (!job.id) navigation.goBack();
  }, [job]);

  return (
    <Container>
      <View>
        <Title>{job.title}</Title>
        <Title hasSubTitle>{`${job.type} / ${job.location}`}</Title>
      </View>

      <Line />

      <HTMLView
        value={job.description
          .replace(/\r?\n|\r/g, '')
          .replace('Interessiert', `${Math.random() * 10}`)}
        renderNode={renderNode}
      />

      <Line />

      <TouchableOpacity onPress={() => Linking.openURL(job.company_url)}>
        <View>
          <Title>{job.company}</Title>
        </View>

        {job.company_logo && <ImageLogo source={{uri: job.company_logo}} />}
      </TouchableOpacity>

      <Line />

      <Title>How To Apply</Title>

      <HTMLView value={job.how_to_apply} renderNode={renderNode} />
    </Container>
  );
};

JobDetails.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      job: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
      }).isRequired,
    }),
  }).isRequired,
};

export default JobDetails;
