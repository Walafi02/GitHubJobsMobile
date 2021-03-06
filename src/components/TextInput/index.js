import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Container, Input, Label} from './styles';

const TextInput = ({label, value, onChange, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>

      <Input
        placeholderTextColor="#ccc"
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChange}
        {...rest}
      />
    </Container>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  label: null,
  value: '',
};

export default TextInput;
