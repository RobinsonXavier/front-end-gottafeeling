/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function CheckBox({
  label,
  setData,
  data,
  genderId
}) {
  function getGender(param) {
    setData({
      ...data, genderId: param
    });
  }
  return (
    <CheckBoxStyle>
      <label htmlFor={label}>
        <input onClick={() => getGender(genderId)} type="radio" name="gender" required />
        {label}
      </label>
    </CheckBoxStyle>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string,
  setData: PropTypes.any,
  data: PropTypes.object,
  genderId: PropTypes.number
};

CheckBox.defaultProps = {
  label: 'Carregando...',
  setData: true,
  data: {},
  genderId: 0
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
