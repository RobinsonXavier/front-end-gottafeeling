/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function CheckBox({ label, setData, data }) {
  function getGender(param) {
    setData({
      ...data, gender: param
    });
  }
  return (
    <CheckBoxStyle>
      <label htmlFor={label}>
        <input onClick={() => getGender(label)} type="radio" name="gender" />
        {label}
      </label>
    </CheckBoxStyle>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string,
  setData: PropTypes.any,
  data: PropTypes.object
};

CheckBox.defaultProps = {
  label: 'Carregando...',
  setData: true,
  data: {}
};

const CheckBoxStyle = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 30px;
  input {
    width: 20px !important;
    height: 20px !important;
    margin: 5px !important;

  }
`;

export default CheckBox;
