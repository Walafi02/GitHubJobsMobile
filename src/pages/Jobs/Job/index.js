import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {Container, Title, Type, Company, Location, Date, Card} from './styles';

const Job = ({
  id,
  title,
  type,
  company,
  location,
  created_at: date,
  onShowDescription,
}) => {
  const dateFormated = useMemo(() => moment(date).fromNow(), [date]);

  return (
    <Container onPress={() => onShowDescription(id)}>
      <Card>
        <Title>{title}</Title>
      </Card>

      <Card>
        <Company>{company} </Company>
        <Type>{type}</Type>
      </Card>

      <Card>
        <Location>{location} </Location>
        <Date>{dateFormated}</Date>
      </Card>
    </Container>
  );
};

Job.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};

export default memo(Job);
