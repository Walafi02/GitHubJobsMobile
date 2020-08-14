import React from 'react';
import PropTypes from 'prop-types';

import {Container, LoadingView, LoadingIcon} from './styles';

const Loading = ({isVisible}) => {
  return (
    <Container visible={isVisible}>
      <LoadingView>
        <LoadingIcon />
      </LoadingView>
    </Container>
  );
};

Loading.propTypes = {
  isVisible: PropTypes.bool,
};

Loading.defaultProps = {
  isVisible: false,
};

export default Loading;
