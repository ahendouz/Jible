import React from "react";
import PropTypes from "prop-types";
import { User } from "styled-icons/feather/User";

import { InputStyle } from "../../styles";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  info,
  type,
  onChange
}) => {
  return (
    <InputStyle>
      <div className="info">{info}</div>
      <div className="input">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        <User />
      </div>
      <div className="error" />
    </InputStyle>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  // value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
