import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find Contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
