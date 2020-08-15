import React from 'react';
import PropTypes from 'prop-types';

import {Container, EmptyIcon, EmptyMessage} from './styles';

const Empty = ({icon, message}) => {
  return (
    <Container>
      <EmptyIcon name={icon} />
      <EmptyMessage>{message}</EmptyMessage>
    </Container>
  );
};

Empty.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Empty;
